import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HomeModule } from './home.module';

//Chamamos o decorator para ele fornecer os metadados adicionais para nossa aplicaćao
@IonicPage({
  /*
  Prioridade tem 3 tipos e cada um rege o tempo/prioridade de carregamento
  'high' o mais rapido 'low' o mais devagar - se nao for especificado ele irá usar por default o low
  */
 priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    HomeModule
  }

  lazy(): void{
    //Nao retorna nada e vai empilhar a nova tela acima da atual
    //Como nao tenho essa pagina no meu app.module a chama passando como string o nome da classe dela
    this.navCtrl.push('nova', {
      //Posso além do nome da rota, passar parametros (json) que ela ira receber
      id: 152,
    });
  }

}
