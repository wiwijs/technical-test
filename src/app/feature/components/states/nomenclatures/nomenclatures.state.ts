import {State, Action, StateContext, Selector, NgxsOnInit, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {GetNomenclatures} from './nomenclatures.actions';
import {initNomenclaturesFn} from "../../../../shared/functions";
import {NomenclaturesStateModel} from "./nomenclatures.model";
import {ProductService} from "../../../../shared/services/product.service";
import {map, mergeMap} from "rxjs";
import {CategoryService} from "../../../../shared/services/category.service";
import {ProductModel} from "../../../../shared/models";
import {EmitterAction, Receiver} from "@ngxs-labs/emitter";
import {ProductInterface} from "../../../../shared/interfaces";
import {append, patch} from "@ngxs/store/operators";

@State<NomenclaturesStateModel>({
  name: 'nomenclatures',
  defaults: initNomenclaturesFn()
})
@Injectable()
export class NomenclaturesState implements NgxsOnInit {
  init = initNomenclaturesFn();

  constructor(private store: Store,
              private productService: ProductService,
              private categoryService: CategoryService
  ) {
  }

  ngxsOnInit({setState, getState}: StateContext<NomenclaturesStateModel>): void {
    setState({...this.init, ...getState()});

  }

  @Selector()
  static getState(state: NomenclaturesStateModel) {
    return state;
  }

  @Action(GetNomenclatures)
  getProducts({setState, getState}: StateContext<NomenclaturesStateModel>) {
    return this.productService.getProducts().pipe(
      mergeMap((products) => {
          return this.categoryService.getCategories().pipe(
            map((categories) => {
              const response: NomenclaturesStateModel = {
                products: products.map(product => new ProductModel(product, categories)),
                categories: categories
              };
              const nomenclaturesStateModel = new NomenclaturesStateModel(response);
              setState({...getState(), ...nomenclaturesStateModel});
            })
          )
        }
      )
    )
  }

  @Receiver()
  public static createProduct({
                                setState,
                                getState
                              }: StateContext<NomenclaturesStateModel>, {payload}: EmitterAction<ProductInterface>) {
    const product = {
      name: payload.name,
      brand: payload.brand,
      creation_date: payload.creation_date,
      available: false,
      category: payload.category,
      id: Math.floor((Math.random() * 6) + 1)
    };

    setState(
      patch<NomenclaturesStateModel>({
        products: append<ProductInterface>([new ProductModel(product, getState().categories)])
      })
    );
  }
}
