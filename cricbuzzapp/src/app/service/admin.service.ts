import { Injectable } from '@angular/core';
import { TeamInfo } from '../models/teamInfo';
import { Time } from '@angular/common';
//import{TeamInfo} from '../models/teamInfo';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  teams:Array<TeamInfo> =[];

  constructor() { }
  ScorCard( tmname1:string,tmname2:string,toss:string,overs:any,date:Date){
    this.teams.push(new TeamInfo(tmname1,tmname2,toss,overs,date));
  }
}
