import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarComponent } from './utl/agregar/agregar.component';
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { EditarComponent } from './utl/editar/editar.component';
import { EliminarComponent } from './utl/eliminar/eliminar.component';
import { SignInComponent } from './auth/features/sign-in/sign-in.component';
import { SignUpComponent } from './auth/features/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, MultiplicacionComponent, AxBComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';
    
    ngOnInit(): void {
    initFlowbite();
    }
}
