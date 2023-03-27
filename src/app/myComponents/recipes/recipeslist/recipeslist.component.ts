import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';


// <==============================>

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})

// <================================>
export class RecipeslistComponent implements OnInit {
  myfirstRecipe: Recipe[] = [
    new Recipe("myfirstdish", "my first model dish that we created", "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png"),
    new Recipe("myfirstdish", "my first model dish that we created", "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png"),
    new Recipe("myfirstdish", "my first model dish that we created", "http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png")
  ];



  // <-------------------------------->
  constructor() {

  }
  // <-------------------------------->
  ngOnInit(): void {

  }

}
