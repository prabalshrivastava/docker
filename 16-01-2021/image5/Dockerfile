# build
FROM node:14.15 AS Stage1

RUN npm install -g @angular/cli

COPY . .

RUN ng build --prod

######################STAGE 2#############

FROM httpd

COPY --from=Stage1 /src/dist/app1 /usr/local/apache/htdocs

EXPOSE 80

CMD apachectl -D FOREGROUND