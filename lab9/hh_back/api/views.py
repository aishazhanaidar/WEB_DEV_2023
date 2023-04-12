from django.shortcuts import render
from django.http.response import JsonResponse
from django.http.response import HttpResponse
import json
from api import models
from api.models import Company, Vacancy


def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json(), status=200)


def vacancies_by_company(request, company_id):
    try:
        vacancies = models.Vacancy.objects.all()
        vacancies2 = vacancies.filter(company=company_id)
        vacancies_json = [v.to_json() for v in vacancies2]
    except:
        return JsonResponse({'error': ' This company does not contain any vacancies'})
    if request.method == 'GET':
        return JsonResponse(vacancies_json, safe=False)


def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json(), status=200)


def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)

# Create your views here.
