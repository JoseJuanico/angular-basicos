import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//se importan los componentes para poder usarlos de forma global

/* import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component'; */
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

//los modules tambien se deben importar para poder ocupar lo que tengan adentro
@NgModule({
  declarations: [ //aca se ponen los componentes para aser usados de forma global
    AppComponent,
    
    /* HeroeComponent,
    ListadoComponent */ //no sear necesario llamarlos aca ,ya que se importo el modulo que los contiene
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent] //este es el modulo principal que se lanzara primero
})
export class AppModule { }

//crear un modulo llamado contadorModule
//declarations, y exportaciones para poder utilizarlo
