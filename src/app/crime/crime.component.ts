import { Component } from '@angular/core';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent {
  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];

  constructor( __newsService:NewsServiceOperationsService){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
  }

}
