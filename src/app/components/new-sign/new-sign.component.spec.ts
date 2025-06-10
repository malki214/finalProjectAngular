import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSignComponent } from './new-sign.component';

describe('NewSignComponent', () => {
  let component: NewSignComponent;
  let fixture: ComponentFixture<NewSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
