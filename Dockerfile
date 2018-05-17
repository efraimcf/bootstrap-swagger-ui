###
# swagger-ui-builder - https://github.com/wordnik/swagger-ui/
# Container for building the swagger-ui static site
#
# Build: docker build -t swagger-ui-builder .
# Run:   docker run -v $PWD/dist:/build/dist swagger-ui-builder
#
###

FROM    ubuntu:16.04
MAINTAINER dnephin@gmail.com

ENV     DEBIAN_FRONTEND noninteractive

RUN     apt-get update && apt-get install -y git npm nodejs-legacy openjdk-8-jre
RUN     ln -s /usr/bin/nodejs /usr/local/bin/node

WORKDIR /build
ADD     package.json    /build/package.json
RUN     npm config set registry="http://registry.npmjs.org/"
RUN     npm install
ADD     .   /build
CMD     ./node_modules/gulp/bin/gulp.js serve