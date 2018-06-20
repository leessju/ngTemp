import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class DataUtility {
  static counter(i: number): Array<number> {
      return new Array(i);
  }

  static mathMin(a: number, b: number): number  {
    if (a > b)
      return b;

    return a;
  }
}

@Pipe({
  name: 'range',
  pure: false
})

export class RangePipe implements PipeTransform {
  transform(items: any[], quantity: number): any {
    items.length = 0;
    for (let i = 0; i < quantity; i++) {
      items.push(i);
    }
    return items;
  }
}



// import {Pipe, PipeTransform} from '@angular/core';
//
// @Pipe({name: 'for'})
// export class ForClass implements PipeTransform {
//   transform(value, args: string[]): any {
//     const res = [];
//     for (let i = 0; i < value; i++) {
//       res.push(i);
//     }
//     return res;
//   }
// }







