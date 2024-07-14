import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseStickyHeadersComponent } from './collapse-sticky-headers.component';

describe('CollapseStickyHeadersComponent', () => {
  let component: CollapseStickyHeadersComponent;
  let fixture: ComponentFixture<CollapseStickyHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseStickyHeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapseStickyHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
