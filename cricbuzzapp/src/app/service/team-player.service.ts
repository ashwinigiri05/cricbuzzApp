import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamPlayerService {

  constructor() { }
  teamplayers:Array<TeamPlayer> = [];
  addPlayer(playername:string){
    this.teamplayers.push(new TeamPlayer(playername))
  }
}
