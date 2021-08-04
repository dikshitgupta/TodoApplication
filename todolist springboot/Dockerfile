FROM openjdk:11-jre-slim
MAINTAINER Dikshit Gupta
ADD target/todolist-backend.jar todolist-backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "todolist-backend.jar"]

#
#    environment:
#      SPRING_DATASOURCE_URL: jdbc:mysql://docker-mysql:3306/todolistdb?autoReconnect=true&useSSL=false
#      SPRING_DATASOURCE_USERNAME: "root"
#      SPRING_DATASOURCE_PASSWORD: "root"
