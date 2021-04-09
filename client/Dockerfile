# base image
FROM node:12-alpine AS builder
# set working directory
WORKDIR /app
# install client node packages
COPY ./package.json ./yarn.lock ./
RUN yarn install --network-timeout 100000 --frozen-lockfile
# yarn build for client
COPY . .
# assumes build is within current directory
RUN yarn run build

# nginx state for serving content
FROM nginx:alpine
# copy nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf
# support running as arbitrary user which belogs to the root group
RUN chmod -R 777 /var/cache/nginx /var/run /var/log/nginx /etc/nginx/* /usr/share/nginx/html
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# below leverages envsubst to allow for runtime customization of proxy_pass environment values
  # COPY ./env.sh .
  # Make our shell script executable
  # RUN chmod +x env.sh
  # CMD sh -c "envsubst '\$REACT_APP_API_URL' < /etc/nginx/nginx.template.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 8080
