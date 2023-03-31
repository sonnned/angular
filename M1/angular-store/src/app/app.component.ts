import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageTitle: string = ''
  products: Product[] = [
    {
      id: '1',
      title: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random/200x200'
    },
    {
      id: '2',
      title: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random/200x200'
    },
    {
      id: '3',
      title: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random/200x200'
    },
    {
      id: '4',
      title: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random/200x200'
    },
  ];

  onImageLoaded(event: { imageUrl: string, imageAlt: string, imageTitle: string }) {
    console.log(['Image Loaded', event])
  }
}
