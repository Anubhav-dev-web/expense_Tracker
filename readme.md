

# Expense Tracker

Expense Tracker is a full-stack web application built with GraphQL, React, and MongoDB. It allows users to track their expenses and manage their finances effectively.

![preview ](https://github.com/Anubhav-dev-web/expense_Tracker/assets/80172002/33e7ca35-dc8f-499e-8a07-0c8cb81334c9)


## Features

- **GraphQL API:** Backend API powered by GraphQL for efficient and flexible data querying.
- **User Authentication:** Secure user authentication using bcryptjs for password hashing and Passport.js for authentication middleware.
- **MongoDB Database:** Data storage and management with MongoDB, a NoSQL database.
- **React Frontend:** Modern and responsive user interface created with React and Tailwind CSS.
- **Expense Management:** Add, view, update, and delete expenses with ease.
- **Session Management:** Express session middleware for managing user sessions.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **GraphQL**: Query language for APIs, providing a more efficient and powerful alternative to REST.
- **Apollo Server**: GraphQL server implementation for Node.js.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **bcryptjs**: Library for hashing passwords before storing in the database.
- **Passport**: Authentication middleware for Node.js.
- **dotenv**: Zero-dependency module that loads environment variables from a `.env` file.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend build tool that offers lightning-fast development server and optimized production builds.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive UI development.
- **Apollo Client**: GraphQL client for React applications.
- **React Router**: Declarative routing for React applications.
- **react-hook-form**: Performant form library with easy form validation and submission.
- **ESLint**: Pluggable JavaScript linter for code quality.
- **PostCSS**: CSS post-processor with autoprefixer for vendor prefixing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Anubhav-dev-web/expense_Tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

### Backend Setup

3. Install backend dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the `backend` folder with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   SESSION_SECRET=your_session_secret
   ```

5. Run the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

6. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

7. Install frontend dependencies:
   ```bash
   npm install
   ```

8. Start the frontend development server:
   ```bash
   npm run dev
   ```

9. Open your browser and visit `http://localhost:3000` to view the Expense Tracker app.

## Usage

- Sign up or log in to access the Expense Tracker dashboard.
- Add new expenses, categorize them, and view your spending trends.
- Edit or delete existing expenses as needed.
- Manage your finances effectively and stay on top of your expenses.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests for any improvements, features, or bug fixes.

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a pull request.
   

GraphQL - Query language for APIs.
React - JavaScript library for building user interfaces.
MongoDB - NoSQL database.
Tailwind CSS - Utility-first CSS framework.
Vite - Next-generation frontend build tool.
bcryptjs - Library for hashing passwords.
Passport.js - Authentication middleware for Node.js.
---
