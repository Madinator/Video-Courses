import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit {

  constructor(private authService: AuthService,
              private renderer:Renderer2,
              private el: ElementRef) { }

  ngOnInit(): void {
    if(this.authService.IsAuthenticated()) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }
}
