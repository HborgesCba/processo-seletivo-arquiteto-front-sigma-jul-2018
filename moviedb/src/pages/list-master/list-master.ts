import { MovieDetail } from './../item-detail/models/movieDetail';
import { Languages } from './../../models/languages';
import { ResultMovies } from './../../models/resultMovies';
import { PopularMoviesPrv } from './../../mocks/providers/popularMoviesPrv';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { PosterSize } from '../../models/posterSize';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  resultMovies: ResultMovies = {};

  languages: Languages = {};
  apiImgRoot: string = 'https://image.tmdb.org/t/p/'
  posterSize: PosterSize;

  constructor(public navCtrl: NavController, public popularMoviesProv: PopularMoviesPrv, public modalCtrl: ModalController) {
    this.popularMoviesProv.getLanguages().subscribe( res => this.languages = <Languages>res);
    this.popularMoviesProv.getPopularMovies(1).subscribe( res => this.resultMovies = <ResultMovies>res);
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  getImgMovieImg(posterSize: PosterSize = this.posterSize['w92'] , posterImgName: string) : string {
    return `${this.apiImgRoot}${posterSize}/${posterImgName}`;
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        //this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    //this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(movieId: any) {
      this.navCtrl.push('ItemDetailPage', {
        item: movieId
      });
  }
}
