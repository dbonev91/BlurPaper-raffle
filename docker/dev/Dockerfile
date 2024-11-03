# Stage 1: Compile and Build Angular codebase

# Downgrade NodeJS 21 as a workaround for the ExperimentalWarning
# Upgrade it when there is a fix version deployed
FROM node:21 as build

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

ARG ENVIRONMENT_NAME

ENV ENVIRONMENT=$ENVIRONMENT_NAME

RUN npm run ${ENVIRONMENT}

# Stage 2: Serve the app with nginx server

FROM nginx:latest

COPY --from=build /usr/local/app/dist/paper-raffle /usr/share/nginx/html

ARG ENVIRONMENT_NAME

ENV ENVIRONMENT=$ENVIRONMENT_NAME

COPY docker/dev/${ENVIRONMENT}.nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
