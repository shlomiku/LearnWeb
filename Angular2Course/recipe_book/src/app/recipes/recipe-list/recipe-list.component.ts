import { Component, OnInit } from '@angular/core';
import {RecipeItemComponent} from "./recipe-item.component";
import {Recipe} from "./recipe";
import {SelectRecipeService} from "../select-recipe.service";

@Component({
  moduleId: module.id,
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeSelected: SelectRecipeService) {}

  ngOnInit() {
  }

  recipe = new Recipe('Dummy', 'Dummy', 'http://www.churchplanting.com/wp-content/uploads/2012/02/dummy-300x195.jpg');

  onAddRecipe(){};

  selectRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipeSelected.signalSelect.emit(recipe);
  }
}
