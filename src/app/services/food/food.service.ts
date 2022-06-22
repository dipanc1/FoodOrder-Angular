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
        price: 10,
        cookTime: '30',
        favorite: false,
        star: 4.0,
        origins: ['Italy'],
        tags: ['salamon', 'italy'],
        imageUrl: '/assets/food-1.jpg'
      },
      {
        id: 2,
        name: 'Crossiant',
        price: 40,
        cookTime: '10',
        favorite: false,
        star: 4.0,
        origins: ['France'],
        tags: ['crossiant', 'france'],
        imageUrl: '/assets/food-2.jpg'
      },
      {
        id: 3,
        name: ' Noodles',
        price: 20,
        cookTime: '302',
        favorite: false,
        star: 4.0,
        origins: ['China'],
        tags: ['noodles', 'china'],
        imageUrl: '/assets/food-3.jpg'
      },
      {
        id: 4,
        name: 'Curry',
        price: 360,
        cookTime: '320',
        favorite: false,
        star: 4.0,
        origins: ['India'],
        tags: ['curry', 'india'],
        imageUrl: '/assets/food-4.jpg'
      },
      {
        id: 5,
        name: 'SOME-TURKISH-DISH',
        price: 340,
        cookTime: '130',
        favorite: false,
        star: 4.9,
        origins: ['Turkey'],
        tags: ['turkish', 'turkey'],
        imageUrl: '/assets/food-5.jpg'
      },
      {
        id: 6,
        name: 'Burger',
        price: 340,
        cookTime: '330',
        favorite: false,
        star: 1.0,
        origins: ['USA'],
        tags: ['burger', 'usa'],
        imageUrl: '/assets/food-6.jpg'
      },
    ]
  }

}
