import { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

function App() {

  const [list, setList] = useState([
    {
      image: 'https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg',
      text: 'A cat',
      id: 1,
    },
    {
      image: 'https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg',
      text: 'Not a cat',
      id: 2,
    },
    {
      image: 'https://kartinkof.club/uploads/posts/2022-10/1665720159_2-kartinkof-club-p-krasivie-neobichnie-kartinki-noch-2.jpg',
      text: 'Meow',
      id: 3,
    }
  ]);
  const [text,setText] = useState('input text');
  const [image, setImage] = useState('input img');

  function handleSubmit(event){
    event.preventDefault()

    const post = {
      image,
      text,
      id: Date.now()
    }

    setList((prev) => [...prev, post])
    setText('')
    setImage('')
  }


  return (
    <>
      <main className="container my-5">
        <Form text={text} image={image} setText={setText} setImage={setImage} handleSubmit={handleSubmit}/>
        <CardList posts={list}/>
      </main>
    </>
  );
}

export default App;
