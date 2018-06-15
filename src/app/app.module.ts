import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { AdComponent } from './right-sidebar/ad/ad.component';
import { NotificationsComponent } from './right-sidebar/notifications/notifications.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { AdvertismentComponent } from './main/advertisment/advertisment.component';
import { ChatComponent } from './main/chat/chat.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { SurveyComponent } from './main/survey/survey.component';
import { FilesComponent } from './main/files/files.component';
import { SettingsComponent } from './main/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    AdComponent,
    NotificationsComponent,
    ModalWindowComponent,
    AdvertismentComponent,
    ChatComponent,
    CalendarComponent,
    SurveyComponent,
    FilesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
