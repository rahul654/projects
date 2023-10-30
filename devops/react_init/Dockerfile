# +++ Stage 1: Build React App +++
# Using Node 14 as the build environment
FROM node:20 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# +++ Stage 2: Create the Production Image +++
# Using an NGINX-based lightweight image
FROM nginx:alpine

# Copy the built React app from the builder stage to the NGINX server's web root
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80

# The NGINX server starts automatically, no need for a CMD or ENTRYPOINT
