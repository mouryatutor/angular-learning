import { Component, NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collapsable-item',
  standalone: true,
  imports: [ NzAffixModule, NzCollapseModule, FormsModule ],
  templateUrl: './collapsable-item.component.html',
  styleUrl: './collapsable-item.component.css'
})
export class CollapsableItemComponent {

}
