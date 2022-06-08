import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple text', 'https://c.ndtvimg.com/2020-01/pedb3bio_masala-soyabean_625x300_24_January_20.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'),
    new Recipe('A Recipe', 'This is a simple text', 'https://c.ndtvimg.com/2020-01/pedb3bio_masala-soyabean_625x300_24_January_20.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
