import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { RouterModule,Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { BusinessComponent } from './business/business.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { DiscriptionPipe } from './discription-pipe';


const allLinks:Routes = [
  {path:'Business',component:BusinessComponent},
  {path:'viewAllNews',component:ViewComponent },
  {path:'Sports',component:SportsComponent},
  {path:'Crime',component:CrimeComponent  },
  {path:'World',component:WorldComponent },
  {path:'Technology',component:TechnologyComponent},
  {path:'Politics',component:PoliticsComponent},
  {path:'launchNews',component:AddNewsComponent  },
]

@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    ViewComponent,
    BusinessComponent,
    PoliticsComponent,
    SportsComponent,
    CrimeComponent,
    WorldComponent,
    TechnologyComponent,
    DiscriptionPipe
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
