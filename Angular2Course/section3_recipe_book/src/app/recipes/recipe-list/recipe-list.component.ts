import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from "./recipe";
import {RecipeItemComponent} from "./recipe-item.component"

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.churchplanting.com/wp-content/uploads/2012/02/dummy-300x195.jpg')
  constructor() {}

  ngOnInit() {
  }
  onSelectRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
