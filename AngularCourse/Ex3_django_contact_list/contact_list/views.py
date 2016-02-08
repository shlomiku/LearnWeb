from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def home_view(request):
    return render(request, "landing.html", {})

@csrf_exempt
def submit_contact(request):
    # print request.body
    return render(request, "landing.html", {})

