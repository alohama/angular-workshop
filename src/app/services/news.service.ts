import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews(){
    return new Promise((reslove,reject)=>{
      this.http.get('https://newsapi.org/v2/top-headlines?country=th&apiKey=8b83bf223a1c4609bc209b5d19c258b7')
        .subscribe((data:any)=>{
          reslove(data.articles);
        })
    })
  }
}
