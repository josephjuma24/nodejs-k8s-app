FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]

# --- a/file:///c%3A/Users/Juma/projects/nodejs-k8s-app/test/Dockerfile
# +++ b/file:///c%3A/Users/Juma/projects/nodejs-k8s-app/test/Dockerfile
# @@ -1,1 +1,3 @@