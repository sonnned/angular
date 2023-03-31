import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageTitle: string = ''

  onImageLoaded(event: { imageUrl: string, imageAlt: string, imageTitle: string }) {
    console.log(['Image Loaded', event])
  }
}
