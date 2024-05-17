import { Routes } from '@angular/router';
import { DetailMoviesComponent } from './views/detail-movies/detail-movies.component';
import { ListMoviesComponent } from './views/list-movies/list-movies.component';

export const routes: Routes = [
    {path: 'movies', component: ListMoviesComponent},
    {path:'movies/:movieId', component: DetailMoviesComponent},
    {path:'', redirectTo:'movies',  pathMatch: 'full'},
    {path:'**', redirectTo:'movies'}
];
