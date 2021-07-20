import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // means css definitions will be propagated beyond scope of this component
//   encapsulation: ViewEncapsulation.Native // uses shadow dom with same as Emulated effect, but may not be supported by all browsers
//   encapsulation: ViewEncapsulation.Emulated // this is the default so need not be used
})
export class ServerElementComponent implements
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    // console.log('Text Content: ' + this.header.nativeElement.textContent) // throws error because not after view init yet
    console.log('Text Content of paragraph on init: ' + this.paragraph.nativeElement.textContent) // textContent empty because not after content init
  }

  ngDoCheck() {
    console.log('ngDoCheck called - whenever ng checks for any changes')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
    console.log('Text Content of paragraph after content init: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
    console.log('Text Content: ' + this.header.nativeElement.textContent) // works after view initialization
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }

}
