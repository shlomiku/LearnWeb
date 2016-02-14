from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from firebase import firebase
import json

# Create your views here.

def home_view(request):
    return render(request, "landing.html", {})

@csrf_exempt
def submit_contact(request, ):
    user = json.loads(request.body)
    fire = firebase.FirebaseApplication('https://kushchi-contact-list.firebaseIO.com', None)
    result = fire.post('/users', user)
    return render(request, "landing.html", {})

