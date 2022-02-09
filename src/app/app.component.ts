import {
  Component,
  AfterContentInit,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}
  title = 'Trello';
  ngAfterViewInit(): void {
    let loader = this.renderer.selectRootElement('#preloader');
    this.renderer.setStyle(loader, 'display', 'none');
  }
}
