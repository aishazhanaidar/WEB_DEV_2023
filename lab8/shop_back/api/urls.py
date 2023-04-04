from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.list_of_products),
    path('products/<int:product_id>/', views.product_by_id),
    path('categories/', views.list_of_categories),
    path('categories/<int:category_id>/', views.category_by_id),
    path('categories/<int:category_id>/products/', views.products_by_category)
]