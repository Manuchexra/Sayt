from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import CustomUser
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'email', 'age', 'country', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    