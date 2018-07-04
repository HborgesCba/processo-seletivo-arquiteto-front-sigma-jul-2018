import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopularMoviesPrv } from '../../mocks/providers/popularMoviesPrv';
import { MovieDetail } from './models/movieDetail';
import { PosterSize } from '../../models/posterSize';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  item: any;
  movieDetail: any;
  apiImgRoot: string = 'https://image.tmdb.org/t/p/'
  posterSize: PosterSize;


  constructor(public popularMoviesProv: PopularMoviesPrv,public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('item');
    this.movieDetail = {};
    this.popularMoviesProv.getMoviedetail(this.item)
    .subscribe( res => {
      this.movieDetail = <MovieDetail>res;
      console.log(res);
      });
  }

  getImgMovieImg(posterSize: PosterSize = this.posterSize['w92'] , posterImgName: string) : string {
    return `${this.apiImgRoot}${posterSize}/${posterImgName}`;
  }

}
