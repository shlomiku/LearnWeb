import { Component, OnInit } from '@angular/core';
import {SelectRecipeService} from "../select-recipe.service";

@Component({
  moduleId: module.id,
  selector: 'app-recipe-description',
  templateUrl: 'recipe-description.component.html',
  styles: []
})
export class RecipeDescriptionComponent implements OnInit {

  constructor(private selectRecipeService: SelectRecipeService) {}

  ngOnInit() {
    this.selectRecipeService.signalSelect.subscribe(
      recipe => this.onSelectRecipe(recipe)
    );
  }
  onSelectRecipe(recipe) {};

}
