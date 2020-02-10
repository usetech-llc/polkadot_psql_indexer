import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenticonComponent } from './identicon.component';

describe('IdenticonComponent', () => {
  let component: IdenticonComponent;
  let fixture: ComponentFixture<IdenticonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdenticonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdenticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
