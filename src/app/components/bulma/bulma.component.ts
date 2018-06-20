import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Globals } from '../../model/Global';

//import { JsonBaseOption } from '../../model/JsonBase';
//import { RangePipe} from '../../model/DataUtility';

@Component({
  selector: 'app-bulma',
  templateUrl: './bulma.component.html',
  styleUrls: ['./bulma.component.css'],
  providers: [Globals]
})

export class BulmaComponent implements OnInit {
  dataBoard: object;
  //dataOption: JsonBaseOption;
  pageCount: number;
  currentPageNum: number;
  selectedNum: number;
  title: string;
  subject: string;

  constructor(private board: BoardService) {
    if (Globals.selectedRow != null) {
      this.selectedNum = Globals.selectedRow;
    }
  }

  ngOnInit() {
    this.title = '이벤트 히어로 영역';
    this.subject = '이벤트 제목 영역';

    if (Globals.currentPageNum != null) {
      this.currentPageNum = Globals.currentPageNum;
    } else {
      this.currentPageNum = 1;
    }

    this.getBoardData(this.currentPageNum);
  }

  selectedRow(rowNumber: number) {
    this.selectedNum = rowNumber;
    Globals.selectedRow = rowNumber;
  }

  getBoardData(page: number) {
    this.currentPageNum = page;
    Globals.currentPageNum = page;
    this.board.getBoardLists(page).subscribe(
      d => {
          this.dataBoard = d.response_data;
          this.pageCount = d.response_option.page_count;
    });

  }

  counter(i: number): Array<number> {
    return new Array(i);
  }

  mathMin(a: number, b: number): number  {
    if (a > b)
      return b;

    return a;
  }

}
