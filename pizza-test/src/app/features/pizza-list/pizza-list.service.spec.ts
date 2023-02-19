/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PizzaListService } from './pizza-list.service';

describe('Service: PizzaList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaListService]
    });
  });

  it('should ...', inject([PizzaListService], (service: PizzaListService) => {
    expect(service).toBeTruthy();
  }));
});
