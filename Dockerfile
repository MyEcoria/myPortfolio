FROM ubuntu:latest
CMD ["bash"]
RUN apt update -y && apt upgrade -y && apt install wget git nodejs npm -y && apt clean
WORKDIR /root
USER root
COPY ./ proxy/
WORKDIR /root/proxy
RUN npm install
ENTRYPOINT npm start
