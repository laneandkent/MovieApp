import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailComponent,
    HeaderComponent,
    WishlistComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WishlistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
