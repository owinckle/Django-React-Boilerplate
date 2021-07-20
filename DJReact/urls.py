from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Frontend
    path('dashboard/', include('Frontend.urls')),
]