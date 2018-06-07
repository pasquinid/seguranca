FROM readytalk/nodejs

WORKDIR /app
COPY app.js /app/
COPY app_aux.js /app/ 
COPY package.json /app/
RUN npm install

RUN apt-get install -y procps

CMD sleep infinity
