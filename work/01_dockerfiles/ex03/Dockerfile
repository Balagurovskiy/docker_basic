#	You will have to design a Dockerfile that gets the development
#	version of Gitlab - Community Edition installs it with all the dependencies and the necessary
#	configurations, and launches the application, all as it builds




#	GitLab is the first single application built from the ground up for all stages 
#	of the DevOps lifecycle for Product, Development, QA, Security, and 
#	Operations teams to work concurrently on the same project.

#	ca-certificates - allow SSL-based applications to check for the authenticity of SSL connections
#					SSL (Secure Sockets Layer) certificates create an encrypted connection and establish trust.

#	openssh-server  - OpenSSH provides a server daemon and client tools to facilitate secure, 
#	encrypted remote control and file transfer operations, effectively replacing the legacy tools.

#	curl -L/--location (HTTP/HTTPS) If the server reports that the requested 
#			page has moved to a different location, this option will make 
#			curl redo the request on the new place.
#	curl -O/--remote-name Write output to a local file named like the remote file we get.

#	external_url "http://gitlab.example.com" - In order for GitLab to display correct repository clone links to your users 
#			it needs to know the URL under which it is reached by your users, e.g. 
#			Add or edit the following line in /etc/gitlab/gitlab.rb:
#			Run sudo gitlab-ctl reconfigure for the change to take effect.

#	Gitlab provides a convenient script that adds the Gitlab repository to 
#	Debian and installs Gitlab. Grab the script with curl and run it as root.
#	When the script finishes, you can install Gitlab with apt:	apt install gitlab-ce

#	chmod +x on a file (your script) only means, that you'll make it executable

#	First time you access your GitLab CE install, it will prompt you to change your password. 
#	This is for your admin user with the username root.

#	tell Docker to expose the HTTP and SSH ports from GitLab on ports 80 and 22, respectively.


#	docker build -t dockerfile .
#	docker run -it --rm -p 80:80 -p 30022:22 --privileged dockerfile

##############################################################################

FROM ubuntu:16.04

RUN apt-get update -q \
    && apt-get install -yq --no-install-recommends \
      ca-certificates \
      openssh-server \
      curl \

WORKDIR /
RUN curl -LO https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh

RUN bash script.deb.sh

RUN apt-get update && EXTERNAL_URL="http://gitlab.example.com" apt-get install -yq gitlab-ce

EXPOSE 80 22

RUN (echo "gitlab-ctl reconfigure && gitlab-ctl start") >> /entry.sh

RUN chmod +x /entry.sh

CMD [ "bash", "/entry.sh" ]

