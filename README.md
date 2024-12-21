# Neo Tasker

Neo Tasker is a modern web application designed as a personal to-do list to help manage tasks efficiently while showcasing advanced frontend and backend development skills. It features a sleek and responsive UI powered by modern web technologies and a robust backend with PostgreSQL for data persistence.

## Features

- **Modern UI/UX**: Built using **React**, **Vite**, **Tailwindcss**, and **DaisyUI** for an attractive and seamless user experience.
- **Task Management**: Add, update, and delete tasks effortlessly.
- **Responsive Design**: Optimized for use on desktops, tablets, and mobile devices.
- **Backend Integration**: Powered by **Express.js** and **Node.js** with a **PostgreSQL** database for managing task data.
- **Full-Stack Application**: Combines frontend and backend technologies to provide a complete web application experience.

## Tech Stack

### Frontend

- **React** (with Vite): Fast and modern frontend framework.
- **Tailwindcss**: A CSS framework for styling.
- **DaisyUI**: A Tailwind CSS-based UI library for additional design elements.

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Lightweight web framework for building APIs.
- **PostgreSQL**: Relational database for storing task data.

## Installation

### Prerequisites

- **Node.js** (v16 or later)
- **PostgreSQL** (v13 or later)
- A package manager like **npm** or **yarn**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/neo-tasker.git
   cd neo-tasker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:

   - Create a database named `neo_tasker`.
   - Run the provided SQL scripts (if any) to set up tables.

4. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/neo_tasker
     PORT=5000
     ```
     Replace `username` and `password` with your PostgreSQL credentials.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit the application in your browser:
   ```
   http://localhost:3000
   ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-ready application.
- `npm start`: Runs the production build.
- `npm run backend`: Starts the Express.js server.

## Demo

Include screenshots or a link to the live demo of your application here if available.

## Future Improvements

- User authentication for personalized task management.
- Additional task management features like deadlines and priority levels.
- Integration with calendar APIs for better scheduling.
- Dark mode support.

---

Feel free to reach out if you have any questions or suggestions for improving Neo Tasker!
