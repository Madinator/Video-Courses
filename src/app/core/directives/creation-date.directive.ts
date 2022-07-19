import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreationDate]',
})
export class CreationDateDirective implements OnInit {
  @Input() creationDate: Date;
  private today = new Date();
  private day: number = 86400000;

  constructor(private renderer:Renderer2,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    if(this.creationDate.toDateString() === this.today.toDateString()) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
      return;
    };
    if((this.today.getTime()- this.day * 14) >= this.creationDate.getTime()) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid blue');
      return;
    }
  }

}


