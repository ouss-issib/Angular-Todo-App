export interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: Date;
  category: string;
}
