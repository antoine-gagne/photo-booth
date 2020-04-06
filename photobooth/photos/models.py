from django.db import models

# Create your models here.

class Photo(models.Model):
    name = models.CharField(max_length=256)
    image = models.FileField(upload_to='uploads/%Y/%m/%d/')