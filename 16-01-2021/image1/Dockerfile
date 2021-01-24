#base image from which my image will be created
FROM httpd

WORKDIR /usr/local/apache2/htdocs/

#copy the index.html to htdocs directory
#ADD ./index.html ./
ADD ./files.zip /usr/local/apache2/htdocs/

#expose port 80 for listening to incoming request
EXPOSE 80

#run apache in foreground
CMD apachectl -D FOREGROUND