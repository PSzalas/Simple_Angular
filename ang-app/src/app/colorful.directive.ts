import {Directive, Input, HostListener, ElementRef, ViewChild, EventEmitter, Output  } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {
  @Input() isDone:boolean | undefined;

  constructor(private el?: ElementRef) { 
    if(el) el.nativeElement as HTMLInputElement;
  }

  @HostListener('mouseover') onMouseOver() {
    if (this.el) {
      this.el.nativeElement.style.fontWeight = "bold";
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.el) {
      this.el.nativeElement.style.fontWeight = "normal";
    }
  }



  ngDoCheck() {
    const currentTimestamp = Date.now();
let backgroundColor = 'white';

if (this.el) {
  const deadlineTimestamp = (this.el.nativeElement as HTMLInputElement).valueAsNumber;
  const sevenDaysBeforeDeadline = deadlineTimestamp - (400 * 60 * 60 * 60 * 7);

  if (currentTimestamp > deadlineTimestamp) {
    backgroundColor = 'red';
  } else if (currentTimestamp > sevenDaysBeforeDeadline) {
    backgroundColor = 'yellow';
  } else if (currentTimestamp < deadlineTimestamp){
    backgroundColor = 'green';
  }

  if (this.isDone && backgroundColor === 'red') {
    backgroundColor = 'white';
  }

  (this.el.nativeElement as HTMLInputElement).style.backgroundColor = backgroundColor;
}
  }
}
