import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollapseWithStickyHeaderComponent } from './collapse-with-sticky-header/collapse-with-sticky-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CollapseWithStickyHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
}
