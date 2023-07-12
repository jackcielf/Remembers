import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRememberComponent } from './new-remember.component';

describe('NewRememberComponent', () => {
  let component: NewRememberComponent;
  let fixture: ComponentFixture<NewRememberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRememberComponent]
    });
    fixture = TestBed.createComponent(NewRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
