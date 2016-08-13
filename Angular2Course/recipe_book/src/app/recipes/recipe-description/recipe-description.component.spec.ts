/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RecipeDescriptionComponent } from './recipe-description.component';
import {SelectRecipeService} from "../select-recipe.service";

describe('Component: RecipeDescription', () => {
  it('should create an instance', () => {

    let component = new RecipeDescriptionComponent(new SelectRecipeService());
    expect(component).toBeTruthy();
  });
});
