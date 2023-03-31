import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basics';
  imageUrl = 'https://source.unsplash.com/random';
  showImage = true;
  progress = 54;

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
