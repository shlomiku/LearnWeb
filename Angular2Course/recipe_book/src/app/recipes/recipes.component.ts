import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDescriptionComponent} from "./recipe-description/recipe-description.component";

@Component({
  moduleId: module.id,
  selector: 'app-recipes',
  template: `
    <p>
      recipes Works!
    </p>
      <span class="container">
      <span class="row">
      <span class="col-md-5">
      <app-recipe-list></app-recipe-list>
</span>
<span class="col-md-7">
<app-recipe-description></app-recipe-description>
</span>
      
</span>
      
      </span>
  `,
  directives: [RecipeListComponent, RecipeDescriptionComponent]
})
export class RecipesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
