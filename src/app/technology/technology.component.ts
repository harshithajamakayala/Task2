import { Component } from '@angular/core';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];

  constructor( __newsService:NewsServiceOperationsService){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
  }

}
