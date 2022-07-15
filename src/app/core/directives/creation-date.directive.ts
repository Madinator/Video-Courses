import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreationDate]',
  standalone: true,
})
export class CreationDateDirective implements OnInit {
  @Input() creationDate: Date;
  private today = new Date();
  private day: number = 86400000;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if(this.creationDate.toDateString() === this.today.toDateString()) {
      this.el.nativeElement.style.border = '1px solid green';
      return;
    };
    if((this.today.getTime()- this.day * 14) >= this.creationDate.getTime()) {
      this.el.nativeElement.style.border = '1px solid blue';
      return;
    }
  }

}


