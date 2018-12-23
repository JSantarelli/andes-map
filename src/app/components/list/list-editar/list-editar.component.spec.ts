import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditarComponent } from './list-editar.component';

describe('ListEditarComponent', () => {
  let component: ListEditarComponent;
  let fixture: ComponentFixture<ListEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
