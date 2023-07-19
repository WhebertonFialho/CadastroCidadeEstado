from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from estado.api.serializers import EstadoSerializer
from cidade.models import Cidade

class CidadeSerializer(ModelSerializer):
    estado = EstadoSerializer(read_only=True)

    class Meta:
        model = Cidade
        fields = ['id', 'nome', 'estado']