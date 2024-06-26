from django.db import models

class CustomUser(models.Model):
    username=models.CharField(max_length=200)
    password=models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    age = models.IntegerField()
    country = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    def __str__(self):
        return self.username
