import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesContactoComponent } from './canciones-contacto.component';

describe('CancionesContactoComponent', () => {
  let component: CancionesContactoComponent;
  let fixture: ComponentFixture<CancionesContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
