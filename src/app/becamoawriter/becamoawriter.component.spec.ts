import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecamoawriterComponent } from './becamoawriter.component';

describe('BecamoawriterComponent', () => {
  let component: BecamoawriterComponent;
  let fixture: ComponentFixture<BecamoawriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecamoawriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecamoawriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
