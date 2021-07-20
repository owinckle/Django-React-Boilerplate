from django.conf.urls import url
from django.urls import path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
	path("", views.ark, name="app-main"),
	url(r".*/$", views.ark)
]