import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BurgerComponent {

  @ViewChild('burgerMenu', {static: false})
  burgerMenu?: ElementRef | undefined;

  onBurgerMenuOpen() {
    this.burgerMenu?.nativeElement.setAttribute('data-open', '');
  }

  onBurgerMenuClose() {
    this.burgerMenu?.nativeElement.removeAttribute('data-open');
  }
}
