FROM ubuntu:latest
CMD ["bash"]
RUN apt update -y && apt upgrade -y && apt install wget git nodejs npm -y && apt clean
WORKDIR /root
USER root
COPY ./ portfolio/
WORKDIR /root/portfolio
RUN npm install
ENTRYPOINT npm start
