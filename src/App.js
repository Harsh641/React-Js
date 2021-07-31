import logo from './logo.svg';
import './App.css';
import { Demo1 } from './MyComponents/Demo1';

function demo(){
  return Demo1
}

function App() {
  const name = "Harsh";
  const d = new Date();
  return (
    <>
    <h1>Welcome, {name}</h1>
    <h1>Date: {d}</h1>
    <Demo1/>
    </>
  );
}

export default App;
