# User Management App

A responsive, pixel-perfect web application for managing user data, developed as part of the Frontend Engineer Assessment. The project adheres to the Figma design specification and implements best practices in code structure, responsiveness, and design fidelity.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Folder Structure](#folder-structure)
6. [Development Process](#development-process)
7. [Demo](#demo)
8. [Contributions](#contributions)
9. [Contact](#contact)

## Overview

This application is a user management system designed to:

- Fetch and display user data in a clean, responsive layout.
- Allow users to view detailed information about specific users.
- Maintain a responsive sidebar navigation, with mobile-friendly hamburger functionality.
- Save and retrieve user data from local storage, adhering to modern frontend practices.

## Features

### Core Features

#### Authentication

- A responsive login page that validates user credentials before granting access.

#### Dashboard

- Displays a list of users fetched from a mocked API.
- Includes search and filter functionality for improved user management.

#### User Details Page

- Showcases detailed user information grouped into logical sections.
- Maintains a clean, structured layout with clear typography.

#### Responsive Design

- Fully responsive interface across desktop, tablet, and mobile devices.

#### Sidebar Navigation

- Dynamic navigation system with a toggleable hamburger menu for smaller screens.

## Technologies Used

- React - For building reusable UI components.
- TypeScript - For type safety and improved code readability.
- SCSS - For modular and maintainable styling.
  - Mixins for Media Queries: Ensures streamlined responsive design.
- React Router - For client-side routing between pages.
- Local Storage - For persisting user details.

## Setup and Installation

Follow the steps below to set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/joesef127/lendsqr-fe-test.git
   ```
2. Navigate into the project directory:
   cd lendsqr-user-management
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
   The application will be available at http://localhost:3000/.

## Folder Structure

src/

├── assets/ # Icons, images, and static files

├── components/ # Reusable components (e.g., Sidebar, ProfileItem)

├── pages/ # Page-level components (e.g., Login, Dashboard, UserDetails)

├── styles/ # SCSS files with global styling

├── utils/ # Helper functions (e.g., API call methods)

├── App.tsx # Main application file

└── index.tsx # Entry point of the React app

## Development Process

This project was developed in the following stages:

- Login Page: Designed and styled a pixel-perfect login page with SCSS and responsive media queries.
- Dashboard: Implemented user list fetching and rendering with dynamic search and filters.
- User Details Page: Rendered user information dynamically with reusable components (ProfileItem and ProfileBox).
- Responsive Design: Ensured design fidelity across various screen sizes using mixins for media queries.

## Demo

A live demo of the application can be accessed here: https://adedayo-adegbola-lendsqr-fe-test.vercel.app

## Contributions

Contributions are welcome! Follow the steps below to contribute:

### Fork the repository.

Create a new branch:
git checkout -b feature/your-feature-name

### Make your changes and commit:

git commit -m "Add your commit message"

### Push to your branch:

git push origin feature/your-feature-name

### Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to me at Adegboladayor@gmail.com.com.
