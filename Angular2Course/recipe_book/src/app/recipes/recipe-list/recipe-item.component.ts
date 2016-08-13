import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "./recipe";
import {SelectRecipeService} from "../select-recipe.service";

@Component({
  moduleId: module.id,
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  providers: [SelectRecipeService],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private  selectRecipeService: SelectRecipeService) {
  }

  ngOnInit() {
  }
  onSelectRecipe(recipe){
    this.selectRecipeService.signalSelect.emit(recipe);
  }
}
