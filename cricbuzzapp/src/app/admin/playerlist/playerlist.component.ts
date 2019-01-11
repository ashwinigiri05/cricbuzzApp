import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerlistService } from 'src/app/service/playerlist.service';
import { AdminService } from 'src/app/service/admin.service';
import { CommentryService } from 'src/app/service/commentry.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
 // @ViewChild('playername1')team1inf :ElementRef;
 @ViewChild('playernames1')team1inf :ElementRef;
  @ViewChild('playernames2')team2inf :ElementRef;
tm;
p1;
p2;
index=1;
Id=0;
playername1:Array<string>=[];
playername2:Array<string>=[];
  playernames: any;
  playernames2: any;
  
  constructor(public playerService:PlayerlistService,
    private router:Router,
     private route:ActivatedRoute,
     adminService:AdminService,
     private commentryService :CommentryService
     ) { this.tm = adminService.teams;}
 

  ngOnInit() {
  }

  onaddclick()
  { this.Id++;
      this.index++;
      if(this.index<=12){
      this.p1=(<HTMLInputElement> this.team1inf.nativeElement).value;
      console.log(this.p1);
      this.playername1.push((<HTMLInputElement> this.team1inf.nativeElement).value);
      
 }
 }
 deleteFieldValue(cc){
    let index = this.playernames.indexOf(cc);
    this.playernames.splice(index,1);
  }
 
 onSaveClick(){
  this.playerService.addPlayerList(this.playernames);
 }

 onaddButtonclick()
 {
   this.index++;
   if(this.index<=12){
    this.p2=(<HTMLInputElement> this.team2inf.nativeElement).value;
    console.log(this.p2);
    this.playername2.push((<HTMLInputElement> this.team2inf.nativeElement).value);
  }
}

deleteFieldValue1(cc){
  let index = this.playernames2.indexOf(cc);
  this.playernames2.splice(index,1);
}
onSaveClick1(){
  this.playerService.addPlayerList(this.playernames2);
 }


onSubmitClick(){
    this.router.navigate(['/admin/admin-summery'],{relativeTo:this.route})
  }
 
}
