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
    const offFunction = this.database.getItems(
      userId,
      (value) => {
        this.items = value;
      },
      date
    );

    return offFunction;
  }

  getAllItems(userId, dates) {
    console.log(dates);
    dates.forEach((date) => {
      console.log(date);
      const offFunction = this.database.getItems(
        userId,
        (value) => {
          console.log(value);
          console.log(date);
          this.items = { ...this.items, value };
        },
        date
      );
    });
  }
}
