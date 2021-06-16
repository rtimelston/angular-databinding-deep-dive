import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // means css definitions will be propagated beyond scope of this component
//   encapsulation: ViewEncapsulation.Native // uses shadow dom with same as Emulated effect, but may not be supported by all browsers
//   encapsulation: ViewEncapsulation.Emulated // this is the default so need not be used
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
