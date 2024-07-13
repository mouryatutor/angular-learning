import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollapseWithStickyHeaderComponent } from './collapse-with-sticky-header/collapse-with-sticky-header.component';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CollapseWithStickyHeaderComponent,NzFlexModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
}
