from django.shortcuts import render

def ark(request):
	return render(request, "app/app.html")