import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);


  constructor() { }

  ngOnInit() {
  }

  loadData(){
    this.data.push(...Array(5));

    setTimeout(()=>{
      if(this.data.length > 50){
        this.infiniteScroll.disabled = true;
      }
      this.infiniteScroll.complete();

     // e.target.complete();
    },1500);

  }

}
