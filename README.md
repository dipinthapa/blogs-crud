# Blog CRUD App (React + Tailwind)

A modern, feature-rich Blog CRUD application built with **React**, **Context API**, and **Tailwind CSS**. This project demonstrates clean architecture, reusable components, and scalable frontend practices.

---

##  Features

###  Core CRUD

* Create blog posts
* Read (list all blogs)
* Update existing blogs
* Delete blogs
* Data persisted using **localStorage**

###  Search, Filter & Sort

* Search blogs by title or content
* Filter by category (Tech, Life, etc.)
* Sort by:

  * Latest
  * Oldest
  * Title (A–Z)



##  Project Structure

```
src/
├── features/
│    └── blogs/
│         ├── components/
│         │     ├── BlogCard.jsx
│         │     ├── BlogList.jsx
│         │     ├── BlogControls.jsx
│         │     └── CreateBlog.jsx
│         │
│         ├── hooks/
│         │     ├── useBlogs.js
│         │     └── useFilteredBlogs.js
│         │
│         ├── services/
│         │     └── blogService.js
│         │
│         ├── context/
│         │     └── BlogContext.jsx
│         │
│         └── pages/
│               └── BlogPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Architecture

* **Context API** → Global state management
* **Custom Hooks** → Business logic separation
* **Service Layer** → Handles data persistence (localStorage)
* **Components** → Pure UI
* **Feature-based structure** → Scalable and maintainable

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd blog-crud-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## Usage

* Create a new blog using the form
* Assign a category
* Use search bar to find blogs
* Filter by category
* Sort blogs using dropdown
* Edit or delete existing blogs

---


## Tech Stack

* React (Functional Components + Hooks)
* Context API
* Tailwind CSS
* Vite

---

## Author

Dipin Thapa

---

