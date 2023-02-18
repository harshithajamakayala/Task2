import { Component } from '@angular/core';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {

  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];

  constructor( __newsService:NewsServiceOperationsService){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
  }
}
