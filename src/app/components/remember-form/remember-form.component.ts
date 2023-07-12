import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remember-form',
  templateUrl: './remember-form.component.html',
  styleUrls: ['./remember-form.component.css'],
})
export class RememberFormComponent {
  @Input() btnText!: string;
  @Input() nameImg!: string;
}
