import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeawriterComponent } from './beawriter.component';

describe('BeawriterComponent', () => {
  let component: BeawriterComponent;
  let fixture: ComponentFixture<BeawriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeawriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeawriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
