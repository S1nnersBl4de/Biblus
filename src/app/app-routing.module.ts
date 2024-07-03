import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellersDetailedPageComponent } from './bestsellers-detailed-page/bestsellers-detailed-page.component';
import { BackgroundDivComponent } from './background-div/background-div.component';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookinformationComponent } from './bookinformation/bookinformation.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { BloginfoComponent } from './bloginfo/bloginfo.component';
import { AllauthorsComponent } from './allauthors/allauthors.component';
import { AuthorinfoComponent } from './authorinfo/authorinfo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookKidsComponent } from './book-kids/book-kids.component';
import { KidinfoComponent } from './kidinfo/kidinfo.component';
import { YouthbooksComponent } from './youthbooks/youthbooks.component';
import { YouthinfoComponent } from './youthinfo/youthinfo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutcomponentComponent,
    children: [
      { path: '',
         component: HomePageComponent
      }, 
      { path: 'bestsellers',
         component: BestsellersDetailedPageComponent
      },
      {
        path: 'book/:id',
        component:BookinformationComponent
      },
      {
        path: 'fullblogs',
        component: AllblogsComponent
      },
      {
        path:'singleblog/:id',
        component: BloginfoComponent
      },
      {
        path: 'allAuthors',
        component: AllauthorsComponent
      },
      {
        path: 'singleAuthor/:id',
        component: AuthorinfoComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'booksforkids',
        component: BookKidsComponent
      },
      {
        path: 'kidsbookinfo/:id',
        component: KidinfoComponent
      },
      {
        path: 'youthbooks',
        component: YouthbooksComponent
      },
      {
        path: 'youthbooksinfo/:id',
        component: YouthinfoComponent

      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
