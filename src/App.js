import logo from './logo.svg';
import './App.css';
import { Employee } from './MyComponents/Employee';
import {Header} from './MyComponents/Header';
import { EmployeeList } from './MyComponents/EmployeeList';
import { Footer } from './MyComponents/Footer';

function App() {
  const title = "Employee Management System";
  
  const empList = [
    {
      eid:1001,
      eName:"Harsh",
      eEmail:"harsh@gmail.com",
      eSalary:250000
    },
    {
      eid:1002,
      eName:"h@rsh",
      eEmail:"harsh@gmail.com",
      eSalary:250000
    },
    {
      eid:1003,
      eName:"harsh123",
      eEmail:"harsh@gmail.com",
      eSalary:250000
    }
  ]

  return (
    <>
      <Header title = {title} searchBar={true}></Header>
      <EmployeeList empList={empList}></EmployeeList>
      <Footer></Footer>
    </>
  );
}

export default App;
