import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  mensajeParaElPadre: string ="Hola, soy el hijo!. Esto es lo unico que muestra el hijo."
}
