# pleurat-pllana-hospit-frontend-developer-task
A responsive user management application built with React and styled using Tailwind CSS. Allows users to create, update, and delete profiles with real-time validation and error handling. The task was to build a CRUD form for managing users using Next.js, interacting with an API to fetch, create, update, and delete users.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoint](#api-endpoint)
- [How It Works](#how-it-works)

## Hospit User Management Application

This is a responsive **User Management Application** built using **React** and styled with **Tailwind CSS**. The application allows users to create, update, and delete user profiles. It is fully compatible across all screen sizes, ensuring a seamless experience on mobile, tablet, and desktop devices. The design is clean, modern, and consistent with the **Hospit branding**.

The application also focuses on handling API requests to interact with user data, including fetching, creating, updating, and deleting users using the provided API endpoint. The task required simulating user management while ensuring proper state management and error handling on the frontend.

## Features

- **Add, Update, and Delete Users**: Users can fill out a form to create a new user, edit an existing user, or delete a user. All operations are simulated on the frontend and designed to interact with the API endpoint.
  
- **Responsive Design**: The application is fully responsive, providing an optimized experience for different screen sizes, from mobile devices to larger desktop screens.

- **Tailwind CSS for Styling**: The project uses **Tailwind CSS** for fast, efficient, and highly customizable styling. This ensures that the design is modern, clean, and aligned with the Hospit branding guidelines.

- **Error Handling and Validation**:
  - Each form field (name, email, phone) is validated to ensure required fields are filled out.
  - The email field is validated using a regex pattern to ensure correct formatting.
  - Invalid inputs are highlighted with red borders, and users receive immediate feedback when they begin typing again.

- **Success Feedback**: After successfully submitting the form (whether adding or updating a user), users receive a success message, indicating that their action was successful.

## Technologies Used

- **React**: The core framework for building the user interface and handling state management.
- **Tailwind CSS**: For styling the components and ensuring the design is clean, modern, and responsive.
- **React Icons**: For incorporating icons into the UI, such as the add and edit icons on the form buttons.
- **API Handling**: API interactions to fetch, create, update, and delete users using the provided API endpoint.

## API Endpoint

For this task, the following API endpoint was used to interact with mock user data:

- **API Base URL**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

This API provides mock data, allowing the application to focus on handling the frontend operations of fetching, creating, updating, and deleting users.

## How It Works

### Screenshots

- **User Form**:
  ![User Form](assets/screenshot1.png)

- **User List**:
  ![User List](assets/screenshot2.png)

- **Editing User**:
  ![Editing User](assets/screenshot3.png)

- **Delete Confirmation**:
  ![Delete Confirmation](assets/screenshot4.png)
