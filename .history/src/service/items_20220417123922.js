import { action, makeObservable, observable } from "mobx";

class Items {
  items = {};
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      items: observable,
      pendingRequests: observable,
      addItem: action,
    });
  }

  addItem(item) {
    const key = item.id;
    this.items[key] = item;
  }
}
