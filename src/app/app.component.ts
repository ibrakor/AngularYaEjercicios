import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  celdas = [["PRIMER", "SEGUND"], ["TERCER", "CUART"]]

  mostrarOcultar(celda: string) {
    let parrafo = document.getElementById(celda)
    let visible = parrafo!!.style.display
    if (visible == 'none') {
      parrafo!!.style.display = 'block'
    } else {
      parrafo!!.style.display = 'none'
    }
  }
}


