/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SelectRecipeService } from './select-recipe.service';

describe('SelectRecipe Service', () => {
  beforeEachProviders(() => [SelectRecipeService]);

  it('should ...',
      inject([SelectRecipeService], (service: SelectRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
