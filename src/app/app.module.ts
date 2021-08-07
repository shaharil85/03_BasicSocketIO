import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//const config: SocketIoConfig = { url: 'https://expressqaisara.herokuapp.com/', options: {} };
const config: SocketIoConfig = { url: 'https://nodejs-heroku-qaisara.herokuapp.com/', options: {} };
//const config: SocketIoConfig = { url: 'http://localhost/', options: {} };

//const config: SocketIoConfig = { url: 'http://192.168.1.10/', options: {} };
//const config: SocketIoConfig = {url:'wss://60.49.131.103', options: {} };
//const config: SocketIoConfig = {url:'ws://192.168.1.10', options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SocketIoModule.forRoot(config)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
