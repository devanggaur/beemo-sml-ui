import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { Subject, Observable } from 'rxjs';

import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = 'localhost:5000/tweets/';
  posts : any = [];
  constructor(private http: HttpClient) { }

  markFavourite(tweetId){
    this.http.get('http://localhost:5000/tweets/getStoredTweets',{tweetId: tweetId}).subscribe((res)=>{
    console.log("????????????????????????????????");
    });
  }

  replyTweet(message, tweetId){
    this.http.post('http://localhost:5000/tweets/reply',{message:message, tweetId: tweetId}).subscribe((res)=>{

    });
  }

  getAllTweet(){
    return this.http.get('http://localhost:5000/tweets/getStoredTweets');
  }

  getStateWiseData(){
      return this.http.get(this.baseUrl+'getStateUser');
  }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }

  private let // @ts-ignore
  showModal: boolean = false;

  setShowModal(b: boolean) {
    this.showModal = true;
  }

  getComplete(){

  }

}
