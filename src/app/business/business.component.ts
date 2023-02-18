import { Component } from '@angular/core';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];

  constructor( __newsService:NewsServiceOperationsService){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
  }

}
