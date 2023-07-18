import { Component } from '@angular/core';

import { RememberService } from 'src/app/services/remember.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Remember } from 'src/app/Remember';
import { Comment } from 'src/app/Comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allRemembers: Remember[] = [];
  remembers: Remember[] = [];
  private baseApiUrl = 'http://localhost:3333/';

  constructor(private rememberService: RememberService) {}

  ngOnInit(): void {
    this.rememberService.getRemembers().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allRemembers = data;
      this.remembers = data;
    });
  }
}
