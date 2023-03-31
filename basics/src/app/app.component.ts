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
  currencyValue = 2345;
  inputValue = '';
  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚']
  emoji: string = '';

  toggleImage() {
    this.showImage = !this.showImage;
  }

  increaseCurrencyValue() {
    this.currencyValue++;
  }

  decreaseCurrencyValue() {
    this.currencyValue--;
  }

  // Event Binding
  onKeyUp(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.inputValue = element.value;
  }

  addEmoji() {
    this.emojis.push(this.emoji);
    this.emoji = '';
  }

  removeEmoji(index: number) {
    this.emojis.splice(index, 1);
  }
}
