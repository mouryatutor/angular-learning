import { Component } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-affix-components',
  standalone: true,
  imports: [NzAffixModule,NzButtonModule],
  templateUrl: './affix-components.component.html',
  styleUrls: ['./affix-components.component.css']
})
export class AffixComponentsComponent {
  
}
