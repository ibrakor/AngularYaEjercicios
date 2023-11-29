import {Component, Input, ViewChild} from '@angular/core';
import {HijoComponent} from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
 mensajeDelHijo : string = ""
  @ViewChild(HijoComponent) hijo: any;
 ngAfterViewInit(){
   this.mensajeDelHijo = this.hijo.mensajeParaElPadre
 }
}
