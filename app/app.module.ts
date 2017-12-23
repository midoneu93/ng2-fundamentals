import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsComponent } from './events-app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsComponent],
    bootstrap: [EventsComponent],
})

export class AppModule{

}