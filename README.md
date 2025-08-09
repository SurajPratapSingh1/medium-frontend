# Medium Clone Frontend

A simple Medium-like blogging platform frontend built with React, TypeScript, and Vite. Users can browse blogs, read full posts, sign up, sign in, and publish new blogs.

## Features

- User authentication (Sign up & Sign in)
- Browse all blogs
- Read full blog posts
- Publish new blogs
- Responsive and modern UI with Tailwind CSS

## Project Structure

```
frontend/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── App.tsx
  │   └── main.tsx
  ├── index.html
  ├── package.json
  ├── tsconfig.json
  └── vite.config.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/medium-frontend.git
   cd medium-frontend/frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Folder Overview

- `src/components/` — Reusable UI components (Appbar, BlogCard, Spinner, etc.)
- `src/pages/` — Page components (Blogs, Blog, Publish, Signin, Signup)
- `src/App.tsx` — Main app routing

## License

This project is licensed under the
