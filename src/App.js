import React, { useState } from 'react';
import Header from './components/Header';
import Subject from './components/Subject';
import BodyTop  from './components/BodyTop';
import BodyMiddle from './components/BodyMiddle';
import BodyLower from './components/BodyLower';
import BodyEnd from './components/BodyEnd';
import Footer from './components/Footer';
import './styles/app.scss'

function App() {
  const subject = [
  {name: "Computer Science", image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80", id: 1}, 
  {name: "Maths", image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80", id: 2}, 
  {name: "Physics", image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", id : 3}, 
  {name: "Chemistry", image: "https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", id: 4}, 
  {name: "Biology", image: "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", id: 5}, 
  {name: "Biology", image: "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", id: 5}];
  
  const [subjects, setSubjects] = useState(subject);

  return (
    <div>
      <Header />
      <Subject subjects={subjects} />
      <BodyTop />
      <BodyMiddle />
      <BodyLower />
      <BodyEnd />
       <Footer /> 
    </div>
  );
}

export default App;
