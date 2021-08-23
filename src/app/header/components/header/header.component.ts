import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sideNavOpened!: boolean;
  @Output() sideNavOpenedChanged = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.sideNavOpened = false;
  }

  onToggleSideNav = (sideNavToggle: boolean): void => {
    this.sideNavOpened = sideNavToggle;
    this.sideNavOpenedChanged.emit(this.sideNavOpened);
  };
}
