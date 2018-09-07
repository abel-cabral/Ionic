import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { BoxComponent } from './box/box';

NgModule({
	imports: [ IonicModule ],
	declarations: [ BoxComponent ],
	exports: [ BoxComponent ]
})
//Ao inves de exportar uma classe exportamos um module
export module ComponentsModule {}
