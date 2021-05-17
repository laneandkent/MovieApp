import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-movie-app';
  selectedMovie = Movie;
  loadedList = 'current';
  onNavigate(film: string){
    this.loadedList = film;
  }
  ngOnInit(): void {
  }

}
