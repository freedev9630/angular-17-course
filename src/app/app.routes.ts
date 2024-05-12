import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        component: TodoComponent,
        path: 'todo'
    },
    {
        component: HomeComponent,
        path: ''
    }
];
