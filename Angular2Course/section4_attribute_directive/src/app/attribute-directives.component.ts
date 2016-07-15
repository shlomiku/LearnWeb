/**
 * Created by user on 6/26/2016.
 */

import {Component} from '@angular/core';
import {HighLightDirective} from "./highlight.directive";


@Component({
  selector: 'my-attribute-directives',
  template: `
    <div myHighlight>
        Highlight Me
    </div>
`,
  directives: [HighLightDirective]
})
export class AttributeDirectivesComponent{

}
