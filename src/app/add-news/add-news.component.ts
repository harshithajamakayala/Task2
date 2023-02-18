import { Component } from '@angular/core';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {

  __NewsService:NewsServiceOperationsService;

  constructor(__NewsService:NewsServiceOperationsService){
    this.__NewsService=__NewsService;
  }

  ReadNews(headline:string,
    category:string,
    mainNews:string,
    image:string){
      let newsFromUser:News= new News(headline,category,mainNews,image);
      this.__NewsService.addNews(newsFromUser);
      console.log(headline+""+category);
    }

}
