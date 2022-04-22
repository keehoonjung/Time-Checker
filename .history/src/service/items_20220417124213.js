import { action, makeObservable, observable } from "mobx";

export class Items {
  items = {
    1: {
      id: 1,
      title: "study",
      time: 0,
    },
    2: {
      id: 2,
      title: "running",
      time: 12,
    },
  };
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
