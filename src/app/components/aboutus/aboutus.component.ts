import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Board } from '../../model/Board';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  board: Board;

  constructor() {
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
  }

  ngOnInit() {
  }

  newData() {
    alert('newData');
  }

  saveData() {
    //alert('saveData');

    if (!this.board.board_subject || !this.board.board_content) {
      alert('데이터를 입력하세요.');
    } else {
      alert('성공');
    }
  }

  deleteData() {
    alert('deleteData');
  }

}
