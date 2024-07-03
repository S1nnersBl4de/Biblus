import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string | undefined, limit: number = 20, completeWords: boolean = false, ellipsis: string = ''): string {
    if (!value) return '';

    
    const plainText = value.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, ' ');

    return plainText.length > limit ? plainText.substr(0, limit) + ellipsis : plainText;
  }

}


