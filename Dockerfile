# version of node to use
FROM node:18
# Directory to save image
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
RUN npm run build
EXPOSE 4200
CMD [ "npm", "run", "start" ]