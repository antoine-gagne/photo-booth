from rest_framework import serializers

from . import models

class PhotosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Photo
        fields = ["url", "name"]
