import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaItem, PizzaListService } from './pizza-list.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaListComponent {

  get pizzaList$(): Observable<PizzaItem[]> {
    return this.pizzaListService.pizzaList$ as Observable<PizzaItem[]>;
  }

  imgSrc?: string;

  setImgSrc(imgSrc: string) {
    this.imgSrc = imgSrc;
  }

  constructor(private readonly pizzaListService: PizzaListService) {}

}
