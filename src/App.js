import logo from "./logo.svg";
import "./App.css";
// import TaskItem from './TaskItem';
import { Modal, Button, Form, Col } from 'react-bootstrap';
// import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import Moment from 'react-moment';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createTask } from '../store/actions';
// import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import {useDispatch} from "react-redux"
import {addTask} from "./store/actions"
import FutureList from "./components/FutureList";
import { name } from "file-loader";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import Datetime from 'react-datetime';
function App() {
  const Tasks = useSelector((state)=> state.Tasks)
  const finished = Tasks.filter(
    (task) => new Date(task.deadline) < new Date() || task.status === true
  );
  const today = Tasks.filter(
    (task) =>
      new Date(task.deadline) > new Date() &&
      task.status === false &&
      new Date(task.deadline).getDate() < new Date().getDate() + 1
  );
  console.log(today,"hello")
  const future = Tasks.filter(
    (task) =>
      new Date(task.deadline).getDate() > new Date().getDate() + 1 &&
      task.status === false
  ); 
  console.log(future,"hello")

  const dispatch=useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [task,setTask]=useState({
    priority:"middle",
    
  });
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };
  const handleSubmit = ()=>{
    dispatch(addTask(task));
    handleClose()
  }
  return (
    <div className="App">
      <br />
       <button
        // style={{ margin: '15px', backgroundColor: '#cc9b6d', border: '0px' }}
        className="btn btn-dark"
        onClick={handleShow}
      >
        New Task
      </button>
        <FutureList data={today} title="Today" />
        <FutureList data={future} title="Future" />
        <FutureList data={finished} title="Finished" />


     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Task: </Form.Label>
            <Form.Control
             /* value={}*/
              name="name"
               onChange={handleChange}
            ></Form.Control>
            <Form.Label>Details: </Form.Label>
            <Form.Control
              /* value={book.author}*/
              name="details"
                onChange={handleChange}
            ></Form.Control>

            
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>date</Form.Label>
              <Datetime
              name="date"
              onChange={(value) => {
                setTask({ ...task, ['deadline']: value.toDate() });
              }}
            />
              {/* <Form.Control type="date" onChange={(value)=>{setTask({...task,["deadline"]:value.toDate()})}} name="deadline" /> */}
            
            </Form.Group>
            
          </Form>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            className="btn btn-primary"
            type="onSubmit" onClick={handleSubmit}>
          
            Add Task
          </button>
        </Modal.Footer>
      </Modal><br />
      
    </div>
  );
}

export default App;
