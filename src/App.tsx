import UserList from "./components/axios-lesson-advance/UserList";

function App() {
  return (
    <div className="flex items-center mt-50 justify-center bg-gray-100 gap-20">
      <UserList />
    </div>
  );
}

export default App;

/*
When you execute the code, you will see "Connected" in the console. 
Since in the DEV environment, we are using STRICT mode, the comonent will rendered twice.
 Hence, before useEffect will mount, it will call unMount or cleanup function disconnect() before calling the connect();
*/
