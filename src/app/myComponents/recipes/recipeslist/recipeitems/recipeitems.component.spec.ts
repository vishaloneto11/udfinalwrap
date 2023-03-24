import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeitemsComponent } from './recipeitems.component';

describe('RecipeitemsComponent', () => {
  let component: RecipeitemsComponent;
  let fixture: ComponentFixture<RecipeitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
