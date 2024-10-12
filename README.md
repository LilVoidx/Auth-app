
---

# Authentication Application

This application provides user registration, login, and protected routes using Express.js, PostgreSQL, and JWT authentication.

## Features

- **User Registration**: Allows users to register with a valid email and password, which are securely stored after hashing.
  
- **User Login**: Validates user credentials and issues a JWT token for authentication.
  
- **Protected Routes**: Utilizes JWT tokens to protect routes and allow access only to authenticated users.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LilVoidx/Auth-app.git
   cd Auth-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Copy `.env.example` to `.env` and configure with your PostgreSQL credentials and JWT secret.

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000` by default.

## API Endpoints

- **POST `/register`**: Register a new user.
- **POST `/login`**: Log in with existing credentials and receive a JWT token.
- **GET `/protected`**: Access a protected route requiring authentication.

## Technologies Used

- Express.js
- PostgreSQL
- JWT (JSON Web Tokens)
- bcrypt for password hashing
