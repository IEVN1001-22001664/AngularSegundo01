import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Multiplica } from './calseMult';

@Component({
  selector: 'app-ax-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ax-b.component.html',
  styleUrl: './ax-b.component.css'
})

export class AxBComponent {
  formulario!:FormGroup;
  resultado!:number;
  detalle: string = '';
  objClase: Multiplica = new Multiplica() ;

ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl(''),
    });
  }
  showFinal():void {
    this.objClase.a = this.formulario.value.a;
    this.objClase.b = this.formulario.value.b;
    this.objClase.operacion();
    this.resultado = this.objClase.valor;
    this.detalle = this.objClase.detalle;
  }
}