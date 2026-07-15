FROM nginx:alpine

# Copy static files to the default Nginx public directory
COPY . /usr/share/nginx/html

# Clean up dev, backend, and docker-specific folders/files from serving folder
RUN rm -rf /usr/share/nginx/html/backend \
           /usr/share/nginx/html/nginx \
           /usr/share/nginx/html/docker-compose.yml \
           /usr/share/nginx/html/Dockerfile \
           /usr/share/nginx/html/.git \
           /usr/share/nginx/html/.gitignore \
           /usr/share/nginx/html/README.md

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
