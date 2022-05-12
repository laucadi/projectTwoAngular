import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuardsCheckStart } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  resultado!: any;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }
  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      valor_donar: ['', [Validators.required, Validators.min(0)]],
    });
  }
  enviar() {
    Swal.fire('Gracias por tu ayuda!', 'revisa tu correo!', 'success');
  }
}
