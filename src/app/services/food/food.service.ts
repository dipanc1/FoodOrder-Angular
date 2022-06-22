import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

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
