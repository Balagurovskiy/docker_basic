docker build -t dockerfile .;
docker run -it --rm -p 80:80 -p 30022:22 --privileged dockerfile;