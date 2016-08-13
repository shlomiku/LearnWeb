import { Component } from '@angular/core';
import {RecipesComponent} from './recipes';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [RecipesComponent]

})
export class AppComponent {
  title = 'app works!';
}
