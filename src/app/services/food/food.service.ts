import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      {
        name: 'All',
        count: this.getAll().length
      },
      {
        name: 'salamon',
        count: this.getAll().filter(food => food.tags?.includes('salamon')).length
      },
      {
        name: 'pizza',
        count: this.getAll().filter(food => food.tags?.includes('pizza')).length
      },
      {
        name: 'france',
        count: this.getAll().filter(food => food.tags?.includes('france')).length
      },
      {
        name: 'turkey',
        count: this.getAll().filter(food => food.tags?.includes('turkey')).length
      },
      {
        name: 'china',
        count: this.getAll().filter(food => food.tags?.includes('china')).length
      },
      {
        name: 'india',
        count: this.getAll().filter(food => food.tags?.includes('india')).length
      },
      {
        name: 'usa',
        count: this.getAll().filter(food => food.tags?.includes('usa')).length
      }
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Salamon',
        price: 12.99,
        cookTime: '15-20',
        favorite: false,
        star: [1, 2, 3],
        origins: ['Italy'],
        tags: ['salamon', 'italy'],
        imageUrl: '/assets/food-1.jpg'
      },
      {
        id: 2,
        name: 'Crossiant',
        price: 3,
        cookTime: '1-5',
        favorite: false,
        star: [1, 2, 3, 4, 5],
        origins: ['France'],
        tags: ['crossiant', 'france'],
        imageUrl: '/assets/food-2.jpg'
      },
      {
        id: 3,
        name: ' Noodles',
        price: 10,
        cookTime: '10-15',
        favorite: false,
        star: [1, 2, 3, 4],
        origins: ['China'],
        tags: ['noodles', 'china'],
        imageUrl: '/assets/food-3.jpg'
      },
      {
        id: 4,
        name: 'Curry',
        price: 16,
        cookTime: '40-50',
        favorite: false,
        star: [1, 2, 3, 4],
        origins: ['India'],
        tags: ['curry', 'india'],
        imageUrl: '/assets/food-4.jpg'
      },
      {
        id: 5,
        name: 'SOME-TURKISH-DISH',
        price: 12,
        cookTime: '20-30',
        favorite: false,
        star: [1, 2, 3],
        origins: ['Turkey'],
        tags: ['turkish', 'turkey'],
        imageUrl: '/assets/food-5.jpg'
      },
      {
        id: 6,
        name: 'Burger',
        price: 15,
        cookTime: '10-15',
        favorite: false,
        star: [1, 2, 3],
        origins: ['USA'],
        tags: ['burger', 'usa'],
        imageUrl: '/assets/food-6.jpg'
      },
    ]
  }

}
