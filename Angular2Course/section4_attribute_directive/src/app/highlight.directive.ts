/**
 * Created by user on 6/26/2016.
 */

import {Directive} from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighLightDirective{
  private _defaultColor = 'green';
}
