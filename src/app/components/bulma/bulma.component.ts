import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-bulma',
  templateUrl: './bulma.component.html',
  styleUrls: ['./bulma.component.css']
})

export class BulmaComponent implements OnInit {
  dataBoard: object;

  constructor(private board: BoardService) {

  }

  ngOnInit() {
    this.getBoardData(1);
  }

  getBoardData(page: number) {
    this.board.getBoardLists(page).subscribe(
      d => {
          this.dataBoard = d.response_data;
    });
  }
}
