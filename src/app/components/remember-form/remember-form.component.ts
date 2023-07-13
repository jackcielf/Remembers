import { Component, Input } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-remember-form',
  templateUrl: './remember-form.component.html',
  styleUrls: ['./remember-form.component.css'],
})
export class RememberFormComponent {
  @Input() btnText!: string;
  @Input() nameImg!: string;

  rememberForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.rememberForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.rememberForm.get('title')!;
  }

  get description() {
    return this.rememberForm.get('description')!;
  }

  submit() {
    // Não permite que o formulário seja submetido, quando houver um erro de validação
    if (this.rememberForm.invalid) {
      return;
    }
    console.log('Submeteu o formulário');
  }
}
