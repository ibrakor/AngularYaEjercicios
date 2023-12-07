import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  misCabecerasL: string[] = ["Titulo", "Autor"];
  misDatosL: any[] = [
    { "Titulo": "El quijote", "Autor": "Cervantes" },
    { "Titulo": "100 años de soledad", "Autor": "Gabriel García Márquez" },
    { "Titulo": "Los pilares de la Tierra", "Autor": "Ken Follet" }
  ];

  datosRevistas: any[] = [
    {"Titulo": "Jara y sedal", "Autor": "A.Lopez"},
    {"Titulo": "Pc Computer", "Autor": "MA Editorial"}
  ]
  datosMusica: any[] = [
    {"Titulo": "Rapsody","Autor": "Queen"},
    {"Titulo": "Motomami", "Autor": "Rosalia"}
  ]

  datosCine: any[] = [
    {"Titulo": "Napoleon", "Autor": "Ridley Scott"},
    {"Titulo": "Frozen",  "Autor": "Jennifer Lee"}
  ]

}


