#base image from which my image will be created
FROM openjdk:8

#Set the current directory to /src
WORKDIR /src

COPY ./Test.java .

RUN javac ./Test.java 

CMD java Test