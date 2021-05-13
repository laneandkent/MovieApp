import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() listSelected = new EventEmitter<string>();

  onSelect(film: string) {
      this.listSelected.emit(film);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
