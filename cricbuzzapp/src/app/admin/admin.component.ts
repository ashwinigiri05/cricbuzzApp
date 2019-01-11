import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamInfo } from '../models/teamInfo';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  tasks;
  task:TeamInfo 

  constructor(
   private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
  }
  onNewMatchButtonClick(){
    //this.router.navigate(['adminform'],{relativeTo:this.route})
    this.router.navigate(['adminform'],{relativeTo:this.route})
  }
  
}
