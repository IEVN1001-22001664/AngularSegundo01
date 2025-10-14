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
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),
    })
  }
  calc(): void{
    this.objDist.x1= this.formulario.value.x1;
    this.objDist.y1= this.formulario.value.y1;
    this.objDist.x2= this.formulario.value.x2;
    this.objDist.y2= this.formulario.value.y2;
    console.log(this.objDist.x1);
    this.objDist.multiplicaDist();
    this.resultado = this.objDist.resultado;
  }

}
