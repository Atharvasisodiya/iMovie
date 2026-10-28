# iMovie — Movie Ticket Booking Platform

iMovie is a full-stack movie ticket booking web application built as a college project. Users can explore movies, select a show, choose seats, enter customer details, and confirm their bookings.

## Features

- Browse the movie catalogue and view movie details.
- Select a show date and showtime.
- Choose seats for a selected show.
- Enter customer details during checkout.
- View booking confirmation.
- Store bookings in MongoDB Atlas.
- Prevent duplicate seat bookings for the same movie, date, and showtime.
- Responsive user interface.

## Technology Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- Mongoose
- REST API

**Database**
- MongoDB Atlas

## Project Structure

```text
CineBook/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── data/
│   └── pages/
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
├── index.html
├── package.json
└── README.md
```

## Prerequisites

- Node.js and npm
- A MongoDB Atlas account
- Internet connection for the database and movie artwork

## Setup Instructions

### 1. Clone or open the project

Open a terminal in the project directory.

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure the backend environment

Create a `server/.env` file with your own MongoDB Atlas connection details:

```dotenv
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace the placeholder with your actual connection string. Never commit database credentials to a public repository.

### 5. Configure the frontend

Create a `.env` file in the project root:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

### 6. Start the backend

In one terminal:

```bash
cd server
npm run dev
```

The backend runs on `http://localhost:5000`.

### 7. Start the frontend

In a separate terminal, from the project root:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check API status |
| GET | `/api/movies` | Retrieve movies |
| GET | `/api/movies/:id` | Retrieve a movie |
| GET | `/api/bookings` | Retrieve bookings |
| GET | `/api/bookings/:id` | Retrieve a booking |
| POST | `/api/bookings` | Create a booking |

## Production Build

From the project root:

```bash
npm run build
```

# iMovie — Movie Ticket Booking Platform

iMovie is a full-stack movie ticket booking web application built as a college project. Users can explore movies, select a show, choose seats, enter customer details, and confirm their bookings.

## Features

- Browse the movie catalogue and view movie details.
- Select a show date and showtime.
- Choose seats for a selected show.
- Enter customer details during checkout.
- View booking confirmation.
- Store bookings in MongoDB Atlas.
- Prevent duplicate seat bookings for the same movie, date, and showtime.
- Responsive user interface.

## Technology Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- Mongoose
- REST API

**Database**
- MongoDB Atlas

## Project Structure

```text
CineBook/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── data/
│   └── pages/
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
├── index.html
├── package.json
└── README.md
```

## Prerequisites

- Node.js and npm
- A MongoDB Atlas account
- Internet connection for the database and movie artwork

## Setup Instructions

### 1. Clone or open the project

Open a terminal in the project directory.

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure the backend environment

Create a `server/.env` file with your own MongoDB Atlas connection details:

```dotenv
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace the placeholder with your actual connection string. Never commit database credentials to a public repository.

### 5. Configure the frontend

Create a `.env` file in the project root:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

### 6. Start the backend

In one terminal:

```bash
cd server
npm run dev
```

The backend runs on `http://localhost:5000`.

### 7. Start the frontend

In a separate terminal, from the project root:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check API status |
| GET | `/api/movies` | Retrieve movies |
| GET | `/api/movies/:id` | Retrieve a movie |
| GET | `/api/bookings` | Retrieve bookings |
| GET | `/api/bookings/:id` | Retrieve a booking |
| POST | `/api/bookings` | Create a booking |

## Production Build

From the project root:

```bash
npm run build
```
# iMovie — Movie Ticket Booking Platform

iMovie is a full-stack movie ticket booking web application built as a college project. Users can explore movies, select a show, choose seats, enter customer details, and confirm their bookings.

## Features

- Browse the movie catalogue and view movie details.
- Select a show date and showtime.
- Choose seats for a selected show.
- Enter customer details during checkout.
- View booking confirmation.
- Store bookings in MongoDB Atlas.
- Prevent duplicate seat bookings for the same movie, date, and showtime.
- Responsive user interface.

## Technology Stack

**Frontend**
- React
- Vite
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- Mongoose
- REST API

**Database**
- MongoDB Atlas

## Project Structure

```text
CineBook/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── data/
│   └── pages/
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
├── index.html
├── package.json
└── README.md
```

## Prerequisites

- Node.js and npm
- A MongoDB Atlas account
- Internet connection for the database and movie artwork

## Setup Instructions

### 1. Clone or open the project

Open a terminal in the project directory.

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure the backend environment

Create a `server/.env` file with your own MongoDB Atlas connection details:

```dotenv
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace the placeholder with your actual connection string. Never commit database credentials to a public repository.

### 5. Configure the frontend

Create a `.env` file in the project root:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

### 6. Start the backend

In one terminal:

```bash
cd server
npm run dev
```

The backend runs on `http://localhost:5000`.

### 7. Start the frontend

In a separate terminal, from the project root:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check API status |
| GET | `/api/movies` | Retrieve movies |
| GET | `/api/movies/:id` | Retrieve a movie |
| GET | `/api/bookings` | Retrieve bookings |
| GET | `/api/bookings/:id` | Retrieve a booking |
| POST | `/api/bookings` | Create a booking |

## Production Build

From the project root:

```bash
npm run build
```

iMovie — Movie Ticket Booking Platform

iMovie is a full-stack movie ticket booking web application built as a college project. Users can explore movies, select a show, choose seats, enter customer details, and confirm their bookings.

Features

Browse the movie catalogue and view movie details.

Select a show date and showtime.

Choose seats for a selected show.

Enter customer details during checkout.

View booking confirmation.

Store bookings in MongoDB Atlas.

Prevent duplicate seat bookings for the same movie, date, and showtime.

Responsive user interface.

Technology Stack

Frontend

React

Vite

JavaScript

CSS

Backend

Node.js

Express.js

Mongoose

REST API

Database

MongoDB Atlas

Project Structure

CineBook/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── data/
│   └── pages/
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
├── index.html
├── package.json
└── README.md

Prerequisites

Node.js and npm

A MongoDB Atlas account

Internet connection for the database and movie artwork

Setup Instructions

1. Clone or open the project

Open a terminal in the project directory.

2. Install frontend dependencies

npm install

3. Install backend dependencies

cd server
npm install

4. Configure the backend environment

Create a server/.env file with your own MongoDB Atlas connection details:

MONGODB_URI=your_mongodb_connection_string
PORT=5000

Replace the placeholder with your actual connection string. Never commit database credentials to a public repository.

5. Configure the frontend

Create a .env file in the project root:

VITE_API_URL=http://localhost:5000/api

6. Start the backend

In one terminal:

cd server
npm run dev

The backend runs on http://localhost:5000.

7. Start the frontend

In a separate terminal, from the project root:

npm run dev

Open the local URL printed by Vite in your browser.

API Endpoints

Method

Endpoint

Purpose

GET

/api/health

Check API status

GET

/api/movies

Retrieve movies

GET

/api/movies/:id

Retrieve a movie

GET

/api/bookings

Retrieve bookings

GET

/api/bookings/:id

Retrieve a booking

POST

/api/bookings

Create a booking

Production Build

From the project root:

npm run build

Notes

The movie catalogue is currently served from the project's local sample data.

Booking records are stored in MongoDB Atlas.

Configure environment variables locally before running the application.

This project is intended for educational and demonstration purposes.

Author

Developed as a college project for demonstrating full-stack web development with React, Node.js, Express, and MongoDB.
