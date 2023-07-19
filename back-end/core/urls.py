from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from estado.api.viewsets import EstadoViewSet
from cidade.api.viewsets import CidadeViewSet

router = routers.DefaultRouter()
router.register(r'estados', EstadoViewSet)
router.register(r'cidades', CidadeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]