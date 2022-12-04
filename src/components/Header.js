import trollFace from "../images/Troll Face.png"

export default function Header() {
  return (<header className="header">
    <img src={trollFace}/>
    <div className="title">Meme Generator</div>
    <div className="project">React Course - Project 3</div>
  </header>)
}
