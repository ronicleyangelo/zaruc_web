# Primeiro estágio - construir o aplicativo Angular
FROM node:latest as builder

LABEL authors="ronic"

WORKDIR /app

COPY package.json /app

RUN npm install --silent

COPY . .

RUN npm run build

FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=builder app/dist/browser /usr/share/nginx/html

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
