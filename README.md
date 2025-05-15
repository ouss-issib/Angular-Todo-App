# Angular Todo App

A modern task management application built with Angular 17 and Bootstrap 5. This application helps teams track and manage their development tasks efficiently.

## Features

- Task management with priority levels (High, Medium, Low)
- Category-based task organization
- Task completion tracking
- Due date management
- Responsive design using Bootstrap
- Real-time task status updates
- Category filtering for better organization

## Tech Stack

- Angular 17 (Standalone Components)
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- Angular Router

## Project Structure

```
TodoApp/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   └── about/
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

The application provides an intuitive interface for:
- Viewing all tasks in a sortable table
- Adding new tasks with priorities and categories
- Marking tasks as complete/incomplete
- Deleting tasks
- Filtering tasks by category and status

## Development

This project follows Angular best practices and uses standalone components for better modularity.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
