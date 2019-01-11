import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerlistService {
  [x: string]: any;
  playernames:Array<string>=[];
  playernames2:Array<string>=[];
  constructor() { }
  addPlayerList(playerlist:Array<string>)
  {
    this.playernames=playerlist;
    this.playernames2=playerlist;
    console.log(this.playernames1);
    console.log(this.playernames2);
  }
   
}
  
 