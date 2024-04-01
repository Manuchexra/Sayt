from django.urls import path
from .views import UserCreateView

urlpatterns = [
    path('app/register/', UserCreateView.as_view(), name='register'),
]