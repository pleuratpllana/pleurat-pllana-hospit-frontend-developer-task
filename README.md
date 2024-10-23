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

## Technologies Used

- **Tailwind CSS**: For styling the components and ensuring the design is clean, modern, and responsive.
- **React**: The core framework for building the user interface and handling state management.
- **React Icons**: For incorporating icons into the UI, such as the add and edit icons on the form buttons.
- **API Handling**: API interactions to fetch, create, update, and delete users using the provided API endpoint.

## API Endpoint

For this task, the following API endpoint was used to interact with mock user data:

- **API Base URL**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

This API provides mock data, allowing the application to focus on handling the frontend operations of fetching, creating, updating, and deleting users.

## How It Works

1. **Adding a User**:
   - Navigate to the form and fill in the required fields: Name, Email, and Phone.
   - Click "Add User" to submit the form.
   - The new user will be added to the list of users.

2. **Editing a User**:
   - Click the "Edit" button next to a user in the list.
   - Modify the user's details and click "Update User" to save changes.
   
3. **Deleting a User**:
   - Click the "Delete" button next to a user in the list.
   - Confirm the deletion in the modal that appears.

4. **Validation**:
   - Each form field is validated, and error messages will appear if required fields are missing or improperly formatted (e.g., invalid email address).

### Screenshots

<img src="assets/screenshot1.png" alt="Screenshot 1" width="700"/>
<img src="assets/screenshot2.png" alt="Screenshot 2" width="700"/>
<img src="assets/screenshot3.png" alt="Screenshot 3" width="700"/>
<img src="assets/screenshot4.png" alt="Screenshot 4" width="700"/>
