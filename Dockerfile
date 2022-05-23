FROM node:16-alpine3.14

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

RUN npm prune --production

EXPOSE 3000
CMD [ "node", "./build" ]