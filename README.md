# credot-ecomerce

# Node.js Express Project

This is a Node.js project using the Express framework, with MongoDB for database access and OpenAPI for API documentation.


#  Dockerization 

## Table of Contents
- [Prerequisites](#Prerequisites for dockerization)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)


Dockerized MongoDB Project
This repository contains a Dockerized project that sets up a MongoDB database using the official MongoDB Community Server image. The setup includes Docker Compose for easier container management and environment variables for MongoDB connection.

##Prerequisites
Before you begin, ensure you have the following installed on your machine:

Docker
Docker Compose
MongoDB Setup
The MongoDB container is set up using the official MongoDB Community Server image (mongodb/mongodb-community-server:5.0.8-ubuntu2004). This image is based on Ubuntu 20.04 and runs MongoDB 5.0.8.

Running with Docker
If you prefer to run MongoDB directly with Docker, use the following command:


```
docker run --name mongodb -d -p 27017:27017 -v mongo-data:/data/db/ mongodb/mongodb-community-server:5.0.8-ubuntu2004
```

Explanation:
--name mongodb: Names the container mongodb.
-d: Runs the container in detached mode.
-p 27017:27017: Maps port 27017 on your local machine to port 27017 inside the container.
-v mongo-data:/data/db/: Mounts the Docker volume mongo-data to the /data/db/ directory in the container to ensure persistent storage of MongoDB data.
mongodb/mongodb-community-server:5.0.8-ubuntu2004: Specifies the MongoDB Docker image.


## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   
## Configuration

edit docker-compose.yml with suitable environment variable MONGO_REMOTE_URI with mongodb://<your privet ip address>/test
also edit frontend --> src --> config ---> api.ts with REMOTE_URL = "http://<your privet ip address>:8080"

## Running the Project

```
docker  compose build
docker compose up -d
```

# Without docker 


## Table of Contents
- [Prerequisites](#Prerequisites for dockerization)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)


## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Install dependencies

   npm install

## Configuration

Create a .env file in the root directory of backend file and add the following configuration:

   APP_PORT=8080
   DB_PORT=27017 
   MONGO_LOCAL_URI = mongodb://<your privet iP address>/test
   MONGO_REMOTE_URI = mongodb://<your privet iP address>:27017/test
   JWT_SECRET=SECRET-KEY-API-V2.00
   NODE_ENV=development

here test is the name of your MongoDB database.
set NODE_ENV=development for development and NODE_ENV=production for production

## Running the Project

Before running this project make sure that your mongodb database started database service on port 27017

To start the server in development mode, run:

   npm start


# Documentation


## Table of Contents
- [Prerequisites](#Prerequisites for dockerization)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API](#api-documentation)
- [Database Access](#database-access)


## API 

The OpenAPI documentation for the API can be accessed at:

   http://localhost:8080/api-docs

## Database Access

This project uses MongoDB as the database. The default MongoDB port is 27017.
