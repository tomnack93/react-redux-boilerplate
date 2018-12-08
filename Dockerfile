FROM node:10.13.0-alpine

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "run", "start"]
