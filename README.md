# EmployWise - Frontend Assignment

## Overview
EmployWise is a React-based user management system that allows users to authenticate, view a paginated list of users, edit user details, and log out. It integrates with `reqres.in` API for authentication and user data management.

## Features
- User Authentication (Login via `reqres.in` API)
- Fetch and Display User List with Pagination
- Edit User Details
- Logout Functionality
- Responsive UI with Bootstrap

## Usage
### Login Credentials (For Testing)
Use the following credentials to log in:
```
Email: eve.holt@reqres.in
Password: cityslicka
```

### User Management
- After login, the **Users List** is displayed.
- Users can **edit** details by clicking the "Edit" button.
- Users can **navigate** through paginated results.
- Users can **logout** by clicking the "Logout" button.



## API Endpoints Used
- **Login:** `POST https://reqres.in/api/login`
- **Get Users:** `GET https://reqres.in/api/users?page={page}`
- **Get User Details:** `GET https://reqres.in/api/users/{id}`
- **Update User:** `PUT https://reqres.in/api/users/{id}`

