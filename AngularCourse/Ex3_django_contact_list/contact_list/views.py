from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from firebase import firebase
import json

def home_view(request):
	# fire = firebase.FirebaseApplication('https://kushchi-contact-list.firebaseIO.com', None)
	# users = fire.get('/users', None).values()
	return render(request, "landing.html", {})

@csrf_exempt
def submit_contact(request, ):
	user = json.loads(request.body)
	fire = firebase.FirebaseApplication('https://kushchi-contact-list.firebaseIO.com', None)
	result = fire.post('/users', user)
	return render(request, "landing.html", {})

def get_user_list(request):
	fire = firebase.FirebaseApplication('https://kushchi-contact-list.firebaseIO.com', None)
	users = fire.get('/users', None).values()
	return JsonResponse(users, safe=False)