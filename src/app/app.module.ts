import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainFieldComponent } from './main-field/main-field.component';
import { FooterComponent } from './footer/footer.component';
import { CentralBarComponent } from './central-bar/central-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainFieldComponent,
    FooterComponent,
    CentralBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
