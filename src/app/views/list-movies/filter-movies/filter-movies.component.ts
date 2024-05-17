import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-movies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-movies.component.html',
  styleUrl: './filter-movies.component.css'
})
export class FilterMoviesComponent {
  title:string = '';
  release:string = '';
  
  @Output() filtersMovies = new EventEmitter<{title:string, release:string}>

  emitFilters() {
    this.filtersMovies.emit({title:this.title, release:this.release});
  }

}
