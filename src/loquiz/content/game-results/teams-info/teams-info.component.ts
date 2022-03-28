// Angular
import { Component, Input, OnInit} from '@angular/core';

// Interfaces
import { ITeam } from 'src/shared/interfaces/team.interface';

@Component({
  selector: 'loquiz-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.scss']
})
export class TeamsInfoComponent implements OnInit {

  @Input() teamList: ITeam[];

  public displayedColumns = ['id', 'name', 'playTime', 'odometer', 'totalScore'];

  constructor() { }

  ngOnInit(): void {
  }

}
