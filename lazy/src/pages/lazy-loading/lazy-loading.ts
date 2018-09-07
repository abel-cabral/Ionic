import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LazyLoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 //Aceita um objeto que serao os meta dados dessa pagina, se nao especificado ele pega os defaults
@IonicPage({
  name: 'nova',// Se trocado aqui precisamos mudar em que o chama
  segment: 'custom-nova-page/:id',//Podemos indicar qual a url queremos que seja exibida - ao chamar o parametro aqui, passamos a pega-lo diretamente dessa pagina
  defaultHistory: ['HomePage'],//Em caso de update nao vai perder o historico para back, assim a gente define um default, se houver historico ele usa o que tem
  priority: 'low',
  
   /*
  priority tem 3 tipos e cada um rege o tempo/prioridade de carregamento
  'high' o mais rapido 'low' o mais devagar - se nao for especificado ele irá usar por default o low
  */
})

@Component({
  selector: 'page-lazy-loading',
  templateUrl: 'lazy-loading.html',
})
export class LazyLoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //Recebo o valor passado por parametros - este.parametros.data.nomedoparametro
    console.log('Meu parametro é ', this.navParams.data.id);
  }

}
