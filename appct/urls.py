from django.urls import path
from appct.views import home


urlpatterns = [
    path('', home)
]