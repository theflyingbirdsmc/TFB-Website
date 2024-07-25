FROM python:3.12-slim

COPY . .

RUN pip3 install -r requirements.txt

RUN ls -la

CMD gunicorn --bind 0.0.0.0:5000 wsgi:app