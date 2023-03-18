# contains the functions that define pages in your web app
from django.shortcuts import render

# Create your views here.
# create a single view for the app's home page
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")