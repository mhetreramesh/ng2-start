import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { EnquiryChatComponent } from './enquiries/enquiry-chat.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    EnquiryChatComponent
 ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
