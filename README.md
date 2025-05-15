# Angular Todo & Products App

A modern task and product management application built with Angular 17 and Bootstrap 5. This application helps teams track and manage their development tasks efficiently, and also browse a list of products fetched from [dummyjson.com](https://dummyjson.com/products).

## Features

### Task Management
- Task management with priority levels (High, Medium, Low)
- Category-based task organization
- Task completion tracking
- Due date management
- Real-time task status updates
- Category filtering for better organization

### Product Browsing
- Fetches products from [dummyjson.com](https://dummyjson.com/products) using Angular HttpClient
- Responsive product card grid with Bootstrap 5
- Product details: image, name, description, and price
- Graceful handling of empty product lists

### General
- Responsive design using Bootstrap 5
- Bootstrap Icons integration
- Angular Router for navigation
- Standalone Angular 17 components

## Tech Stack

- Angular 17 (Standalone Components)
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- Angular Router

## Project Structure

```
Angular-Todo-App/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   └── about/
│   │   ├── products/
│   │   │   ├── products.component.ts
│   │   │   ├── products.component.html
│   │   │   └── services/
│   │   │       └── product.service.ts
│   │   ├── interfaces/
│   │   │   └── task.interface.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   └── styles.css
├── package.json
└── angular.json
```

## Setup

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
ng serve
```

## Usage

- **Tasks:**  
  - View all tasks in a sortable table
  - Add new tasks with priorities and categories
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Filter tasks by category and status

- **Products:**  
  - Browse products in a responsive card grid
  - View product image, name, description, and price

## Development

This project follows Angular best practices and uses standalone components for better modularity.  
Product data is fetched live from [dummyjson.com](https://dummyjson.com/products) using Angular's `HttpClient`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
