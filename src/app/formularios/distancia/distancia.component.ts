import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  objDist: Distancia =  new Distancia();

  ngOnInit(): void{
    this.formulario = new FormGroup({
      n1: new FormControl(''),
      n2: new FormControl(''),
      n3: new FormControl(''),
      n4: new FormControl(''),
    })
  }
  calc(): void{
    this.objDist.x1= this.formulario.value.n1;
    this.objDist.x2= this.formulario.value.n2;
    this.objDist.y1= this.formulario.value.n3;
    this.objDist.y2= this.formulario.value.n4;
    this.objDist.multiplicaDist();
    this.resultado = this.objDist.resultado;
  }

}
