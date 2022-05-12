import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  /* numeroActual = '0';
  primeraOperacion = any;
  operacion = any;
  esperarSegundoNumero = false;
*/
  num1!: number;
  num2!: number;
  resultado!: number;

  /* mensaje_ok: any;
  mensaje_error: any; */

  constructor() {}

  ngOnInit(): void {}
  sumar() {
    if (this.num1 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #1 obligatorio!',
      });
    } else if (this.num2 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #2 obligatorio!',
      });
    } else {
      this.resultado = this.num1 + this.num2;
      Swal.fire({
        icon: 'success',
        title: 'tu resultado es ' + this.resultado,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  restar() {
    if (this.num1 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #1 obligatorio!',
      });
      //this.mensaje_error = 'Campo #1 obligatorio!';
    } else if (this.num2 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #2 obligatorio!',
      });
    } else if (this.num1 <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Debes ingresar un valor mayor a 0',
      });
    } else if (this.num2 <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Debes ingresar un valor mayor a 0',
      });
    } else {
      this.resultado = this.num1 - this.num2;
      Swal.fire({
        icon: 'success',
        title: 'tu resultado es ' + this.resultado,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  multiplicar() {
    if (this.num1 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #1 obligatorio!',
      });
    } else if (this.num2 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #2 obligatorio!',
      });
    } else {
      this.resultado = this.num1 * this.num2;
      Swal.fire({
        icon: 'success',
        title: 'tu resultado es ' + this.resultado,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  dividir() {
    if (this.num1 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #1 obligatorio!',
      });
    } else if (this.num2 == null) {
      Swal.fire({
        icon: 'error',
        title: 'Campo #2 obligatorio!',
      });
    } else if (this.num1 <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Debes ingresar un valor mayor a 0',
      });
    } else if (this.num2 <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Debes ingresar un valor mayor a 0',
      });
    } else {
      this.resultado = this.num1 / this.num2;
      Swal.fire({
        icon: 'success',
        title: 'tu resultado es ' + this.resultado,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
//opcion 1
/*  sumar() {
    if (this.num1 == null && this.num2 == null) {
      this.mensaje_error = 'Campo obligatorio';
    } else {
      this.resultado = this.num1 + this.num2;
      this.mensaje_ok = 'tu resultado es';
    }
  }
} */
//opcion 2

/*public obtenerNumero(n: string) {
    console.log(n);
    if (this.esperarSegundoNumero) {
      this.numeroActual = n;
      this.esperarSegundoNumero = false;
    } else {
      this.numeroActual === '0'
        ? (this.numeroActual = n)
        : this.esperarSegundoNumero;
    }
  }
  private hacerCalculo(num1: any, num2: any) {
    switch (num1) {
      case '+':
        return (this.primeraOperacion += num2);
      case '-':
        return (this.primeraOperacion -= num2);
      case '*':
        return (this.primeraOperacion *= num2);
      case '/':
        return (this.primeraOperacion /= num2);
      case '=':
        return num2;
    }
  }
  public obtenerOperacion(num1: string) {
    console.log(num1);

    if (this.primeraOperacion === null) {
      this.primeraOperacion = Number(this.numeroActual);
    } else if (this.operacion) {
      const resultado = this.hacerCalculo(
        this.operacion,
        Number(this.numeroActual)
      );
      this.numeroActual = resultado;

      console.log(this.primeraOperacion);
    }
  }
}*/
