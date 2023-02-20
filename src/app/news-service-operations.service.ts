import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceOperationsService {

  constructor() { }

  newsArr:News[]=[];

  addNews(newsFromUser:News){
    this.newsArr.push(newsFromUser); 
    
  }
  getNewsArr():News[]
  {
    return this.newsArr;
  }

  getUserByCategory(filterCategory:string):News[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:News[] = [];

    this.newsArr.forEach(r=>{
      if(r.category == filterCategory)
      {
        outputArr.push(r);
      }
      
    });
    return outputArr;
  }
  getNewsByName(searchRestaurantId:string):News
  {
    let outputRest:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisRest:News  = this.newsArr[i];
        if(thisRest.category == searchRestaurantId)
        {
          outputRest = thisRest;
          break;
        }
    }
    
    return outputRest;
  }



}
