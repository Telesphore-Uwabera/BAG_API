```markdown
# My RESTful API Project

This is a simple RESTful API project for user and simulation management. It provides basic CRUD (Create, Read, Update, Delete) operations for users and simulations, along with user authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Usage](#usage)
- [License](#license)

## Features

- User Registration and Authentication
- User CRUD operations (Create, Read, Update, Delete)
- Simulation CRUD operations
- MongoDB database for data storage
- JWT (JSON Web Token) based authentication
- Basic error handling and validation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB Atlas account or a local MongoDB server
- Git (optional, for version control)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Telesphore-Uwabera/BAG_API.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your MongoDB URI and JWT secret key (see [Configuration](#configuration)).

4. Start the server:

   ```bash
   node index.js
   ```

## Configuration

Create a `.env` file in your project root and add the following variables:

```env
MONGODB_URI=mongodb+srv://tuwabera:91073@Tecy@cluster0.f1p1xun.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=91073@Tecy
```

## API Endpoints

- User Endpoints:
  - `POST /api/users/register` - Register a new user.
  - `POST /api/users/login` - Authenticate and get a JWT token.
  - `GET /api/users` - Get a list of all users.
  - `GET /api/users/:id` - Get user by ID.
  - `PUT /api/users/:id` - Update user by ID.
  - `DELETE /api/users/:id` - Delete user by ID.

- Simulation Endpoints:
  - `POST /api/simulations` - Create a new simulation.
  - `GET /api/simulations` - Get a list of all simulations.
  - `GET /api/simulations/:id` - Get simulation by ID.
  - `PUT /api/simulations/:id` - Update simulation by ID.
  - `DELETE /api/simulations/:id` - Delete simulation by ID.

## Authentication

Authentication is based on JSON Web Tokens (JWT). To access protected routes, include the JWT token in the `Authorization` header of your HTTP requests using the `Bearer` scheme.

Example:

```http
GET /api/users/:id
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpc3QiOiIiLCJpYXQiOjE2OTg0MDM1NTcsImV4cCI6MTY5ODQwMzU4NywianRpIjoiand0X25vbmNlIn0.Gk2mfdElpDflYwl71Bscl1W_quKpQB972kt-rG8SM-A
```

## Usage

You can use this project as a starting point for building your own RESTful API. Customize the routes, controllers, and models to suit your specific needs. Additionally, consider adding more security features and validation for a production-ready API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

