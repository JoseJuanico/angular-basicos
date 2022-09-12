import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman','Iron man','Hulk','Thor'];
  /* heroeBorrado : string | undefined= ''; */ /* no es muy bonito por eso es mejor ponerle un pipe al shift */
  heroeBorrado : string= ''; //al poner el pipe en la funcion, no es necesario ponerle pipe undefined a la propiedad
  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void { /* ciclo de vida que se iniciar cuando se carga el componente al principio 
  el constructor se inicia antes que el oninit*/
  console.log('oninit');
}

borrarHeroe=():void =>{
  /* this.heroes.pop();  Elimina el ultimo dato del array heroes*/

 /*  this.heroes.shift(); Elimina el primer elemento del array */
 this.heroeBorrado = this.heroes.shift() || ''; /* el shift devuelve string o undefined y con el pipe preguntamos si devuelve undefined que devuelva '' ,sino devuelva el heroe */
 console.log(this.heroeBorrado);
 

}

}
