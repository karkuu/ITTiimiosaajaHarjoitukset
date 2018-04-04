import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTargetComponent } from './link-target.component';

describe('LinkTargetComponent', () => {
  let component: LinkTargetComponent;
  let fixture: ComponentFixture<LinkTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
