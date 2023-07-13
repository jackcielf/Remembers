import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-remember',
  templateUrl: './new-remember.component.html',
  styleUrls: ['./new-remember.component.css'],
})
export class NewRememberComponent {
  btnText: string = 'Postar';
  nameImg: string = 'noImage.png';
}
