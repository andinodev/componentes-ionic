import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() type = false;
  menuItem: Observable<MenuItem[]>;
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.menuItem = this.dataServ.getMenu();
  }

}
