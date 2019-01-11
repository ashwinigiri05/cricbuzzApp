import { Component, OnInit } from '@angular/core';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { PlayerlistService } from '../service/playerlist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { CommentryService } from '../service/commentry.service';

@Component({
  selector: 'app-scor-card',
  templateUrl: './scor-card.component.html',
  styleUrls: ['./scor-card.component.css']
})
export class ScorCardComponent implements OnInit {

  constructor(private playerService:PlayerlistService,
    private router:Router,
     private route:ActivatedRoute,
     adminService:AdminService,
     private commentryService :CommentryService
     ) { }

  ngOnInit() {
  }

}
