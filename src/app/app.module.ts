import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ContentComponent } from './main/content/content.component';
import { AdvertisementComponent } from './right-sidebar/advertisement/advertisement.component';
import { NotificationsComponent } from './right-sidebar/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    AdvertisementComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
