#	rails s - alias “s” to start the server: 
#	rails -b 0.0.0.0 - The -b option binds Rails to the specified ip, by default it is 0.0.0.0
#	rails -p 3000 - set port (by def 3000)

#	docker build -t dockerfile .
#	docker run -it --rm -p 3000:3000 dockerfile

#	lsof -i tcp:3000 - Find Processes running on Specific Port

##########################################

FROM ft-rails:on-build

EXPOSE 3000
CMD [ "rails" , "s", "-b", "0.0.0.0", "-p", "3000"]