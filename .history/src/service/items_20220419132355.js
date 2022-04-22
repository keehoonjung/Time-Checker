import { action, makeObservable, observable } from "mobx";

export class Items {
  items = {
    1: {
      id: 1,
      title: "study",
      time: 240,
    },
    2: {
      id: 2,
      title: "running",
      time: 120,
    },
  };
  pendingRequests = 0;

  constructor(database) {
    this.database = database;
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

// ({items}) => {
//     const [timerStart, setTimerStart] = useState(false);
//     const [initailTime, setInitialTime] = useState(0);
//     const [title, setTitle] = useState(undefined);
//     const [id, setId] = useState(undefined);
//     const [items, setItems] = useState({
//       1: {
//         id: 1,
//         title: "study",
//         time: 0,
//       },
//       2: {
//         id: 2,
//         title: "running",
//         time: 12,
//       },
//     });

//     const addItem = (item) => {
//       const newItems = { ...items };
//       const key = item.id;
//       newItems[key] = item;
//       setItems(newItems);
//       setTimerStart(false);
//     };

//     const onStartTimer = (name, time = 0, id = undefined) => {
//       setTitle(name);
//       setInitialTime(time);
//       setId(id);
//       setTimerStart(true);
//     };

//     return (
//       <div className={styles.container}>
//         <Header title={"Timer"} />
//         <TodoList items={items} onStartTimer={onStartTimer} />
//         {timerStart ? (
//           <Timer
//             onAddItem={addItem}
//             title={title}
//             initailTime={initailTime}
//             id={id}
//           />
//         ) : (
//           <Input onStartTimer={onStartTimer} />
//         )}
//         <Navbar />
//       </div>
//     );
