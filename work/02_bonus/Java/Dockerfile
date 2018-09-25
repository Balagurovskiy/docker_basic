FROM ubuntu

ENV GIT_REP=https://github.com/Balagurovskiy/docker_stuff.git

RUN apt-get update && apt-get upgrade -y
RUN apt-get install vim -y
RUN apt-get install git -y

#	INSTALL add-apt-repository
RUN apt-get install software-properties-common -y

#	UPDATE PPA (PersonalPackageArchives) FOR ORACLE LICENSE
RUN add-apt-repository ppa:webupd8team/java -y
RUN apt-get update

#	AUTO-AGREE TO LICENSE
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections

RUN apt-get install oracle-java8-installer -y

#	SET ENVIROMENT VARIABLES : JAVA_HOME, JAVA_JRE, JAVA_JDK
RUN apt-get install oracle-java8-set-default

RUN git clone ${GIT_REP} java_test
WORKDIR /java_test/Java/

RUN cat JavaSample.java

RUN javac JavaSample.java
RUN java JavaSample