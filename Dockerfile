FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy dependencies into image
COPY package.json /usr/src/app/
COPY app.js /usr/src/app
RUN cd /usr/src/app/
RUN npm install

EXPOSE 3000
CMD [ "node", "app.js" ]