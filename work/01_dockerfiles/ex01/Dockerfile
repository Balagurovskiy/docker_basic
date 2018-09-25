#	From a debian image you will add the appropriate sources to create a TeamSpeak
#	server, that will launch along with your container. It will be deemed valid if at least
#	one user can connect to it and engage in a normal discussion (no far-fetched setup), so
#	be sure to create your Dockerfile with the right options. Your program should get the
#	sources when it builds, they cannot be in your repository




#	apt-get -y 	Automatic yes to prompts

#	bunzip2 	unzip *.bz2
#	tar -f 	Filename where the archive is stored
#	tar -x	Extract files from archive.
#	tar -v 	Verbose operation mode.

#	docker build -t dockerfile .
#	docker run -it --rm -p 9987:9987/udp -p 10011:10011/tcp -p 30033:30033/tcp dockerfile

#	9987 default voice 10011 server query 30033 file transport

#	AHTUNG CLIENT VERSION IS 3.0.19  (LATEST SERVER VERSION 3.3.1)

#	connect to local ip 127.0.0.1

#	#	#	#	#	#	#	#	#	#	#	#	#	#	#	#

FROM debian

ENV TS_LINK=http://dl.4players.de/ts/releases/
ENV TS_VER=3.0.13.8
ENV TS_FILENAME=teamspeak3-server_linux_amd64
ENV TS_ARCHIVE=${TS_FILENAME}-${TS_VER}

RUN apt-get update -y && apt-get upgrade -y 

RUN apt-get install bzip2 -y 
RUN apt-get install wget wget ca-certificates -y

RUN wget ${TS_LINK}${TS_VER}/${TS_ARCHIVE}.tar.bz2

RUN bunzip2 ${TS_ARCHIVE}.tar.bz2 && tar -xvf ${TS_ARCHIVE}.tar && rm ${TS_ARCHIVE}.tar

ENV TS3SERVER_LICENSE accept

EXPOSE 9987/udp 10011 30033 

WORKDIR ${TS_FILENAME}

CMD ["sh", "ts3server_minimal_runscript.sh"]