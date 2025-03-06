import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Try Antler';

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }
}
