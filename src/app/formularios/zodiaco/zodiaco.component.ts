import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaseZod } from './claseZod';

@Component({
  selector: 'app-zodiaco',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {

  formularioZodiaco!: FormGroup;
  objZod: ClaseZod = new ClaseZod();
  formulario!: FormGroup;
  resultado: string = '';
  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imagen: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioZodiaco = new FormGroup({
      nombre: new FormControl(''),
      apellidoP: new FormControl(''),
      apellidoM: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  imprimir(): void {
    if (this.formularioZodiaco.valid) {
      // Asignar valores del formulario a la clase
      this.objZod.nombre = this.formularioZodiaco.value.nombre;
      this.objZod.apellidoP = this.formularioZodiaco.value.apellidoP;
      this.objZod.apellidoM = this.formularioZodiaco.value.apellidoM;
      this.objZod.dia = this.formularioZodiaco.value.dia;
      this.objZod.mes = this.formularioZodiaco.value.mes;
      this.objZod.anio = this.formularioZodiaco.value.anio;
      this.objZod.sexo = this.formularioZodiaco.value.sexo;
      this.objZod.calcularEdad();
      this.objZod.obtenerSigno();
      this.objZod.obtenerImagen();
      this.nombreCompleto = this.objZod.nombreCompleto;
      this.edad = this.objZod.edad;
      this.signo = this.objZod.signo;
      this.imagen = this.objZod.imagen;

    } 
  }
}
