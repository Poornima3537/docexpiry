# DocExpiry

**Project Title : Document Expiry Tracker**

It is a web application built to help users manage and track important documents along with their expiry dates.

In real life, we often forget expiry dates of documents like licenses, certificates, IDs, etc. This application solves that problem by allowing users to store, organize, and monitor their documents in one place.

**Problem Statement**

Managing document expiry manually is difficult and error-prone. Missing an expiry date can lead to serious consequences.

This project aims to:

Store document related info digitally
Track expiry dates
Provide clear visibility of document status

**Tech Stack**
Backend:

Java, 
Spring Boot, 
Spring Data JPA, 
MySQL, 
Hibernate Validator, 
Swagger (OpenAPI)

Frontend:

React, 
TypeScript, 
Vite, 
Bootstrap, 
Axios


Spring Data JPA :

Simplifies database operations using repositories instead of writing complex SQL queries.

MySQL :

Reliable relational database used to store structured data like users, documents, and categories.

React + TypeScript :

Provides a component-based UI and type safety, making the frontend scalable and maintainable.

Bootstrap :

Used for rapid UI development with prebuilt responsive components, helping complete the project faster.

Axios :

Handles API communication between frontend and backend in a clean and structured way.


**Architecture**

This project follows a Layered Architecture (Separation of Concerns) to keep the code clean, maintainable, and scalable.

 Backend Architecture (Spring Boot) - 

The backend is divided into multiple layers:

Controller Layer :
Handles incoming HTTP requests and sends responses to the client.
Service Layer :
Contains the business logic of the application (e.g., calculating expiry status, handling operations).
Repository Layer :
Interacts with the database using Spring Data JPA.
Entity Layer :
Represents database tables (User, Document, Category).
DTO Layer :
Used to transfer data between client and server without exposing internal entities.
Mapper Layer :
Converts between Entity and DTO to keep the code clean and secure.
Exception Layer : 
Handles errors globally and returns meaningful responses.

Flow:
Controller → Service → Repository → Database


Frontend Architecture - 

The frontend is also structured in a modular way:

Pages - Represents full screens (Login, Dashboard, Add Document)
Components - Reusable UI elements (Navbar)
API Layer - Handles all backend API calls using Axios
Types - Defines TypeScript interfaces for type safety
Routes - Manages navigation between pages

 Flow:

UI (Pages/Components) → API Calls → Backend


**Database Design -**

Tables:
users
categories
documents
Relationships:
One user → Many documents
One category → Many documents

How to Run the Project : 
Backend - 
cd backend
mvn spring-boot:run

Frontend - 
cd frontend
npm install
npm install axios
npm install bootstrap
npm run dev


**API Documentation -**

Swagger UI is available at:

http://localhost:8080/swagger-ui.html


**Features**

User Authentication :
Users can register and log in. Each user has a separate account, ensuring privacy of their documents.
Category Management :
Users can create custom categories to organize documents (e.g., Personal, Work, Education).
Document Management :
Add documents with name, category, and expiry date. Each document is linked to a user and a category.
Dashboard View :
Displays all documents with details like name, category, expiry date, and status.
Expiry Status Tracking :
Automatically shows:
Expired, 
Expiring Soon, 
Safe

<img width="800" height="793" alt="image" src="https://github.com/user-attachments/assets/5d261743-bcb6-49a6-a6af-100affbf8649" />


<img width="800" height="785" alt="image" src="https://github.com/user-attachments/assets/ea2520a5-9bc8-41a4-b14d-2cfcfacd874e" />


<img width="800" height="725" alt="image" src="https://github.com/user-attachments/assets/8d6f00ac-e6d0-4ba7-b992-d01da173ed6f" />







