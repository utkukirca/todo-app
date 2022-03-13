import "./styles.css";
import { useState } from "react";

const INITIAL_STATE = [
  { id: 1, title: "Burası tasklerinin listelendiği alan", completed: false },
  {
    id: 2,
    title: "Ekleme yaptığında taskler burada görünecek",
    completed: false
  },
  {
    id: 3,
    title: "Tamamlanan tasklerin üzerine tıklaman yeterli",
    completed: true
  }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");
  return (
    <div className="App">
      <h1>Your Todos</h1>
      <div className="adding-form">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="add some task"
        />
        <button
          onClick={() => {
            if (newTitle === "") {
              alert("Baslık bos bırakılamaz");
            } else {
              setList([
                ...list,
                { id: Math.random(), title: newTitle, completed: false }
              ]);
              setNewTitle("");
            }
          }}
        >
          Ekle
        </button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setList(
                list.map((el) =>
                  el.id === item.id ? { ...el, completed: !el.completed } : el
                )
              );
              console.log(list);
            }}
            className={item.completed ? "completed" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button
        onClick={() => setList(list.filter((item) => !item.completed))}
        className="clean"
      >
        Temizle
      </button>
    </div>
  );
}
