import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-recipes',
  template: `
    <p>
      recipes Works!
    </p>
      <span class="container">
      <span class="row">
      <span class="col-md-5">
      Recipe List
</span>
<span class="col-md-7">Recipe Description</span>
      
</span>
      
      </span>
  `,
  styles: []
})
export class RecipesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
