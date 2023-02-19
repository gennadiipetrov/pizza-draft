import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/** js файл? */
@Injectable({
  providedIn: 'root'
})
export class PizzaListService {

  pizzaList$ = new BehaviorSubject<PizzaItem[]>([
    {
      image: '01_myasnaya.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      type: PizzaType.Myasnaya
    },
    {
      image: '02_morskay_pre.png',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      type: PizzaType.Morskay_pre
    },
    {
      image: '03_beckon.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      type: PizzaType.Beckon
    },
    {
      image: '04_kurinaya.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      type: PizzaType.Beckon
    },
    {
      image: '05_barbeku.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      type: PizzaType.Barbeku
    },
    {
      image: '06_delux.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      type: PizzaType.Delux
    },
    {
      image: '07_kurin_trio.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      type: PizzaType.Kurin_trio
    },
    {
      image: '08_sirnaya.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      type: PizzaType.Sirnaya
    }
  ]);
}

enum PizzaType {
  Myasnaya,
  Morskay_pre,
  Beckon,
  Kurinaya,
  Barbeku,
  Delux,
  Kurin_trio,
  Sirnaya,
}

export interface PizzaItem {
  image: string;
  title: string;
  description: string;
  type: PizzaType
}