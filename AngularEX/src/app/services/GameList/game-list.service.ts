import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/model/game-item';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private gameListStored:GameItem[] =[
    { id:1, nome:"Doom",desc:"Image result for doom eternal summary The Doom Slayer spends his time in hell surviving and murdering legions of demons which earns him the title of Doom Slayer. He killed so many demons that he's now revered as some sort of devil himself in their world, which leads to the demons imprisoning him in a tomb so that he cant wreak havoc anymore.", gen:"FPS",rate:4.5,price:666,year:2020},
    { id:2, nome:"Le magiche avventure di federico e l'LSD",desc:"farò il mio assetto corsa, con black jack e squillo di lusso!", gen:"mylittlepony simulator",rate:2,price:420,year:1337},
    { id:3, nome:"Spyro 2",desc:"he protagonist of the series, Spyro the Dragon, decides to take a vacation to Dragon Shores with his friend Sparx a few years after defeating Gnasty Gnorc. ... Spyro must travel through the land of Avalar, undoing the damage done by Ripto and ultimately defeating him.", gen:"platformer/action",rate:5,price:20,year:1999},
  ]


  constructor() { }
  getGameList(): GameItem[] {
    return this.gameListStored;
  }

  getGameItem(id: number): GameItem {
    return this.gameListStored.find(item =>{
      return item.id === id;
    });
  }
  }

