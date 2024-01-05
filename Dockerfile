FROM python:3.12-slim

WORKDIR TFB-Website/app

COPY . .

RUN pip3 install -r requirements.txt

CMD gunicorn --bind 0.0.0.0:5000 wsgi:app