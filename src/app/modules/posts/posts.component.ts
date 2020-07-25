import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DashboardService} from "../dashboard.service";
import {ModalsComponent} from "./modals/modals.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: quotemark
  users = [{username: "Shubham", location: "Bengaluru, India", tweet: "PrimeNG is distributed in" +
      ' commonjs format, a module manager of your choice is required and this guide ' +
      'provides samples for SystemJS, WebPack and Angular CLI.'+' commonjs format, a module manager of your choice is required and this guide ' +
      'provides samples for SystemJS, WebPack and Angular CLI.'+' commonjs format, a module manager of your choice is required and this guide ' +
      'provides samples for SystemJS, WebPack and Angular CLI.'},
    {username:'User 2', location: 'Bengaluru, India', tweet:'Hello from user 2'},
    {username:'User 3', location: 'Mumbai, India', tweet:'Hello from user 3'},
    {username:'User 4', location: 'Bengaluru, India', tweet:'Hello from user 4'},
    {username:'User 4', location: 'Bengaluru, India', tweet:'Hello from user 4'},
    {username:'User 4', location: 'Bengaluru, India', tweet:'Hello from user 4'}];
  tweets:  any = [];
response = "badge badge-pill badge-success";
  constructor(private http: HttpClient, private dashboardService: DashboardService, public dialog: MatDialog) { }

  ngOnInit () {
     return this.dashboardService.getAllTweet().subscribe((res: any[])=>{
       this.tweets = res.tweets;
       console.log(this.tweets);
     });
  }
  onRetweet( tweetId){
    this.dashboardService.replyTweet("Hi all", tweetId);
    alert("Retweeted");
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  isPositive(sentiments) {
    if(sentiments > 0){
      return true
    }
  }
}
