import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseWithoutArrowComponent } from './collapse-without-arrow.component';

describe('CollapseWithoutArrowComponent', () => {
  let component: CollapseWithoutArrowComponent;
  let fixture: ComponentFixture<CollapseWithoutArrowComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseWithoutArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseWithoutArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
