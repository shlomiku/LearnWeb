import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  moduleId: module.id,
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  providers: [],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {
  }

  ngOnInit() {
  }
  // onSelectRecipe(){
  //   console.log(this.recipe.name);
  //   this.selectRecipeService.signalSelect.emit(this.recipe);
  // }
}
