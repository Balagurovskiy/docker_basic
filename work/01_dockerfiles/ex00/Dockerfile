#	From an alpine image you’ll add to your container your favorite text editor, vim or
#	emacs, that will launch along with your container.

#	docker build -t dockerfile .
#	docker run -it --rm dockerfile

#	#	#	#	#	#	#	#	#	#	#	#	#	#	#	#

FROM alpine

RUN apk update && apk upgrade && apk add vim

CMD ["vim"]