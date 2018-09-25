docker build -t dockerfile .;
docker run -it --rm -p 9987:9987/udp -p 10011:10011/tcp -p 30033:30033/tcp dockerfile;