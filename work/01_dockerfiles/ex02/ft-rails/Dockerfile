
#	You are going to create your first Dockerfile to containerize Rails applications. That’s
#	a special configuration: this particular Dockerfile will be generic, and called in another
#	Dockerfile





#	Rake is a software task management and build automation tool. 
#	It allows the user to specify tasks and describe dependencies as well as to group tasks in a namespace

#	Gem Bundler helps you track and install the gems you need for your Ruby project.
#	bundle install - Install all of the required gems from your specified sources:

#	rails new app - install server to folder 'app/'

#	bundle install - Install all of the required gems

#	CreateProducts - This migration adds a table called products with a string column called name after running 'rake db:migrate'

#	db:migrate - runs (single) migrations that have not run yet.
#	db:create - creates the database
#	db:drop - deletes the database
#	db:schema:load - creates tables and columns within the (existing) database following schema.rb

#	docker build -t ft-rails:on-build .
#	docker run -it --rm ft-rails:on-build

################################################################

FROM ruby

RUN apt-get update -y && \
    apt-get upgrade -y 

RUN	apt-get install nodejs -y

RUN	gem install rails bundler

ONBUILD WORKDIR /opt
ONBUILD RUN rails new app
ONBUILD WORKDIR /opt/app

ONBUILD RUN bundle install
ONBUILD RUN rails generate migration CreateProducts name:string
ONBUILD RUN rake db:migrate
 