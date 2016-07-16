import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() {}

  ngOnInit() {
  }

}
