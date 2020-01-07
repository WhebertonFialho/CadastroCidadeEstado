from rest_framework.serializers import ModelSerializer
from cidade.models import Cidade

class CidadeSerializer(ModelSerializer):
    class Meta:
        model = Cidade
        fields = ['id', 'nome']