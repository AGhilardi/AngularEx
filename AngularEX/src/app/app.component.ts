import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentToShow:number = 1;
  gamedetailid:number;
  showDetail(id:number){
    this.gamedetailid=id;
    this.componentToShow=4;
    
}
}
