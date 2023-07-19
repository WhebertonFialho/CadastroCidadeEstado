from rest_framework.serializers import ModelSerializer
from estado.models import Estado

class EstadoSerializer(ModelSerializer):
    class Meta:
        model = Estado
        fields = '__all__'