//Para gerar essa estrutura use - a-module - e aperte enter
import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';



@NgModule({
    
    declarations: [ 
        HomePage,        
    ],
    imports: [  
        //Precisamos usar o IonicPageModule para ativar o lazy-loader
        IonicPageModule.forChild(HomePage)
    ],   
})
export class HomeModule { }
