from django.db import models

# Create your models here.
class Fathers(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    estundentId = models.ForeignKey()
    class Meta:
        db_table = 'fathers'
