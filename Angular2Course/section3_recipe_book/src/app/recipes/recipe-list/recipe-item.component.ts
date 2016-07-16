import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe"

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor() {}

  ngOnInit() {
  }

}
