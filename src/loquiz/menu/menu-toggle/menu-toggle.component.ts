// Angular
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'loquiz-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent implements OnInit {

  @Input() toggle: boolean = false;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onMenu(): void {
    this.toggle = !this.toggle;
    this.onClick.emit(this.toggle);
  }

}
