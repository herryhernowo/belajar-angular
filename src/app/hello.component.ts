import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Helloxcssss {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponentx {
  @Input() name: string;
}
