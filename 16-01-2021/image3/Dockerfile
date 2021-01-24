#base image from which my image will be created
FROM alpine

RUN apk add openjdk8-jre

WORKDIR /src

COPY Test.class .

CMD java Test