import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-collapse-without-arrow',
  standalone: true,
  imports: [ NzAffixModule, NzCollapseModule, CommonModule, NoopAnimationsModule ],
  templateUrl: './collapse-without-arrow.component.html'
})
export class CollapseWithoutArrowComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      arrow: true
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    }
  ];
}
