/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RecipeItemComponent } from './recipe-item.component';
import {SelectRecipeService} from "../select-recipe.service";

describe('Component: RecipeItem', () => {
  it('should create an instance', () => {
    let component = new RecipeItemComponent(new SelectRecipeService());
    expect(component).toBeTruthy();
  });
});
