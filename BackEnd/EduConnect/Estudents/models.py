from django.db import models

# Create your models here.
class Estudents(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    class Meta:
        db_table = 'estudents'