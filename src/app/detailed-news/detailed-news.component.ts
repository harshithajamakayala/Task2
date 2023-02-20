import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../news';
import { NewsServiceOperationsService } from '../news-service-operations.service';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.css']
})
export class DetailedNewsComponent {

  __newsService:NewsServiceOperationsService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  n:News = new News('','','','');
    constructor( __newsService:NewsServiceOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this. __newsService =  __newsService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchNewsName= this.activeRoute.snapshot.params['name']; // extract value from prameter(URI)
    console.log(searchNewsName);
    this.n= this.__newsService.getNewsByName(searchNewsName); // get data from service class
    console.log(this.n);

}

}
