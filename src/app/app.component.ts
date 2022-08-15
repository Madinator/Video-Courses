import { LoaderService } from './core/services/loader.service';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'video-course';
  public showSpinner: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private ref: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.loaderService.httpProgress()
    .subscribe((status: boolean) => {
      this.showSpinner = status;
      this.ref.detectChanges()
    })
  }
  
}
