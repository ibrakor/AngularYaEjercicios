import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
 mensaje : string = "Este mensaje se crea en el padre y se pasa al hijo"
}
