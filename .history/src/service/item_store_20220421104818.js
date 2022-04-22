import { action, makeObservable, observable } from "mobx";

export class Items {
  items = {};
  pendingRequests = 0;

  constructor(database) {
    this.database = database;
    makeObservable(this, {
      items: observable,
      pendingRequests: observable,
      addItem: action,
    });
  }

  addItem(item, userId) {
    const key = item.id;
    this.items[key] = item;
    this.database.updateItem(item, userId);
  }

  getItems(userId, date = undefined) {
    console.log(date.getDate());
    const offFunction = this.database.getItems(
      userId,
      (value) => {
        this.items = value;
      },
      date
    );

    return offFunction;
  }
}
