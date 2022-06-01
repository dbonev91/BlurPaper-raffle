# Stage 1: Compile and Build Angular codebase

FROM node:latest as build

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run prod

# Stage 2: Serve the app with nginx server

FROM nginx:latest

COPY --from=build /usr/local/app/dist/paper-raffle /usr/share/nginx/html

COPY ./docker/dev/nginx.conf /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]
