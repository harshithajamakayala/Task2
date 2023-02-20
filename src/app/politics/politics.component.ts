import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent {
  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];
  router:Router;

  constructor( __newsService:NewsServiceOperationsService, router:Router){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
    this.router=router;
  }

  viewDetails(name:string)
  {
    
    this.router.navigate(['detailed',name]);
  }

}
