import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredent: Ingredient[] = [
    new Ingredient("Apples", 500),
    new Ingredient("Oranges", 100),
    new Ingredient("Mangoes", 200),
    new Ingredient("Banana", 500),
    new Ingredient("Payaya", 800),
  ];

  constructor() {

  }
  ngOnInit(): void {

  }

}
