FROM node:alpine
WORKDIR /app

COPY ./9_SEQUELIZE/12_remover_relacionados/package*.json .

RUN npm install

COPY ./9_SEQUELIZE/12_remover_relacionados/ .

EXPOSE 3000

#Atualizar data do container
RUN apk update
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
RUN echo "America/Sao_Paulo" >  /etc/timezone


CMD [ "npm", "start"]
