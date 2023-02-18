import { Component } from '@angular/core';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];

  constructor( __newsService:NewsServiceOperationsService){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
  }

}
