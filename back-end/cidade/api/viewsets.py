from rest_framework.viewsets import ModelViewSet
from cidade.models import Cidade
from .serializers import CidadeSerializer

class CidadeViewSet(ModelViewSet):
    queryset = Cidade.objects.all()
    serializer_class = CidadeSerializer