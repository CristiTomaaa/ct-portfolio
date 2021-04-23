import React, {useState} from 'react';
import styled from 'styled-components';
import '../contactForm.css';
import {db} from '../components/Firebase';


const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
    })
    .then(() =>{
      alert('Message has been sent !');
    })
    .catch((error) => {
      alert(error.message);
    });
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <Form>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Message:</label>
        <textarea placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </form>
      <button type="submit">SEND</button>
    </Form>
  )
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export default ContactSection;
