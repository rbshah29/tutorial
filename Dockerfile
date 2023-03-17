
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE ${PORT}
CMD [ "node", "app.js" ]
