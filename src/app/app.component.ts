import { Component, } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuItem: Observable<MenuItem[]>;
  constructor(private dataServ: DataService) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.menuItem = this.dataServ.getMenu();
  }
}
