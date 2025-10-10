import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {
  formulario!: FormGroup;
  resultado!:number;

  constructor(){}

  ngOnInit(): void{
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
    });
  }
  multNumeros():void{
    let n1 = this.formulario.get('numero1')?.value;
    let n2 = this.formulario.value.numero2;
    this.resultado = n1* n2;
  }
}
