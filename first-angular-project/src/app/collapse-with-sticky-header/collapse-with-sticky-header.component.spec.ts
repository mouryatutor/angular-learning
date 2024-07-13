import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseWithStickyHeaderComponent } from './collapse-with-sticky-header.component';

describe('CollapseWithStickyHeaderComponent', () => {
  let component: CollapseWithStickyHeaderComponent;
  let fixture: ComponentFixture<CollapseWithStickyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseWithStickyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollapseWithStickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
