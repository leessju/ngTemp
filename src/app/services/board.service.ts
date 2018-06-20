import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonBaseEx } from '../model/JsonBase';
import { Observable } from 'rxjs';

//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  base_url = 'http://10.211.55.13/s/';
  service_name = 'Board';
  board_type_idx = 1;
  page_rows = 10;

  constructor(private http: HttpClient) {

  }

  getBoardLists(page: number): Observable<JsonBaseEx> {
    //http://10.211.55.13/s/Board/GetBoardLists?board_type_idx=1&page=2&page_rows=5
    return this.http.get<JsonBaseEx>(`${this.base_url}${this.service_name}/GetBoardLists?board_type_idx=${this.board_type_idx}&page=${page}&page_rows=${this.page_rows}`, httpOptions);
  }

}

