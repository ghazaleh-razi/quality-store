import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductButtonComponent } from './new-product-button.component';

describe('NewProductButtonComponent', () => {
  let component: NewProductButtonComponent;
  let fixture: ComponentFixture<NewProductButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
