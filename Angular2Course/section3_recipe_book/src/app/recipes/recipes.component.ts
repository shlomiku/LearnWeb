import { Component, OnInit } from '@angular/core';
import {RecipeListComponent, RecipeDescriptionComponent, Recipe} from './recipe-list';

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent, RecipeDescriptionComponent]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {
  }

}
