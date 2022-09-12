import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>Hola mundo</h1>
    <h1>{{title}}</h1> <!-- aca se muestra propiedad que se envia desde el componente -->
    <!-- dentro de {{}} se peude agregar cuaqluier codigo de js -->
    <h1>{{1 + 1}}</h1><!-- esto retorna 2 en pantalla -->
    
    <button (click)="numero = numero +1">+1</button>  <!-- los () significan evento -->
    <button (click)="numero = numero -1">-1</button>
    <span>{{numero}}</span>
    
    
    <!-- forma anaze -->
    <button (click)="sumar()">+1</button>
    <button (click)="restar()">-1</button>
    <span>{{numero}}</span>
    
    <!-- forma aun mas anaze -->
    <button (click)="acumular(1)">+1</button>
    <button (click)="acumular(-1)">-1</button>
    <span>{{numero}}</span>
    <!-- tarea -->
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="acumular5(base)">{{base}}</button>
    <button (click)="acumular5(-base)">-{{base}}</button>
    <span>{{numero}}</span>`
})
export class ContadorComponent{
    title:string = 'Contador APP';
    numero:number=10;
    base:number = 5;
    sumar=()=>{
      this.numero +=1;
    }
  
    restar=()=>{
      this.numero -=1;
    }
  
    /* metodo aun mas naze */
  
    acumular=(valor:number)=>{
      this.numero +=valor;
    }
  
  
    /* tarea crear variable base de tipo numero y valor 5
    y acumular en el html este valor y mostrarlo igualmente */
  
    acumular5=(numero2:number)=>{
      this.numero +=numero2;
    }
}