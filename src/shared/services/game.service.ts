// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Utils
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly env = environment.loquizApi;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: this.env.API_KEY,
    }),
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getList() {
    return this.httpClient.get(`${this.env.baseUrl}${this.env.gamesRoute}`, this.httpOptions);
  }

  public getById(id: string) {
    return (
      this.httpClient.get(
        `${this.env.baseUrl}${this.env.gamesRoute}${this.env.gameIdParam(id)}`,
        this.httpOptions
      )
    );
  }

  public getTeamListById(id: string) {
    return this.httpClient.get(
      `${this.env.baseUrl}${this.env.resultsIdParam(id)}`,
      this.httpOptions
    );
  }

}
