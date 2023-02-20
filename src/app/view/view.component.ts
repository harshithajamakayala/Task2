import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  __newsService:NewsServiceOperationsService;

  allNews:Array<News>=[];
 
  router:Router;

  constructor( __newsService:NewsServiceOperationsService, router:Router){
    this.__newsService=__newsService;
    this.allNews=this.__newsService.getNewsArr();
    this.router=router;
  }
   
  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allNews = this.__newsService.getUserByCategory(filterValue);
  }

  viewDetails(name:string)
  {
    
    this.router.navigate(['detailed',name]);
  }
  

}
