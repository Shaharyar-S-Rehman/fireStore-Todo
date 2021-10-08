import './App.css';

import Todo from "./components/Todo/todo";

function App() {


  return (
    <>
      <div className="m-auto" >
        <Todo />
      </div>
    </>
  )
}
export default App;













































// import React, { useState, useEffect } from 'react';
// import './App.css';
// import db from './firebase'
// import firebase from 'firebase';

// import { AddCircleOutlineRounded, DeleteOutlineRounded, Edit } from '@material-ui/icons';

// import { Button, TextField, Container, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Dialog, DialogContent, DialogActions } from '@material-ui/core';


// function App() {

//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//   const [open, setOpen] = useState(false);
//   const [update, setUpdate] = useState('');
//   const [toUpdateId, setToUpdateId] = useState('');


//   useEffect(() => {
//     console.log('useEffect Hook!!!');

//     db.collection('todos').orderBy('datetime', 'desc').onSnapshot(snapshot => {
//       console.log('Firebase Snap!');
//       setTodos(snapshot.docs.map(doc => {
//         return {
//           id: doc.id,
//           name: doc.data().todo,
//           datatime: doc.data().datatime
//         }
//       }))
//     })

//   }, []);

//   const addTodo = (event) => {
//     event.preventDefault();
//     db.collection('todos').add({
//       todo: input,
//       datetime: firebase.firestore.FieldValue.serverTimestamp()
//     })
//     setInput('');
//   }

//   const deleteTodo = (id) => {
//     db.collection('todos').doc(id).delete().then(res => {
//       console.log('Deleted!', res);
//     });
//   }

//   const openUpdateDialog = (todo) => {
//     setOpen(true);
//     setToUpdateId(todo.id);
//     setUpdate(todo.name);
//   }

//   const editTodo = () => {
//     db.collection('todos').doc(toUpdateId).update({
//       todo: update
//     });
//     setOpen(false);
//   }

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Container maxWidth="sm">

//       <form noValidate>

//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="todo"
//           label="Enter ToDo"
//           name="todo"
//           autoFocus
//           value={input}
//           onChange={event => setInput(event.target.value)}
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           onClick={addTodo}
//           disabled={!input}
//           startIcon={<AddCircleOutlineRounded />}
//         >
//           Add Todo
//       </Button>

//       </form>

//       <List dense={true}>
//         {
//           todos.map(todo => (

//             <ListItem key={todo.id} >

//               <ListItemText
//                 primary={todo.name}
//                 secondary={todo.datetime}
//               />

//               <ListItemSecondaryAction>
//                 <IconButton edge="end" aria-label="Edit" onClick={() => openUpdateDialog(todo)}>
//                   <Edit />
//                 </IconButton>
//                 <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
//                   <DeleteOutlineRounded />
//                 </IconButton>
//               </ListItemSecondaryAction>

//             </ListItem>
//           ))
//         }
//       </List>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="normal"
//             label="Update Todo"
//             type="text"
//             fullWidth
//             name="updateTodo"
//             value={update}
//             onChange={event => setUpdate(event.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={editTodo} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>


//     </Container >
//   );
// }

// export default App;





// import './App.css';
// import './App.css';
// import {
//   Switch,
//   Route,
//   useHistory
// } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// import Todo from "./components/Todo/todo";
// // import RealtimeTodo from "./components/realTimeTodo/realtimeTodo";

// function App() {
//   let history = useHistory();

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography onClick={() => { history.push("/") }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Firestore Example
//             </Typography>
//             <Button color="inherit" variant="text" onClick={() => { history.push("/") }}>Todo</Button>
//             <Button color="inherit" variant="text" onClick={() => { history.push("/realtime") }}>Real-Time Todo</Button>

//           </Toolbar>
//         </AppBar>

//         <Switch>
//           <Route exact path="/">
//             <Todo />
//           </Route>

//           <Route path="/realtime">
//             <RealtimeTodo />
//           </Route>
//         </Switch>
//       </Box>
//     </>
//   )
// }
// export default App;




// import { Formik, Field, Form, useFormik } from "formik";
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import * as yup from 'yup';
// import  db  from "firebase/firestore"

// import { collection, addDoc } from "firebase/firestore"; 


// // function doSomething(values) {
// //   console.log("values: ", values)
// // }
// function onSubmitFunction(values) {
//   console.log("values: ", values)

//    onSubmit: async(values)=>{
//      try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }}

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .max(10, 'No more then 10')
//     .required('Password is required'),
//   website: yup
//     .string('Enter your password')
//     .url("please enter valid URL e.g: https://somewebsite.com")
//     .required('Password is required'),
// });


// export default function App() {

//   const formik = useFormik({
//     validationSchema: validationSchema,
//     initialValues: {
//       website: '',
//       email: '',
//       password: '',
//     },
//     onSubmit: onSubmitFunction

//   });


//   return (
//     <div style={{ padding: "1rem" }}>

//       {/* <Formik
//         initialValues={{ name: "", email: "" }}
//         onSubmit={doSomething}
//       >
//         <Form>
//           <Field name="name" type="text" />
//           <Field name="email" type="email" />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik> */}


//       <form onSubmit={formik.handleSubmit}>
//         <Stack spacing={2}>
//           <TextField
//             fullWidth
//             color="primary"
//             id="outlined-basic"
//             label="Outlined"
//             variant="outlined"

//             name="website"
//             value={formik.values.website}
//             onChange={formik.handleChange}

//             error={formik.touched.website && Boolean(formik.errors.website)}
//             helperText={formik.touched.website && formik.errors.website}
//           />

//           <TextField
//             fullWidth
//             color="primary"
//             id="outlined-basic"
//             label="Outlined"
//             variant="outlined"

//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}

//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//           />

//           <TextField
//             fullWidth
//             color="primary"
//             id="filled-basic"
//             label="Outlined"
//             variant="outlined"
//             type="password"

//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}

//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />

//           <Button fullWidth variant="contained" color="primary" type="submit">Button</Button>
//         </Stack>

//       </form>
//     </div>
//   );
// }


