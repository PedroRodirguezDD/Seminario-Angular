import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesHomeComponent } from './canciones-home.component';

describe('CancionesHomeComponent', () => {
  let component: CancionesHomeComponent;
  let fixture: ComponentFixture<CancionesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
