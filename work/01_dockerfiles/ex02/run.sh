docker build -f ft-rails/Dockerfile -t ft-rails:on-build .;
docker build -t dockerfile .;
docker run -it --rm -p 3000:3000 dockerfile;