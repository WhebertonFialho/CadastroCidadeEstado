from django.db import models
from estado.models import Estado

class Cidade(models.Model):
    nome = models.CharField(max_length=150)
    estado = models.ForeignKey(Estado, models.CASCADE)
    
    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Cidade'
        verbose_name_plural = 'Cidades'
        db_table = 'tab_cidade'