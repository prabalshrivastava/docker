#base image from which my image will be created
FROM openjdk:8

WORKDIR /src

COPY Test.java .

RUN javac Test.java

#run the application when container starts.
CMD java Test