import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Board } from '../../model/Board';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { DataMode } from '../../model/MyEnum';
import { BoardService } from '../../services/board.service';

// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit {

  board: Board;
  dataMode: DataMode;
  board_idx?: number;
  isPopState = false;
  data: object[];

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private locStrat: LocationStrategy,
              private boardService: BoardService)  {

    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd  && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });



  }

  ngOnInit() {
    this.board = {
      board_idx: 0,
      board_num: 0,
      board_subject: '',
      board_content: '',
      url_use_yn: '',
      ing_yn: '',
      publish_start_date: '',
      publish_end_date: '',
      push_sended_count: 0,
      use_yn: '',
      create_date: '',
      share_board_count: 0,
      comment_board_count: 0,
      board_images: null,
      board_image_count: 0
    };

    this.dataMode = DataMode.New;

    this.activeRouter.params.subscribe( params => {
      this.board_idx = params.board_idx;

      if (this.board_idx || this.board_idx > 0) {
        this.dataMode = DataMode.Update;

        this.boardService.getBoardList(this.board_idx).subscribe(
          d => {
            this.data = d.response_data;
            if (d.response_data_count > 0) {
              this.board = this.data[0] as Board;
            } else {
              this.board.board_subject = '';
              this.board.board_content = '';
            }
          }
        );

      }
    });

  }

  getDataModeStatus(): string {
    if (this.dataMode === DataMode.New) {
      return '신규';
    } else if (this.dataMode === DataMode.Update) {
      return '수정';
    }

    return '';
  }

  saveData() {

    if (!this.board.board_subject || !this.board.board_content) {
      alert('데이터를 입력하세요.');
      return;
    }

    alert('시간이 되면... 작업');

    if (this.dataMode === DataMode.New) {

    } else if (this.dataMode === DataMode.Update) {

    } else {

    }
  }

  deleteData() {
    if (this.board_idx > 0) {
      alert('삭제합니다. 실제는 삭제 안됩니다.');
      this.router.navigate(['']);
    }

    return;
  }



}
