
/* Los modulos almacenan todo lo que tiene qyue ver con algun tipo de tema
osea, en este caso el modulo de la carpeta heroes es heroes.module.ts
y con solo exportar ese modulo en el app.module.ts, estaras llamanado 
a todos los componentes dentro de el mismo */

import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,/* que cosas contiene este modulo */
        ListadoComponent
    ],
    exports: [  /* que cosas quiero hacer publicas fuera de este modulo */
        ListadoComponent,HeroeComponent
    ],
    imports: [  /* Aca adentro van modulos necesarios */
        CommonModule  /* el commonmodule lo que me importa son 
        el poder usar por ej el ngif o ngfor el ng template, entre otras cosas */
    ]
})

export class HeroesModule{}