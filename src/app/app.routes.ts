import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
