//import logo from './logo.svg';
import { Header } from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'
import {Home} from './components/Home'
import { Course } from './components/Course';
import { AllCourses } from './components/AllCourses';
import { AddCourse } from './components/AddCourse';
function App(){
  return (
    <div className="App">
      <ToastContainer/>
      <Home/>
      <AllCourses/>
      <AddCourse/>
    </div>
  )
}
export default App;
