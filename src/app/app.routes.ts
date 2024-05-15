import { Routes } from '@angular/router';
import { ListMoviesComponent } from './views/list-movies/list-movies.component';
import { DetailMoviesComponent } from './views/detail-movies/detail-movies.component';

export const routes: Routes = [
    {path: '', component: ListMoviesComponent},
    {path:'movies/:movieId', component: DetailMoviesComponent}
];
