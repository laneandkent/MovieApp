import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [
    new Movie('Shrek', '2001', 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR88,0,630,1200_AL_.jpg', 'DVD', true, 5),
    new Movie('Moonstruck', '1987', 'https://m.media-amazon.com/images/M/MV5BMjIwMDY0NzYyMF5BMl5BanBnXkFtZTcwOTE5NDk0NA@@._V1_UY1200_CR85,0,630,1200_AL_.jpg', 'DVD', true, 5),
    new Movie('Superman', '1978', 'https://i.ebayimg.com/images/g/r9EAAOSwH2VaMdEF/s-l300.jpg', 'DVD', true, 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
