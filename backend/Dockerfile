# Use the official Node.js image as the base image
FROM node:22.5.1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your backend will run on
EXPOSE 8080

# Define the command to run your application
CMD ["npm","start"]