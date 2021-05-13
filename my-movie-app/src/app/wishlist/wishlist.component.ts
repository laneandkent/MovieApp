import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  movies: Movie [] = [
    new Movie('Won\'t You Be My Neighbor', '2018', 'https://m.media-amazon.com/images/M/MV5BMjM1NDg1MjUzNF5BMl5BanBnXkFtZTgwNTAxNjIzNTM@._V1_.jpg', 'any', true, 5, 'https://www.imdb.com/title/tt7681902/?ref_=fn_al_tt_4'),
    new Movie('Street Gang', '2021', 'https://resizing.flixster.com/ZLXCKKYRYht0Fgc4eZCx1E5Hqho=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzEwNDhkZjNiLTg3N2ItNDg4Ny04MGY2LTg0ZGJlMDAyM2MwOC5qcGc=', 'any', false, 0, 'https://www.imdb.com/title/tt5618690/?ref_=fn_al_tt_1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
