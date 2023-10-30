# +++ Stage 1 +++
# Using Node 12 buster slim image to build the application
FROM node:20.9.0-slim as builder

# Copying data to the container
COPY . /data/app/

# Setting WORKDIR
WORKDIR /data/app/

# Removing .git folder to reduce container size
RUN rm -rf .git

# Setting permissions to build the app
# Needed to avoid Permission Denied errors
RUN chown -R root:root /data/app
RUN chmod -R 700 /data/app

# Using root user
USER root

# Installing dependencies
RUN npm install

# Compiling the code
RUN ./node_modules/typescript/bin/tsc

# +++ Stage 2 +++
# Creating the actual image after building it
FROM node:20.9.0-slim

# Copy only the built artifacts from the builder stage
COPY --from=builder /data/app /data/app

# Setting WORKDIR
WORKDIR /data/app

# Setting permissions for all folders
RUN chown -R node:node /data/app

# Using non-root user to run the application
USER node

# Exposing port 3000 to be mapped with Docker Daemon
EXPOSE 3000

# Command to start the node server
CMD ["node", "dist/src/index.js"]
