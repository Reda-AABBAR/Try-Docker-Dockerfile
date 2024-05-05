FROM nginx
WORKDIR /app
COPY ./web .
COPY ./default.conf /etc/nginx/conf.d


