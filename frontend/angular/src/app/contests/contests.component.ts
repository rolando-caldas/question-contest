import { Component, OnInit } from '@angular/core';
import {Contest} from "../entity/Contest";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent implements OnInit {
  public contests: Contest[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getContests();
  }

  getContests(): void {
    this.apiService.getContests().subscribe(contestsData => {
      this.contests = contestsData.data;
    })
  }contests
}
