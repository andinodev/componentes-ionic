import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  bornDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  changeDate(e){
    console.log(e);
    console.log(new Date(e.detail.value));
  }
}
