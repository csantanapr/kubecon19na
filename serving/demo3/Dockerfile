FROM registry.access.redhat.com/ubi8/nodejs-12

COPY . .

RUN npm install --production

CMD [ "npm", "start" ]