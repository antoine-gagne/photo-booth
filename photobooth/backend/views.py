from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from . import models
from . import serializer

# Create your views here.
@api_view(["GET"])
def api_root(request):
    return Response({"photos": reverse("photos-list", request=request, format=format)})


class PhotoViewSet(viewsets.ModelViewSet):
    """
    Photo View Set.

    Provide `list`, `create`, `retrieve`,`update` and `destroy` actions.
    """

    queryset = models.Photo.objects.all()
    serializer_class = serializer.PhotosSerializer
