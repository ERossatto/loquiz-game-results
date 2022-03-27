// Angular
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';

// Helpers
import { texts } from '@texts';

@Component({
  selector: 'loquiz-menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.scss']
})
export class MenuDashComponent implements OnInit {

  @Input() toggle: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  public texts = texts.menuDash;

  constructor(
    public ls: LanguageService,
  ) { }

  ngOnInit(): void {
  }

  private _collapseMenu(): void {
    this.toggle = false;
    this.onClose.emit();
  }

  public handleOption(): void {
    this._collapseMenu();
  }

}
