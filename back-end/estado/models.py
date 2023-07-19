from django.db import models

class Estado(models.Model):
    nome = models.CharField(max_length=20)
    sigla = models.CharField(max_length=2)
    
    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Estado'
        verbose_name_plural = 'Estados'
        db_table = 'tab_estado'