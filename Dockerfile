FROM nginx

COPY ./ /usr/share/nginx

RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g bower gulp && \
    cd /usr/share/nginx && \
    npm install
