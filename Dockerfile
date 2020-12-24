# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12-alpine as build-stage
WORKDIR /app
COPY .npmrc package.json /app/
RUN npm cache clean -f
RUN npm install
COPY ./ /app/
RUN npm run build --prod --output-path=./dist/out

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
