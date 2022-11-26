import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsLikesComponent } from './songs-likes.component';

describe('SongsLikesComponent', () => {
  let component: SongsLikesComponent;
  let fixture: ComponentFixture<SongsLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsLikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
