import { Component } from '@angular/core';
import { ListMoviesService } from '../../shared/services/list-movies.service';
import { Movie } from '../../shared/models/list-movies.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterMoviesComponent } from './filter-movies/filter-movies.component';
import { DurationFormatPipe } from '../../shared/pipes/duration-format.pipe';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, FilterMoviesComponent, DurationFormatPipe],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  movies: Movie[] = [];
  showMovies: Movie[] = [];
  constructor(private listMoviesService: ListMoviesService) { }

  ngOnInit() {
    this.listMoviesService.getListMovies().subscribe((res: Movie[]) => {
      this.movies = res;
      this.showMovies = [...this.movies]
    })
  }
  applyFilters(filters: { title: string, release: string }) {
    this.showMovies = this.movies.filter(item => {
      const release_year = item.release_date.split('-')[0];
      return (item.title.toLowerCase().includes(filters.title.toLowerCase()) && release_year.includes(filters.release ?? 0));
    })
  }

}
