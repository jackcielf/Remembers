import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberFormComponent } from './remember-form.component';

describe('RememberFormComponent', () => {
  let component: RememberFormComponent;
  let fixture: ComponentFixture<RememberFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RememberFormComponent]
    });
    fixture = TestBed.createComponent(RememberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
