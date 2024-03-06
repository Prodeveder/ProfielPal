# ProfielPal

# ProfilePal Web App Design Document

## Overview

ProfilePal is a web application that allows users to create accounts, log in, and manage their profile information. It aims to provide a seamless and user-friendly experience for users to interact with their personal details.

## Features

1. **User Authentication:**
   - Allow users to register for an account.
   - Provide a secure login mechanism.

2. **User Profile Management:**
   - Enable users to input and update their personal information.
   - Display the user's profile information in a clean and organized manner.

3. **Responsive Design:**
   - Ensure the web app is accessible and usable on various devices, including desktops, tablets, and smartphones.

4. **Database Integration:**
   - Utilize MySQL to store user account details and profile information securely.

## Tech Stack

1. **Frontend:**
   - **HTML:** Structure the web pages.
   - **CSS:** Style the user interface for an appealing look.
   - **JavaScript:** Enhance user interactivity and client-side validation.

2. **Backend:**
   - **Express.js:** Serve as the backend framework for handling HTTP requests and responses.
   - **Node.js:** Execute server-side logic.

3. **Database:**
   - **MySQL:** Store and retrieve user account and profile information.

4. **Authentication:**
   - **Passport.js:** Implement authentication strategies for user login.

5. **Communication:**
   - **HTTP/HTTPS protocols:** Facilitate communication between the frontend and backend.

## Architecture

The web app follows a simple three-tier architecture:

1. **Frontend (Client):**
   - HTML, CSS, and JavaScript files.
   - User interacts with the interface through a web browser.

2. **Backend (Server):**
   - Express.js handles routing and middleware.
   - Node.js executes server-side logic.
   - Passport.js manages user authentication.

3. **Database:**
   - MySQL stores user account and profile data.
   - Backend communicates with the database for CRUD operations.

## Database Schema

### Users Table:

| Column      | Type         | Constraints           |
|-------------|--------------|-----------------------|
| id          | INT          | PRIMARY KEY, AUTO_INC |
| username    | VARCHAR(50)  | UNIQUE                |
| password    | VARCHAR(255) |                       |
| email       | VARCHAR(100) | UNIQUE                |

### Profile Table:

| Column      | Type         | Constraints           |
|-------------|--------------|-----------------------|
| id          | INT          | PRIMARY KEY, AUTO_INC |
| user_id     | INT          | FOREIGN KEY (Users.id)|
| first_name  | VARCHAR(50)  |                       |
| last_name   | VARCHAR(50)  |                       |
| bio         | TEXT         |                       |

## Security Considerations

1. **Password Hashing:**
   - Hash and salt passwords before storing them in the database.

2. **Input Validation:**
   - Validate user input on both the client and server sides to prevent injection attacks.

3. **Session Management:**
   - Implement secure session management using secure cookies.

## Deployment

Deploy the web app on a secure server with HTTPS to ensure data integrity and confidentiality.
