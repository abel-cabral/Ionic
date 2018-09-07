import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyLoadingPage } from './lazy-loading';
//Lazy loading é o carregamento por partes ou seja preguicoso
//Voce nao pode declarar uma pagina que tem um módulo em outro modulo, apenas 1 é permitido
@NgModule({
  declarations: [
    LazyLoadingPage,
  ],
  imports: [
    //Pagina que vai ser carregada por demanda
    IonicPageModule.forChild(LazyLoadingPage),
  ],
})
export class LazyLoadingPageModule {}
