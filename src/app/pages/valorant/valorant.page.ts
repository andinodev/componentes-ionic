import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, LoadingController } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { ValorantApiService } from 'src/app/services/valorant-api.service';

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.page.html',
  styleUrls: ['./valorant.page.scss'],
})
export class ValorantPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  loading: HTMLIonLoadingElement;
  canReorder = false;
  valorant: any;
  characters: any[];
  maps: any[];
  constructor(private valorantAPI: ValorantApiService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.valorantAPI.getContent().subscribe(
      (e) => {
        this.characters = e['characters'];
        this.maps = e['maps'];
      }
    );
  }
  remove(character) {
    this.characters.splice(this.characters.findIndex(char => char.name === character.name), 1);
    this.ionList.closeSlidingItems();
  }

  add(character) {
    console.log(character);
    this.ionList.closeSlidingItems();
  }

  onReorder(e: any) {
    const desde = e.detail.from;
    const hasta = e.detail.to;
    const item = this.maps.splice(desde, 1)[0];
    this.maps.splice(hasta, 0, item);
    e.detail.complete();

    console.log(this.maps);

  }

  changeCanReorder() {
    this.canReorder = !this.canReorder;
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    await this.loading.present();
    let count = 0;
    const interval = setInterval(() => {
      console.log(count++)
      if (this.characters && this.maps) {
        this.loading.dismiss();
        clearInterval(interval);
      }
    }, 500);

  }




}
