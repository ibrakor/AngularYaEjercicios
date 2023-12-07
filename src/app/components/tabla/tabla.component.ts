import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() cabeceras: string[] = []
  @Input() datos: any[] =[]
}
