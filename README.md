# credot-ecomerce

# Node.js Express Project

This is a Node.js project using the Express framework, with MongoDB for database access and OpenAPI for API documentation.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Database Access](#database-access)
- [Development](#development)
- [License](#license)

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
   MONGODB_URI=mongodb://localhost:27017/test
   JWT_SECRET=SECRET-KEY-API-V2.00

here test is the name of your MongoDB database.

## Running the Project

Before running this project make sure that your mongodb database started database service on port 27017

To start the server in development mode, run:

   npm start


## API Documentation

The OpenAPI documentation for the API can be accessed at:

   http://localhost:8080/api-docs

## Database Access

This project uses MongoDB as the database. The default MongoDB port is 27017.
