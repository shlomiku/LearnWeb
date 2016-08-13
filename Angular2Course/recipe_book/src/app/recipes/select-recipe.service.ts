import {EventEmitter} from '@angular/core';
import {Recipe} from "./recipe-list/recipe";
export class SelectRecipeService {
  signalSelect = new EventEmitter<Recipe>();
  constructor() {};
}
