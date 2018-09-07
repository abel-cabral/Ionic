import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    //Por estar usando Lazy Loading, nao precisamos chamar ela aqui, lembre-se 2 chamadas dá erro no angular
    //HomePage,
    //ListPage,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
     //Alem de Lazy loader podemos definir que enquanto uma pagina esta carregada, outras paginas da aplicaćao poderiam ser carregadas 
     preloadModules: true,
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Por estar usando Lazy loader, nao precisamos chamar ela aqui, lembre-se 2 chamadas dá erro no angular
    //HomePage,
    //ListPage,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
