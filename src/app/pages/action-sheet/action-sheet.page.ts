import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  componentes: Observable<MenuItem[]>;
  constructor(private dataServ: DataService) {
   }

  ngOnInit() {
    this.componentes = this.dataServ.getMenu();
  }

}
