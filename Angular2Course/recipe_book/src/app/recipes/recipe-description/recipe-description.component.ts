import { Component, OnInit } from '@angular/core';
import {SelectRecipeService} from "../select-recipe.service";
import {Recipe} from "../recipe-list/recipe";

@Component({
  moduleId: module.id,
  selector: 'app-recipe-description',
  templateUrl: 'recipe-description.component.html',
})
export class RecipeDescriptionComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private selectRecipeService: SelectRecipeService) {}

  ngOnInit() {
    this.selectRecipeService.signalSelect.subscribe(
      recipe => this.onSelectRecipe(recipe)
    );
  }
  onSelectRecipe(recipe) {
    console.log(recipe);
    this.selectedRecipe = recipe;
  };

}
