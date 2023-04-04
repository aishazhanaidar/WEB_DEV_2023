from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http.response import JsonResponse
from django.http.response import HttpResponse

from api import models
from api.models import Product, Category



def list_of_products(request):
    products = Product.objects.all()
    products_json = [p.to_json_product() for p in products]
    return JsonResponse(products_json, safe=False)

def product_by_id(request, product_id):
    try:
        products = Product.objects.get(id=product_id)
        products_json = products.to_json_product()
        return JsonResponse(products_json)
    except:
        return JsonResponse({'error': 'Product not found'})


def list_of_categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json_category() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_by_id(request, category_id):
    try:
        categories = Category.objects.get(id=category_id)
        category_json = categories.to_json_category()
        return JsonResponse(category_json)
    except:
        return JsonResponse({'error': 'Category not found'})

def products_by_category(request,category_id):
    try:
        products = models.Product.objects.all()
        products2 = products.filter(cat_id=category_id)
        products_json = [p.to_json_product() for p in products2]
        return JsonResponse(products_json, safe=False)
    except:
        return JsonResponse({'error': ' This category does not contain any products'})

