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

describe('Component: RecipeDescription', () => {
  it('should create an instance', () => {
    let component = new RecipeDescriptionComponent();
    expect(component).toBeTruthy();
  });
});
