import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newsList;
  constructor(private newsAPI: NewsService) { }

  ngOnInit() {
    this.newsAPI.getNews()
      .then((res:any)=>{
        console.log(res);
        res.forEach(element => {
          element.publishedAt = moment(element.publishedAt).fromNow();
        });
        this.newsList = res;

      })
  }

}
