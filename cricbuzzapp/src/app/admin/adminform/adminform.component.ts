import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  @ViewChild('tmname1') tmname1inf:ElementRef;
  @ViewChild('tmname2') tmname2inf:ElementRef;
  @ViewChild('toss') tossinf:ElementRef;
  @ViewChild('date') dateinf:ElementRef;
 // @ViewChild('time') timeinf:ElementRef;
  @ViewChild('overs') oversinf;
t1;
t2;
s;
s1;

  constructor(
    public adminService:AdminService,
    private router:Router,
     private route:ActivatedRoute
     ) { 
      
     }

  ngOnInit() {
  }
  onStartInningButtonClick(){
        this.adminService.ScorCard(
            (<HTMLInputElement>this.tmname1inf.nativeElement).value,
            ( <HTMLInputElement>this.tmname2inf.nativeElement).value,
            (<HTMLInputElement>this.tossinf.nativeElement).value,
            (<HTMLInputElement>this.oversinf.nativeElement).value,
            (<HTMLInputElement>this.dateinf.nativeElement).valueAsDate,
          
          );
          this.router.navigate(['/admin/playerlist'],{relativeTo:this.route})
          }
    func(){
      this.t1=(<HTMLInputElement>this.tmname1inf.nativeElement).value;
      this.t2=(<HTMLInputElement>this.tmname2inf.nativeElement).value;
      }
}
