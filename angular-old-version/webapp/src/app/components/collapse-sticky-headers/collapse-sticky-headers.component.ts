import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren, viewChildren } from '@angular/core';
import { NzCollapseModule, NzCollapsePanelComponent } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-collapse-sticky-headers',
  standalone: true,
  imports: [NzCollapseModule,CommonModule],
  templateUrl: './collapse-sticky-headers.component.html',
  styleUrl: './collapse-sticky-headers.component.css'
})
export class CollapseStickyHeadersComponent implements AfterViewInit{

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      arrow: false
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 3'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 4'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 5'
    },
    {
      active: true,
      name: 'This is panel header 1',
      arrow: false
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 3'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 4'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 5'
    },
    {
      active: true,
      name: 'This is panel header 1',
      arrow: false
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 3'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 4'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 5'
    },
    {
      active: true,
      name: 'This is panel header 1',
      arrow: false
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 3'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 4'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 5'
    },
    {
      active: true,
      name: 'This is panel header 1',
      arrow: false
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 3'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 4'
    },
    {
      active: false,
      arrow: false,
      name: 'This is panel header 5'
    }
  ];

 @ViewChildren(NzCollapsePanelComponent, { read: ElementRef }) panelsRef!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    // Iterate over the panels and apply top values
    this.panelsRef.forEach((panel: ElementRef, index: number) => {  
      const header = panel.nativeElement.querySelector('.ant-collapse-header');
      
      // console.log(panel.nativeElement.querySelector(".ant-collapse-header"));
      // console.log(panel);
      if(panel) {
        this.renderer.setStyle(panel.nativeElement, 'position', 'sticky');
        this.renderer.setStyle(panel.nativeElement, 'top', `${index * 47}px`);
        this.renderer.setStyle(panel.nativeElement, 'background', `pink`);
      }
    });
  }


}
