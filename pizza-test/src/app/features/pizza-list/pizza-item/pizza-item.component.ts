import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PizzaItem } from '../pizza-list.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None 
})
export class PizzaItemComponent {

  @Input()
  item?: PizzaItem;

  @Input()
  indx?: number;

  @Output()
  imgSrc = new EventEmitter<string>();

  getImgSrc(imgName?: string) {
    return `../../../../assets/pizza/${imgName}`;
  }

  onClick(event: { target: any; srcElement: any; currentTarget: any; }) {
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc.emit(srcAttr.nodeValue);
  }
}
