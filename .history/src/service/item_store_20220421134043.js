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

  getItems(userId, type = "Today", date) {
    this.items = {};
    const dates = setDateType(date, type);
    const offFunction = dates.map((date) => {
      return this.database.getItems(
        userId,
        (value) => {
          this.items = { ...this.items, ...value };
        },
        date
      );
    });

    return offFunction[0];
  }
}

function setDateType(date, type) {
  const today = new Date();
  const dates = [];
  switch (type) {
    case "Today":
      dates.push(today);
      return dates;
    case "Yesterday":
      const yesterday = new Date(today.setDate(today.getDate() - 1));
      dates.push(yesterday);
      return dates;
    case "Custom":
      dates.push(date);
      return dates;
    case "This Week":
      for (let i = 0; i < 7; i++) {
        if (i === 0) {
          dates.push(new Date());
        } else {
          const day = new Date(today.setDate(today.getDate() - 1));
          dates.push(day);
        }
      }
      console.log(dates);
      return dates;
    default:
      throw new Error("Not Valid Type");
  }
}
