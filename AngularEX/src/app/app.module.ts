import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    MenuComponent,
    HomeComponent,
    GamesListComponent,
    GameDetailComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
