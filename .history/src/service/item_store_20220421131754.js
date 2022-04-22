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
    dates.forEach((date) => {
      this.database.getItems(
        userId,
        (value) => {
          this.items = { ...this.items, ...value };
        },
        date
      );
    });
  }
}

function setDateType(date, type) {
  const today = new Date();
  switch (type) {
    case "Today":
      return today;
    case "Yesterday":
      return new Date(today.setDate(today.getDate() - 1));
    case "Custom":
      return date;
    case "This Week":
      const week = [];
      for (let i = 0; i < 7; i++) {
        if (i === 0) {
          week.push(today);
        }
        const day = new Date(today.setDate(today.getDate() - 1));
        week.push(day);
      }
      console.log(week);
      return week;
    default:
      throw new Error("Not Valid Type");
  }
}
