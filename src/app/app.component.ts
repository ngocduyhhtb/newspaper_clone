import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  opened: boolean = false;
  title = 'angular-clone';

  ngOnInit(): void {
    this.opened = false;
  }
}
