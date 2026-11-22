// App.jsx
import UserList from "./UserList";

const users = [
  { id: 1, name: "Hamuuda", email: "mchamuuda@gmail.com" },
  { id: 2, name: "Omar", email: "Omartood@gmail.com" },
  { id: 3, name: "Hajira", email: "abdulkadirhajira@gmail.com" },
];

function App() {
  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
