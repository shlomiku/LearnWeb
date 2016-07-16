import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe-list";

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-description',
  templateUrl: 'recipe-description.component.html'
})
export class RecipeDescriptionComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {
  }

}
