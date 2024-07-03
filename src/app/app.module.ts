import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Pipe } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';




import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { BackgroundDivComponent } from './background-div/background-div.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './slider/slider.component';
import { BestSellersSlidesComponent } from './best-sellers-slides/best-sellers-slides.component';
import { BlogiComponent } from './blogi/blogi.component';
import { TruncatePipe } from './truncate.pipe';
import { pipe } from 'rxjs';
import { AuthorsComponent } from './authors/authors.component';
import { BackgroundPicComponent } from './background-pic/background-pic.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './footer/footer.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BestsellersDetailedPageComponent } from './bestsellers-detailed-page/bestsellers-detailed-page.component';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaginatorModule } from 'primeng/paginator';
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






registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDivComponent,
    HeaderComponent,
    SliderComponent,
    BestSellersSlidesComponent,
    BlogiComponent,
    TruncatePipe,
    AuthorsComponent,
    BackgroundPicComponent,
    FooterComponent,
    BestsellersDetailedPageComponent,
    LayoutcomponentComponent,
    HomePageComponent,
    BookinformationComponent,
    AllblogsComponent,
    BloginfoComponent,
    AllauthorsComponent,
    AuthorinfoComponent,
    AboutusComponent,
    NotFoundComponent,
    BookKidsComponent,
    KidinfoComponent,
    YouthbooksComponent,
    YouthinfoComponent,
    LoginComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    SidebarModule,
     ButtonModule,
     NzMenuModule,
     NzDropDownModule,
     NzIconModule,
     PaginatorModule,
     MegaMenuModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
