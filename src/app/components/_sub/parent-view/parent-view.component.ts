import { Component, OnInit } from '@angular/core';
//import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})

//export class ParentViewComponent implements AfterViewInit {
export class ParentViewComponent implements OnInit {

  p_input_msg: string;
  p_output_msg: string;
  p_output_view_child_msg: string;
  p_share_msg: string;

  //@ViewChild(ChildViewComponent) child;

  constructor(private shareService: ShareService) {

  }

  ngOnInit() {
    this.p_input_msg = '';
    this.p_output_msg = '';

    this.shareService.currentMessage.subscribe(
      m => this.p_share_msg = m
    );
  }

  // ngAfterViewInit() {
  //   this.p_output_view_child_msg = this.child.msg;
  // }

  input() {
    this.p_input_msg += ' ' + 'p_input_msg';
  }

  get_output(output: string) {
    this.p_output_msg += ' ' + output;
  }
}
