# Cadastro de Cidade e Estados

Desenvolvido usando as tecnologias:

BackEnd: Python + Django + Django REST Framework;

FrontEnd: ReactJS + CoreUI;

## Instalação

Após copiar os arquivos.
No diretório './back-end'; (Recomendado o uso do 'venv')

```bash
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata fixtures
```

No diretório './front-end';
```
npm install --legacy-peer-deps
```

## Execução

No diretório './back-end';
```
python manage.py runserver
```

No diretório './front-end';

```
npm start
```
