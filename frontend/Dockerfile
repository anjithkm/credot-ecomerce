#Use the official Node.js image as the base image
FROM node:22.5.1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the React application
RUN npm install -g serve

# Expose the port that the web server will run on
EXPOSE 80

# Command to run the web server and serve the built React application
CMD ["serve", "-s", "build", "-l", "80"]