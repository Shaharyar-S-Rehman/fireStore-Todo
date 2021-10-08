import { useFormik } from "formik";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import { useEffect, useState } from "react"
import { collection, addDoc, onSnapshot, query, serverTimestamp, orderBy, deleteDoc, doc } from "firebase/firestore"
import { db } from '../../firebase'
import { color } from "@mui/system";


const todoCol = collection(db, "todo")

const validationSchema = yup.object({
  title: yup
    .string('Enter your email')
    .required('Email is required'),
});

async function del(id) {
  await deleteDoc(doc(todoCol, id));
}

function RealtimeTodo() {
  const [todo, settodo] = useState([])

  useEffect(() => {

    const q = query(todoCol, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {

      let temp = [];
      snapshot.forEach((doc) => {

        let id = doc.id;
        let data = doc.data();

        temp.unshift({
          id: id,
          title: data.title,
          description: data.description
        });
      })
      settodo(temp)
    });

    return () => {
      unsubscribe()
      console.log("unsub")
    };
  }, []);

  const formik = useFormik({

    initialValues: {
      title: "",
      description: " "
    },
    onSubmit: async (values) => {
      try {
        const docRef = await addDoc(todoCol, {
          title: values.title,
          description: values.description,
          timestamp: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    validationSchema: validationSchema,
  });


  return (
    <Box sx={{ flexGrow: 1, m: 2 }} >

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <h1 style={{textAlign:"center", textDecoration:" 5px solid underline", textDecorationColor:"orange", color:"whitesmoke"}}> Todo</h1>
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
          style={{margin:"auto", width:"50%",}}

            color="secondary"
            id="outlined-basic"
            label="AddTodo"
            variant="outlined"

            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}

            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
<br />

          {/* <TextField

          style={{margin:"auto", width:"50%", }}

            color=""
            id="filled-basic"
            label=""
            variant="filled"

            name="Add Todo"
            value={formik.values.description}
            onChange={formik.handleChange}

            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          /> */}
<br />
          <Button style={{margin:"auto", width:"10%"}} fullWidth variant="contained" color="primary" type="submit">Add Todo</Button>
        </Stack>
<br />
      </form>

      <div>
        {todo.map((eachTodo, i) => {

          return (<>
          <div key={i}  style={{ backgroundColor:"white", color:"black", borderRadius:" 20px 20px 20px 20px ", margin:"0 20% 0 20%"}}>
            <br />
            {/* <div> id: {eachTodo.id}</div>
            <div>{eachTodo.description} title: {eachTodo.title}</div> */}
            <div>  {eachTodo.title} &nbsp; 

            <button onClick={() => { del(eachTodo.id) }} style={{backgroundColor:"blue", color:"whitesmoke", border:"blue"}}>Delete</button> 
            </div>
            <br />
          </div> <br />
          </>)
        })}

      </div>
    </Box>
  );
}

export default RealtimeTodo;