# Real Estate Management System

A simple web application to manage real estate apartments. This project includes a backend powered by **Node.js** and **PostgreSQL**, and a frontend built with **Next.js** and **Material-UI (MUI)**.

---

## Features

- **Frontend**: Create, view, and manage apartments through a user-friendly interface.
- **Backend**: API for managing apartments (CRUD operations).
- **Database**: PostgreSQL to store apartment details.
- **Styling**: Responsive UI using Material-UI with customized global styles.
- **Containerization**: Dockerized application for easy deployment.

---

## Project Structure

### Backend (Node.js)

- **Directory**: `/backend`
- **Key Features**:
  - RESTful APIs for apartment management.
  - Database integration with PostgreSQL.
  - TypeScript for type safety.

### Frontend (Next.js)

- **Directory**: `/frontend`
- **Key Features**:
  - Apartment list and creation form.
  - Material-UI for design and responsive layout.
  - Next.js for server-side rendering (SSR) and routing.

### Database

- **Technology**: PostgreSQL
- **Schema**:
  - **Table**: `apartments`
    - `id`: Integer (Primary Key)
    - `name`: String
    - `location`: String
    - `price`: Integer
    - `description`: Text

---

## Prerequisites

- **Node.js**: v18+ (for backend)
- **Docker**: v20+ (for containerization)
- **PostgreSQL**: v13+ (for database)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/LinaSamer/real-estate-management.git
cd real-estate-management
docker-compose up --build
Frontend: Open http://localhost:3000 in your browser.
Backend: API will be running at http://localhost:5000/api
