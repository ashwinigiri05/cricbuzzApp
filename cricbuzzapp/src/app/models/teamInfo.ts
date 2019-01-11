import { Time } from '@angular/common';

export class TeamInfo{
    tmname1:string;
    tmname2:string;
    toss:string;
    overs:number;
     date:Date;
     //time:Time

    constructor(tmname1:string,tmname2:string,toss:string,overs:number,date:Date){
      this.tmname1=tmname1;
      this.tmname2=tmname2;
      this.toss=toss;
      this.overs=overs;
      this.date=date;
      //this.time=time
    }
}