import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
numero1 : number = 0;
numero2 : number = 0;
resultado : number = 0;
resultados : any = [];
  constructor() { }

  ngOnInit(): void {
  }
somar(){
  this.resultado = this.numero1 + this.numero2;
  this.resultados.push(this.numero1 + "+" + this.numero2 + "=" + this.resultado)
}
}
