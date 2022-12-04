import {useEffect, useState} from "react";

export default function Meme() {
  const [meme, setMeme] = useState({topText: "", bottomText: "", url: "https://i.imgflip.com/1ur9b0.jpg"})
  const [memes, setMemes] = useState([])
  
  function randomImage() {
    setMeme(prev => ({
      ...prev,
      url: memes[Math.round(Math.random() * memes.length)].url
    }));
  }
  
  useEffect(() => {
    console.log('effect')
    fetch("https://api.imgflip.com/get_memes")
      .then(resp => resp.json())
      .then(resp => setMemes(resp.data.memes));
  }, []);
  
  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prev => ({...prev, [name]: value}));
  }
  
  return (<div className="meme">
    <div className="form">
      <input 
        className="text-input" 
        type="text" 
        id="firstPhrase" 
        name="topText"
        placeholder="Top text"
        onChange={handleChange}
      />
      
      <input 
        className="text-input" 
        type="text" 
        id="secondPhrase"
        name="bottomText"
        placeholder="Bottom text"
        onChange={handleChange}
      />
      
      
      <button onClick={randomImage} className="submit-btn" type="submit" id="submit">Get a new meme image</button>
      {meme.url &&
        <div className="meme-img">
          <div className="meme-text top">{meme.topText}</div>
          <div className="meme-text bottom">{meme.bottomText}</div>
          <img src={meme.url}/>
        </div>
      }
      
    </div>
  </div>)
}