# Use the official Python image as the base image
FROM python:3.6-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt to the container
COPY requirements.txt ./

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the entire project directory to the container
COPY . .

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Change to the frontend directory
WORKDIR /app/frontend

# Copy frontend package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Expose the Flask and frontend ports
EXPOSE 8000
EXPOSE 3000

# Change back to the main working directory
WORKDIR /app

# Start the Flask server
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]


# Start the frontend development server
CMD ["npm", "start"]
