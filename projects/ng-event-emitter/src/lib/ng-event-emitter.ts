import {Subject, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';


export class NgEventEmitter<C extends { [key: string]: any }> extends Subject<{ evName: keyof C, payload: any }> {

  constructor() {
    super();
  }

  on<K extends keyof C>(evName: K, payloadFn: (ev: C[K]) => void): Subscription {

    const o$ = super.asObservable();

    const subc = o$.pipe(filter((p) => (p.evName === evName) || (evName === '*')))
      .subscribe(ev => {
        payloadFn(ev.payload);
      });

    return subc;
  }


  public emit<K extends keyof C>(evName: K, payload: C[K]) {
    super.next({evName, payload});
  }

}
