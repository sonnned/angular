import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() imageTitle: string = ''
  @Output() imageLoaded = new EventEmitter<{ imageUrl: string, imageAlt: string, imageTitle: string }>()
  imageUrl = 'https://source.unsplash.com/random/400x400'
  imageAlt = 'Random Image'
  defaultTitle = 'Insert a title'

  constructor() {
    //before the component is rendered
    //do not run async code here
    console.log('Image Component')
    this.imageTitle = 'Image Title'
  }

  ngOnChanges() {
    //before the component is rendered
    //waits for changes in the input properties
    //runs each time the input properties change
    console.log('Image Component - ngOnChanges')
  }

  ngOnInit() {
    //before the component is rendered
    //runs only once
    //we can run async code here
    console.log('Image Component - ngOnInit')
  }

  ngAfterViewInit() {
    //after the component is rendered and while the component is rendering
    //runs when the child components are rendered
    console.log('Image Component - ngAfterViewInit')
  }

  ngOnDestroy(): void {
    //when the component is destroyed
    console.log('Image Component - ngOnDestroy')
  }

  imgLoader() {
    const image = {
      imageUrl: this.imageUrl,
      imageAlt: this.imageAlt,
      imageTitle: this.imageTitle || this.defaultTitle
    }
    this.imageLoaded.emit(image)
  }
}
