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

  getItems(userId, onUpdate) {
    const dataRef = ref(this.db, `${userId}/cards`);
    onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        onUpdate(value);
      }
    });
    return () => off(dataRef);
  }

  updateItem(item, userId) {
    const newPostKey = item.id;
    const updates = {};
    updates[userId + "/cards/" + newPostKey] = item;

    return update(ref(this.db), updates);
  }

  removeItem(id, userId) {
    remove(ref(this.db, `/${userId}/cards/${id}`));
  }
}
