import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Remember } from 'src/app/Remember';

@Component({
  selector: 'app-remember-form',
  templateUrl: './remember-form.component.html',
  styleUrls: ['./remember-form.component.css'],
})
export class RememberFormComponent {
  @Output() onSubmit = new EventEmitter<Remember>();
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.rememberForm.patchValue({ image: file });
  }

  submit() {
    // Não permite que o formulário seja submetido, quando houver um erro de validação
    if (this.rememberForm.invalid) {
      return;
    }
    console.log(this.rememberForm.value);

    this.onSubmit.emit(this.rememberForm.value);
  }
}
