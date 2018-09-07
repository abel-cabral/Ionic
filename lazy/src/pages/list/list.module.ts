import { IonicPageModule } from 'ionic-angular';
//Para gerar essa estrutura use - a-module - e aperte enter
import { NgModule } from '@angular/core';
import { ListPage } from './list';

@NgModule({
    imports: [
        //Precisamos usar o IonicPageModule para ativar o lazy-loader
        IonicPageModule.forChild(ListPage)
    ],
    declarations: [ListPage],
})
//Nome do modulo exportado
export class ListPageModule { }
