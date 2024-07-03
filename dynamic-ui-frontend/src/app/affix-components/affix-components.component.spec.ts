import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AffixComponentsComponent } from './affix-components.component';

describe('AffixComponentsComponent', () => {
  let component: AffixComponentsComponent;
  let fixture: ComponentFixture<AffixComponentsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AffixComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffixComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
