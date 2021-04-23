import React from 'react';
import styled from 'styled-components';
import '../contactForm.css';


const ContactSection = () => {
  return (
    <Form>
      <form className="form">
        <label>Name:</label>
        <input placeholder="name"/>
        <label>Email:</label>
        <input placeholder="email"/>
        <label>Message:</label>
        <textarea placeholder="message"></textarea>
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
