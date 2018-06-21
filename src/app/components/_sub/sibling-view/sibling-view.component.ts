import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'app-sibling-view',
  templateUrl: './sibling-view.component.html',
  styleUrls: ['./sibling-view.component.css']
})
export class SiblingViewComponent implements OnInit {

  s_share_msg: string;

  constructor(private shareService: ShareService) { }

  ngOnInit() {
    this.shareService.currentMessage.subscribe(
      m => this.s_share_msg = m
    );
  }

  share() {
    this.shareService.changeMessage('sharing!!!!');
  }
}
