import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { PlayerlistService } from 'src/app/service/playerlist.service';

@Component({
  selector: 'app-admin-summery',
  templateUrl: './admin-summery.component.html',
  styleUrls: ['./admin-summery.component.css']
})
export class AdminSummeryComponent implements OnInit {
  @ViewChild('possibleRuns')possibleRunsinf:ElementRef;
  @ViewChild('Wicket')wicketinf:ElementRef;
  @ViewChild('catchBy')catchByinf:ElementRef;
  t1;
  t2;
  pp;
 public showWicket : boolean =false;
 public showCatch : boolean =false;
 public buttonName:any = 'showWicket';
public buttonName1:any = 'showCatch';
  constructor( adminService:AdminService,
    private router:Router,
     private route:ActivatedRoute,
     public playerlistService:PlayerlistService
     ) {
        this.pp =playerlistService.playernames2;
      }

  ngOnInit() {
    
  }
  onSelectOfPossibility(){
   this.t1 = (<HTMLInputElement>this.possibleRunsinf.nativeElement).value;
     if(this.t1 == 'Wicket'){
        this.showWicket = true
     }
     else{
       this.showWicket = false
     }
  }
  onSelectOfWicket(){
   this.t2 = ((<HTMLInputElement>this.wicketinf.nativeElement).value);
   if(this.t2 == 'Catch' || this.t2 == 'Stumping' ){
     this.showCatch = true
   }
   else{
     this.showCatch = false
   }
  }
  onaddToScorCardButtonClick(){
    this.router.navigate(['/admin/header'],{relativeTo:this.route})
  }
 
}