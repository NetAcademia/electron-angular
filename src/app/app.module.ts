import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {helloReducer} from './hello.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot( {message: helloReducer} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
