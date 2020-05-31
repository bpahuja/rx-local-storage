import { fromEvent } from "rxjs";
import { filter, map } from 'rxjs/operators';


export class RxStorage {

    constructor() {} 

    getObservable(key: string) {
        return fromEvent(window, 'storage').pipe(
            filter((data) => (<StorageEvent>data).key === key),
            map((data) => {
                let {newValue, oldValue} = (<StorageEvent>data);
                return {newValue, oldValue};
            })
        );
    }

    setItem(storage: Storage, key: string, value: any) {
        storage.setItem(key, value);
    }

    getItem(storage: Storage, key: string): any {
        return storage.getItem(key);
    }

}
