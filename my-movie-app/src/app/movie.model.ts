export class Movie {
  public title: string;
  public releaseDate: string;
  public imagePath: string;
  public format: string;
  public viewed: boolean;
  public rating: number;



  constructor(title: string, releaseDate: string, imagePath: string, format: string, viewed: boolean, rating: number){
    this.title = title;
    this.releaseDate = releaseDate;
    this.imagePath = imagePath;
    this.format = format;
    this.viewed = viewed;
    this.rating = rating;
  }
}
