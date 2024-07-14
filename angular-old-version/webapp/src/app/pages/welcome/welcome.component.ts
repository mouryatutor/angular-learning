import { Component, OnInit } from '@angular/core';
import { CollapseStickyHeadersComponent } from '../../components/collapse-sticky-headers/collapse-sticky-headers.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CollapseStickyHeadersComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
