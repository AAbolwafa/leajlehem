import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFollowerComponent } from './single-follower.component';

describe('SingleFollowerComponent', () => {
  let component: SingleFollowerComponent;
  let fixture: ComponentFixture<SingleFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
