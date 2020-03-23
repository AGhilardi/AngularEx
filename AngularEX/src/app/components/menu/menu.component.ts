import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output()
    selectMenuItem:EventEmitter<number>=new EventEmitter();
  menuList:MenuItem[]=[
    { id:1, desc:"Home", select: true},
    { id:2, desc:"Lista giochi", select: false},
    { id:3, desc:"Modifica giochi", select: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  switchPage(id:number) {
    for(let menuItem of this.menuList){
      menuItem.select = id === menuItem.id;
    }    
       this.selectMenuItem.emit(id);
}
}