import { Component } from '@angular/core';
import {AttributDirectivesComponent} from "./attribute-directives.component.ts"

@Component({
  moduleId: module.id,
  selector: 'cad-root',
  template: `
    Hi
    <my-attribute-directives></my-attribute-directives>
`,
  directives: [AttributeDirectivesComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  title = 'app works!';
}
