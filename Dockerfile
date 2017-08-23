FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
Run cd /usr/src/app/
#Run npm install

# Bundle app source
COPY . /usr/src/app
Run npm install

EXPOSE 3000
CMD [ "node", "app.js" ]