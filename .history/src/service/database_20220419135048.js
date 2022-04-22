import {
  getDatabase,
  ref,
  update,
  remove,
  onValue,
  off,
} from "firebase/database";

export default class DatabaseSerivice {
  constructor() {
    this.db = getDatabase();
  }

  getItems(userId, onUpdate, today = makeDate()) {
    const dataRef = ref(this.db, `${userId}/items`);
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        onUpdate(value);
      }
    });
    return () => off(dataRef);
  }

  updateItem(item, userId) {
    const today = makeDate();
    const newPostKey = item.id;
    const updates = {};
    updates[userId + today + "/items/" + newPostKey] = item;

    return update(ref(this.db), updates);
  }

  removeItem(id, userId) {
    remove(ref(this.db, `/${userId}/items/${id}`));
  }
}

function makeDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const day = `/${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;

  return day;
}
