import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, MultiplicacionComponent, AxBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';
}
