from django.urls import path, re_path, include
from .views import *

urlpatterns = [
    path('', ContactCreateView.as_view())
] 