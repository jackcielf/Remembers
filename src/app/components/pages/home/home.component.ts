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
  baseApiUrl = 'http://localhost:3333/';

  faSearch = faSearch;
  searchTerm: string = '';

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

  // FAZENDO A FILTRAGEM
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.remembers = this.allRemembers.filter((remember) =>
      remember.title.toLowerCase().includes(value)
    );
  }
}
