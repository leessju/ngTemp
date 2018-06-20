import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  static selectedRow?: number;
  static currentPageNum?: number;

  static counter(i: number): Array<number> {
    return new Array(i);
  }
}
