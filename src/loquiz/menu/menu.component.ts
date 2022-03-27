// Angular
import { Component, OnInit } from '@angular/core';

// Utils
import { Toggle } from 'src/shared/material/utils/switches';

@Component({
  selector: 'loquiz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public toggleMenu = new Toggle();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleClick( event: boolean ): void {
    (event)
    ? this.toggleMenu.show()
    : this.toggleMenu.hide();
  }

}
