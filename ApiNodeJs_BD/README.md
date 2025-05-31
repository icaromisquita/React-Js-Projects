# Backend API - ApiNodeJs_BD

This project is a RESTful backend API developed with **Node.js**, using **Express** for the API framework, **Prisma** as an ORM for database interaction, and **MongoDB** for data storage. Authentication and authorization are managed by **JSON Web Tokens (JWT)**.

## 🚀 Technologies Used

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for Node.js, used to build the API.
* **Prisma**: Next-generation ORM, facilitating interaction with MongoDB and defining the database schema securely and with type-safety.
* **MongoDB**: NoSQL database, flexible and scalable, used to store API data.
* **JSON Web Tokens (JWT)**: Standard for creating access tokens that ensure API route security.
* **Bcrypt.js**: Library for hashing passwords, ensuring user credentials are stored securely.
* **Dotenv**: For securely managing environment variables.


## ✨ Key Features

* **User Authentication**: Registration, Login, and JWT generation for secure access.
* **JWT-Based Authorization**: Protection of sensitive routes, allowing access only to authenticated and authorized users.
* **Authentication Middleware**: Implemented a middleware to verify JWTs, ensuring that only logged-in users can access protected routes and perform actions. This enhances secure navigation and data access.
* **[Main Entity Name, e.g., Products, Users, Tasks] Management**:
    * Creation of new [Entity].
    * Reading/Listing of [Entity] (with filtering/pagination options, if any).
    * Updating existing [Entity].
    * Deletion of [Entity].
* **MongoDB Interaction via Prisma**: Defining data models and executing CRUD operations efficiently.

## ⚙️ How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

* Node.js (version 18 or higher recommended)
* npm (Node.js package manager) or Yarn
* MongoDB (local instance or access to a cloud service like MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone [https://github.com/icaromisquita/React-Js-Projects.git](https://github.com/icaromisquita/React-Js-Projects.git)
cd React-Js-Projects/ApiNodeJs_BD
