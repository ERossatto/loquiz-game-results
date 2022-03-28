// Angular
import { Component, Input, OnInit} from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';

// Interfaces
import { ITeam } from 'src/shared/interfaces/team.interface';

// Utils
import { texts } from '@texts';

@Component({
  selector: 'loquiz-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.scss']
})
export class TeamsInfoComponent implements OnInit {

  public texts = texts.gameResults.teamsInfo;

  @Input() teamList: ITeam[];

  public displayedColumns = ['id', 'name', 'playTime', 'odometer', 'totalScore'];

  constructor(
    public ls: LanguageService,
  ) { }

  ngOnInit(): void {
  }

}
