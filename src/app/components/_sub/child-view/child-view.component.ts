import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  @Input() c_input_msg: string;
  @Output() c_output_msg = new EventEmitter<string>();
  //msg = 'view child msg';
  c_share_msg: string;

  constructor(private shareService: ShareService) {}

  ngOnInit() {
    this.shareService.currentMessage.subscribe(
      m => this.c_share_msg = m
    );
  }

  output() {
    this.c_output_msg.emit('c_output_msg');
  }

}
