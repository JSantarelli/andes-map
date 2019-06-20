import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisoComponent } from './friso.component';

describe('FrisoComponent', () => {
  let component: FrisoComponent;
  let fixture: ComponentFixture<FrisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
