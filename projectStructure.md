# 📂 SwapReads Project Structure

This document provides a detailed overview of the folder and file structure in the **SwapReads** repository. It is meant to help developers and contributors quickly understand the organization of the project.

---

## Root Directory

- **README.md**: Overview of the project, setup instructions, and usage guide.
- **LICENSE**: License information for the project.
- **.gitignore**: Specifies files and directories to ignore in Git.
- **package.json**: Metadata and dependencies for the project.
  
---

## Frontend (`client/`)

### 📂 `public/` Folder
- **index.html**: Main HTML file, entry point for the frontend application.
- **favicon.ico**: Favicon for the application.
- **assets/**: Static files like images, icons, and other resources.
  - **logo.png**: Example logo image.
  - **icons/**: Icons used across the app.
  - **backgrounds/**: Background images for different sections.

### 📂 `src/` Folder
Main frontend application source code.

- **index.js**: Entry point for the frontend application (renders the root component).
- **App.js**: Root app component, manages layout and routing.

#### 📂 `components/`
Reusable UI components.

- **Header.js**: Header component for navigation.
- **Footer.js**: Footer component.
- **BookCard.js**: Component for displaying individual book information.
- **SearchBar.js**: Search bar component for searching books.

#### 📂 `pages/`
Page components for each route.

- **Home.js**: Home page layout and functionality.
- **Browse.js**: Browse books page.
- **Profile.js**: User profile page.
- **BookDetails.js**: Page for displaying the details of a specific book.

#### 📂 `services/`
API calls and external service handlers.

- **api.js**: Functions for managing API requests to the backend.

#### 📂 `utils/`
Utility functions for the frontend.

- **helpers.js**: General helper functions.
- **constants.js**: Constants used throughout the frontend.

#### 📂 `styles/`
Styles for the frontend.

- **index.css**: Global styles for the application.
- **variables.css**: CSS variables for theming and colors.
- **components/**: Component-specific styles.
  - **Header.css**: Styles for the Header component.
  - **Footer.css**: Styles for the Footer component.
  - **BookCard.css**: Styles for the BookCard component.

---

## Backend (`server/`)

### 📂 `config/`
Configuration files for the backend.

- **dbConfig.js**: Database configuration and connection.
- **envConfig.js**: Environment variable configuration.

### 📂 `controllers/`
Business logic for handling requests.

- **bookController.js**: Handles book-related requests.
- **userController.js**: Handles user-related requests.
- **authController.js**: Handles authentication and authorization.

### 📂 `models/`
Database models and schemas.

- **Book.js**: Schema/model for the Book data.
- **User.js**: Schema/model for the User data.
- **Transaction.js**: Model for book swapping transactions.

### 📂 `routes/`
API route definitions.

- **bookRoutes.js**: Routes for book-related operations.
- **userRoutes.js**: Routes for user-related operations.
- **authRoutes.js**: Routes for authentication (login, signup).

### 📂 `middleware/`
Middleware for the backend.

- **authMiddleware.js**: Authentication middleware for protecting routes.
- **errorHandler.js**: Global error handling middleware.

### 📂 `utils/`
Utility functions for the backend.

- **generateToken.js**: Token generation for user authentication.
- **logger.js**: Logging utility for errors and requests.

### 📂 `tests/`
Unit and integration tests for the backend.

- **controllers/**: Tests for controller functions.
  - **bookController.test.js**: Tests for `bookController` functions.
  - **userController.test.js**: Tests for `userController` functions.
- **models/**: Tests for database models.
  - **Book.test.js**: Unit tests for the `Book` model.
- **routes/**: Tests for API routes.
  - **bookRoutes.test.js**: Tests for book routes.
  - **authRoutes.test.js**: Tests for authentication routes.

---

## Documentation (`docs/`)

- **API.md**: API documentation (includes details about endpoints, request/response formats).
- **INSTALLATION.md**: Installation instructions and setup guide for the project.
- **CONTRIBUTING.md**: Guidelines for contributing to the project.

---


