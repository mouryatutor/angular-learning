import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';



@Component({
  selector: 'app-collapse-with-sticky-header',
  standalone: true,
  imports: [NzCollapseModule, BrowserAnimationsModule ],
  templateUrl: './collapse-with-sticky-header.component.html',
  styleUrl: './collapse-with-sticky-header.component.css'
})
export class CollapseWithStickyHeaderComponent {

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
