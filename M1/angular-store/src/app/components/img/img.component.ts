import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() imageTitle: string = ''
  @Output() imageLoaded = new EventEmitter<{ imageUrl: string, imageAlt: string, imageTitle: string }>()
  imageUrl = 'https://source.unsplash.com/random/400x400'
  imageAlt = 'Random Image'
  defaultTitle = 'Insert a title'

  imgLoader() {
    const image = {
      imageUrl: this.imageUrl,
      imageAlt: this.imageAlt,
      imageTitle: this.imageTitle || this.defaultTitle
    }
    this.imageLoaded.emit(image)
  }
}
