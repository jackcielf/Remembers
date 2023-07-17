import { Component, Input } from '@angular/core';
import { Remember } from 'src/app/Remember';

import { RememberService } from 'src/app/services/remember.service';

@Component({
  selector: 'app-new-remember',
  templateUrl: './new-remember.component.html',
  styleUrls: ['./new-remember.component.css'],
})
export class NewRememberComponent {
  btnText: string = 'Postar';
  nameImg: string = 'noImage.png';

  constructor(private rememberService: RememberService) {}

  async createHandler(remember: Remember) {
    const formData = new FormData();

    formData.append('title', remember.title);
    formData.append('description', remember.description);

    if (remember.image) {
      formData.append('image', remember.image);
    }

    await this.rememberService.createRemember(formData).subscribe();
  }
}
