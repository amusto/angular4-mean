import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CollectionsComponent } from './collections.component';
import { NgbdModalContent } from './collections.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [NgbdModalContent],
  declarations: [
    AppComponent,
    DashboardComponent,
    CollectionsComponent,
    NgbdModalContent
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent] // TODO: Can we bootstrap multiple components?
})
export class AppModule { }
