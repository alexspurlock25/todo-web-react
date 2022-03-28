import { useState } from "react"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../firebase.config'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

function Controls() {
    const [title, setTitle] = useState('')

    function handleAdd(e) {
        if (title == null || title == "") return
        addDoc(collection(db,'todo'), {
            id: serverTimestamp(),
            title: title,
            isDone: false
        }).finally(() => {
            setTitle('')
        })
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex justify-content-end" fluid>
                <Form className="d-flex align-items-center">
                    <Form.Control className="me-2" type="text" placeholder="Add Todo..." onChange={(e) => setTitle(e.target.value)} />
                    <Button variant="primary" onClick={handleAdd}>Add</Button>
                </Form>
            </Container>
        </Navbar>
        
    );
  }
  
  export default Controls;
  
