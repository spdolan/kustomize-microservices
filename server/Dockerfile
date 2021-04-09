# build our application
FROM node:12-alpine as builder
WORKDIR /app
# install application node packages
COPY ./package.json /yarn.lock ./
RUN yarn install --network-timeout 100000 --frozen-lockfile
# copy remaining Express application
COPY . .
RUN yarn run build

# run our application
FROM node:12-alpine
WORKDIR /app
# install application node packages
COPY ./package.json /yarn.lock ./
RUN yarn install --network-timeout 100000 --frozen-lockfile
# copy compiled Express application
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD yarn start