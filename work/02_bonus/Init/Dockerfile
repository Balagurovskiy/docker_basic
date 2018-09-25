FROM debian

ENV GIT_REP=https://github.com/Balagurovskiy/42-init.git

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils \
										 git \ 
										 iptables \
										 cron \
										 rsyslog \
										 wget \
										 ca-certificates openssh-server

RUN git clone ${GIT_REP} init

WORKDIR /init/

RUN chmod +x scripting/01
RUN chmod +x scripting/02
RUN chmod +x scripting/03
RUN chmod +x scripting/04
RUN chmod +x scripting/05

RUN chmod +x system/01
RUN chmod +x system/02
RUN chmod +x system/03
RUN chmod +x system/04
RUN chmod +x system/05
RUN chmod +x system/06
RUN chmod +x system/07
RUN chmod +x system/08
RUN chmod +x system/09
RUN chmod +x system/10
RUN chmod +x system/11
RUN chmod +x system/12
RUN chmod +x system/13
RUN chmod +x system/14
RUN chmod +x system/15
RUN chmod +x system/16
RUN chmod +x system/17
RUN chmod +x system/18
RUN chmod +x system/19

CMD [ "bash" ]
