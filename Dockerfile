FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

COPY . .

EXPOSE 3000

