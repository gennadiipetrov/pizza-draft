import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.less']
})
export class PizzaOrderComponent {
  pizzaOrderForm: FormGroup = new FormGroup({
    "name": new FormControl("", Validators.required),
    "address": new FormControl("", Validators.required),
    "phone": new FormControl("", [Validators.required, Validators.pattern("[0-9]{10}")])
  });

  order() {
    console.log(this.pizzaOrderForm)
  }
}
