import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() name: string = '';
  @Input() imgSrc: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
