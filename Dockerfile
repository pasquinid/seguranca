FROM readytalk/nodejs

WORKDIR /app
COPY app.js /app/
COPY package.json /app/
RUN npm install

CMD sleep infinity
