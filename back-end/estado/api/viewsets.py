from rest_framework.viewsets import ModelViewSet
from estado.models import Estado
from .serializers import EstadoSerializer

class EstadoViewSet(ModelViewSet):
    queryset = Estado.objects.all()
    serializer_class = EstadoSerializer