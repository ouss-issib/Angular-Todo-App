import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  public tasks: Task[] = [];
  ngOnInit(): void {
    // Initialization logic can go here
  this.tasks= [
    {
      id: 1,
      name: 'Complete Project Proposal',
      description: 'Draft and submit Q2 project proposal',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-20'),
      category: 'Work'
    },
    {
      id: 2,
      name: 'Weekly Team Meeting',
      description: 'Sprint planning and review',
      completed: true,
      priority: 'Medium',
      dueDate: new Date('2025-05-16'),
      category: 'Meetings'
    },
    {
      id: 3,
      name: 'Fix Navigation Bug',
      description: 'Debug routing issues in production',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-15'),
      category: 'Development'
    },
    {
      id: 4,
      name: 'Update Documentation',
      description: 'Review and update API docs',
      completed: true,
      priority: 'Low',
      dueDate: new Date('2025-05-25'),
      category: 'Documentation'
    },
    {
      id: 5,
      name: 'Security Audit',
      description: 'Perform monthly security review',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-30'),
      category: 'Security'
    },
    {
      id: 6,
      name: 'Client Demo',
      description: 'Present new features to client',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-22'),
      category: 'Meetings'
    },
    {
      id: 7,
      name: 'Database Backup',
      description: 'Weekly backup routine',
      completed: true,
      priority: 'Medium',
      dueDate: new Date('2025-05-18'),
      category: 'DevOps'
    },
    {
      id: 8,
      name: 'Code Review',
      description: 'Review pending PRs',
      completed: false,
      priority: 'Medium',
      dueDate: new Date('2025-05-17'),
      category: 'Development'
    },
    {
      id: 9,
      name: 'Update Dependencies',
      description: 'Upgrade npm packages',
      completed: false,
      priority: 'Low',
      dueDate: new Date('2025-05-28'),
      category: 'Maintenance'
    },
    {
      id: 10,
      name: 'User Testing',
      description: 'Conduct UAT session',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-24'),
      category: 'QA'
    },
    {
      id: 11,
      name: 'Performance Testing',
      description: 'Run load tests on API',
      completed: false,
      priority: 'Medium',
      dueDate: new Date('2025-05-26'),
      category: 'QA'
    },
    {
      id: 12,
      name: 'CI/CD Pipeline',
      description: 'Update deployment workflow',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-21'),
      category: 'DevOps'
    },
    {
      id: 13,
      name: 'UI Design Review',
      description: 'Review new component designs',
      completed: true,
      priority: 'Low',
      dueDate: new Date('2025-05-19'),
      category: 'Design'
    },
    {
      id: 14,
      name: 'Data Migration',
      description: 'Migrate legacy database',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-29'),
      category: 'Database'
    },
    {
      id: 15,
      name: 'Unit Tests',
      description: 'Write tests for new features',
      completed: true,
      priority: 'Medium',
      dueDate: new Date('2025-05-23'),
      category: 'Development'
    },
    {
      id: 16,
      name: 'Budget Review',
      description: 'Q2 budget planning',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-27'),
      category: 'Finance'
    },
    {
      id: 17,
      name: 'API Documentation',
      description: 'Update Swagger docs',
      completed: true,
      priority: 'Low',
      dueDate: new Date('2025-05-31'),
      category: 'Documentation'
    },
    {
      id: 18,
      name: 'Email Service',
      description: 'Implement notification system',
      completed: false,
      priority: 'Medium',
      dueDate: new Date('2025-06-01'),
      category: 'Development'
    },
    {
      id: 19,
      name: 'Accessibility Audit',
      description: 'WCAG compliance check',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-05-25'),
      category: 'QA'
    },
    {
      id: 20,
      name: 'Release Planning',
      description: 'Plan next version release',
      completed: false,
      priority: 'High',
      dueDate: new Date('2025-06-02'),
      category: 'Planning'
    }
  ];
  }

   deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
   toggleTaskCompletion(taskId: number): void {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
