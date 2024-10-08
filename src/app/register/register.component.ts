import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

    initializeRegisterForm() {
      // Logic to assign registerForm based on conditions or data
      this.registerForm = this.fb.group({
      date: ['', Validators.required],
      numeroTalao: ['', Validators.required],
      origem: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]],
      dirigente: ['', Validators.required],
      conferente1: ['', Validators.required],
      conferente2: ['', Validators.required],
      obs: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle form submission
      console.log(this.registerForm.value);
      alert('Formulário enviado com sucesso!');
    } else {
      console.log(this.registerForm);
      // Ação se o formulário não for válido
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }

  clearForm(): void {
    console.log("teste");
  }

}
