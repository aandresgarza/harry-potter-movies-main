import { Component } from '@angular/core';
import { ListMoviesService } from '../../shared/services/list-movies.service';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { Movie } from '../../shared/models/list-movies.model';
import { CommonModule } from '@angular/common';
import { DurationFormatPipe } from '../../shared/pipes/duration-format.pipe';


@Component({
  selector: 'app-detail-movies',
  standalone: true,
  imports: [RouterModule, CommonModule, DurationFormatPipe],
  templateUrl: './detail-movies.component.html',
  styleUrl: './detail-movies.component.css'
})
export class DetailMoviesComponent {
  movieSelected: Movie | undefined;
  constructor(private listMoviesService: ListMoviesService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.listMoviesService.getDetailMovie(this.activatedRoute.snapshot.paramMap.get('movieId')).subscribe((movie: Movie) => {
      if (movie) {
        this.movieSelected = movie;
      }
    });
  }
}

