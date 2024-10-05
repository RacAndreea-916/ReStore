# E-Commerce Store - .NET 8, React 18, Redux & Material UI

This repository contains a complete, full-stack E-Commerce web application built with .NET 7 for the backend and React 18 for the frontend. The project also integrates Redux for state management, Material UI for styling, and ASP.NET Identity for authentication. This application serves as a proof of concept for building real-world applications using modern technologies.

## Features

- **.NET 8 Web API**: Backend RESTful API built using .NET 7 and Entity Framework for database operations.
- **React 18**: Frontend single-page application (SPA) created using React with React Router 6 for navigation.
- **Redux**: Client-side state management using Redux for predictable state updates.
- **Material UI**: Clean and responsive UI built with Material Design principles.
- **Entity Framework Core**: Object-relational mapping (ORM) to interact with the database.
- **ASP.NET Identity**: User authentication and authorization features such as registration, login, and secure access.
- **React Hook Form**: Reusable form components for managing form state and validation.
- **Stripe Integration**: Secure online payments with Stripe and support for 3D secure transactions.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality.
- **Product Filtering**: Paging, sorting, and filtering of products based on user inputs.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **Order Management**: Users can place orders and view their order history.

## Tech Stack

### Backend
- **.NET 7**: Web API framework used to build scalable and high-performance APIs.
- **Entity Framework Core**: ORM for database interaction.
- **ASP.NET Core Identity**: Handles user authentication and role-based authorization.
- **Automapper**: Object mapping between models and DTOs.

### Frontend
- **React 18**: JavaScript library for building user interfaces.
- **Redux**: State management for React applications.
- **React Router 6**: Declarative routing for React applications.
- **Material UI**: UI components for building beautiful, modern interfaces.
- **React Hook Form**: Manages form state efficiently in React.
- **TypeScript**: Typed JavaScript for enhanced development experience and error catching.

### Database
- **PostgreSQL**: Relational database management system used for storing application data.
- **Entity Framework Core**: Used to handle database migrations, CRUD operations, and relationships.

### Tools
- **Visual Studio Code**: Cross-platform code editor for development.
- **DotNet CLI**: Command-line interface for creating and managing .NET applications.
- **Create React App**: CLI tool for setting up the React application with default configurations.
- **Stripe**: Payment gateway integration.

## Application Structure

- `API/`: Contains the backend code for the .NET Web API.
- `client/`: Contains the frontend code for the React application.

## Known Issues & Roadmap

- The app currently supports local development only. Deployment instructions will be added later.
- In future updates, we may add support for Docker, CI/CD pipelines, and cloud-based deployment.
