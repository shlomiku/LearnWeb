import { Component, OnInit } from '@angular/core';
import {RecipeListComponent, Recipe} from './recipe-list';
import {RecipeDescriptionComponent} from './recipe-description';

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
