import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  public routerPath: any = [{
    name: '',
    route: '',
  }];
  constructor(private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.routerPath = this.router.url.split('/').filter(path => path !== "")
        .map((curr, i, array) => ({
          name: curr, 
          route: array[i] = array[i - 1] ? `${array[i-1]}/${array[1]}` : array[i] 
        })); 
        console.log(this.routerPath)
      }
    })
  }

  ngOnInit(): void {
  }
}
