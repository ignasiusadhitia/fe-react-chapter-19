# Penjelasan

## Struktur Projek

```bash
src/
│
├── components/
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│
└── App.js
```

## 1. Komponen TodoList (src/components/TodoList.jsx):

Komponen ini adalah class component yang berfungsi sebagai daftar utama untuk mencatat dan mengelola todo list (daftar tugas). Beberapa fitur utama yang ada di sini adalah menambahkan, menyelesaikan (complete), dan menghapus tugas.

### State Initialization:

- Di dalam `constructor`, state awal diinisialisasi:

```javascript
this.state = {
  todos: [], // Array kosong untuk menyimpan daftar todo.
  input: "", // String kosong untuk menyimpan input dari pengguna.
};
this.todoId = 0; // Variabel counter untuk memberikan id unik pada setiap todo.
```

### Methods (Functions):

- `handleInputChange`: Meng-handle perubahan teks input yang diisi pengguna. Setiap perubahan input akan disimpan dalam `state.input`.

```javascript
handleInputChange = (e) => {
  this.setState({ input: e.target.value });
};
```

- `addTodo`: Menambahkan tugas baru ke dalam daftar `todos`. Fungsi ini akan dipanggil ketika pengguna mengirim form.

```javascript
addTodo = (e) => {
  e.preventDefault(); // Mencegah form melakukan reload halaman.
  const newTodo = {
    id: this.todoId++, // Setiap todo mendapatkan id unik.
    text: this.state.input, // Mengambil teks dari input.
    completed: false, // Status tugas baru belum selesai.
  };
  this.setState((prevState) => ({
    todos: [...prevState.todos, newTodo], // Menambah todo baru ke array todos.
    input: "", // Mengosongkan input setelah menambahkan todo.
  }));
};
```

- `toggleComplete`: Mengubah status `completed` dari tugas tertentu ketika tombol Complete diklik. Fungsi ini bekerja dengan menggunakan `id` tugas untuk mengubah statusnya.`

```javascript
toggleComplete = (id) => {
  this.setState((prevState) => ({
    todos: prevState.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  }));
};
```

- `removeTodo`: Menghapus tugas dari daftar todos berdasarkan `id`. Fungsi ini bekerja dengan mem-filter tugas yang tidak sesuai dengan `id`yang diberikan.

```javascript
removeTodo = (id) => {
  this.setState((prevState) => ({
    todos: prevState.todos.filter((todo) => todo.id !== id),
  }));
};
```

### Rendering:

- Menggunakan form untuk memasukkan tugas baru dengan input teks.
- Menampilkan daftar tugas jika ada, atau menampilkan pesan jika daftar kosong.

```javascript
<form className="input-group" onSubmit={this.addTodo}>
  <input
    type="text"
    value={this.state.input}
    onChange={this.handleInputChange}
    required
    placeholder="Enter a task"
    className="form-control"
  />
  <button className="btn btn-primary" type="submit">
    Add
  </button>
</form>
```

## 2. Komponen TodoItem (src/components/TodoItem.jsx):

Komponen ini adalah fungsi yang digunakan untuk menampilkan setiap tugas secara individual. Props yang dikirim dari komponen `TodoList` adalah `todo`, `toggleComplete`, dan `removeTodo`.

- **Display Todo**: Menampilkan tugas dengan id dan teksnya. Jika tugas sudah selesai, teks akan diberi garis coretan (menggunakan `style`).

```javascript
style={{ textDecoration: todo.completed ? "line-through" : "none" }}
```

- **Complete & Remove Button**: Dua tombol yang diberikan untuk setiap tugas, yaitu:
- Tombol Complete untuk menandai tugas sebagai selesai atau belum selesai, memanggil `toggleComplete`.
- Tombol Remove untuk menghapus tugas, memanggil `removeTodo`.

### Contoh tampilan:

```javascript
<li className="list-group-item">
  <p>
    <strong>{todo.id}.</strong> {todo.text}
  </p>
  <button onClick={() => toggleComplete(todo.id)}>Complete</button>
  <button onClick={() => removeTodo(todo.id)}>Remove</button>
</li>
```
