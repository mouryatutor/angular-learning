import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableItemComponent } from './collapsable-item.component';

describe('CollapsableItemComponent', () => {
  let component: CollapsableItemComponent;
  let fixture: ComponentFixture<CollapsableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapsableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
