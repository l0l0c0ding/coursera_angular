import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader'
import { LeaderService } from '../services/leader.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  leaders: Leader[];
  selectedLeader: Leader;

  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
       this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders);
  }

  goBack(): void {
    this.location.back();
  }
}






