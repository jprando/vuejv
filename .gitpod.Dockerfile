FROM node/lts-alpine
RUN npm install -g npm
RUN npm install -g eslint prettier @vue/cli
