# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the entire src directory to the container
COPY src/ ./src/

# Copy the public directory to the container
COPY public/ ./public/

# Copy the additional directory to the container
COPY additional-directory/ ./additional-directory/

# Build the frontend code
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Set the command to run the frontend server
CMD ["npm", "start"]
