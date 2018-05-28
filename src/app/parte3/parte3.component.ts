import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.scss']
})
export class Parte3Component implements OnInit {
  nombre: string;
  telefono: number;
  correo: string;

  constructor() { }

  ngOnInit() {
  }

}
