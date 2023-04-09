import Navbar from "./components/Navbar";
import { SocialIcon } from "react-social-icons";
import Andrie from "./images/Andrie.jpg"
import Ayhan from "./images/Ayhan.jpeg"
import Thomas from "./images/Thomas.jpeg"
import Eknoor from "./images/Eknoor.jpeg"
import Demo from "./images/Demo.jpg"

const Card = ({name, image, description, link, github, instagram}) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl m-4">
      <figure><img width={288} height={288} src={image} alt="Image" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <SocialIcon url={link} target="_blank" />
          {github ? <SocialIcon url={github} target="_blank" /> : <></>}
          {instagram ? <SocialIcon url={instagram} target="_blank" /> : <></>}
        </div>
      </div>
    </div>
  )
}

const Jumbotron = () => {
  return (
    <div className="container mx-auto lg:flex justify-around items-center mb-4">
      <div className="p-4 mx-8">
        <h1 className="text-4xl text-center my-8">Description</h1>
        <p className="mb-8 p-4 max-w-xl text-lg text-center">
          Want to learn a subject but do not have the time to go through hour long lectures? Use LectureGPT to quickly summarize lectures and videos as well as provide practice problems to 
          help you fast-track your learning. You can paste in a Youtube link, submit an mp3 or mp4 file, or paste in a transcript to get all the help you need in your studies.
        </p>
        <div className="block text-center">
          <a className="btn" href="https://github.com/RodzAmor/Bitcamp2023" target="_blank">
            Check the Github
          </a>
        </div>
      </div>
      <div className="flex justify-center p-4 mx-12 my-4">
        <img src={Demo} width="500" height="295" alt="Demo"></img>
        {/* <iframe width="500" height="295" src="https://www.youtube.com/embed/Sl4JvEXA-lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="my-8">
        <h2 className="text-5xl text-center text my-12">Meet the Team</h2>
        <div className="mx-auto flex justify-center flex-col items-center md:flex-row">
          <Card 
            name="Rodz Andrie Amor"
            image={Andrie}
            description="Computer Science & Finance Double Major"
            link="https://www.linkedin.com/in/rodzamor/"
            github="https://github.com/RodzAmor"
            instagram="https://www.instagram.com/andrie.amor"
          />
          <Card 
            name="Ayhan Mehdiyev"
            image={Ayhan}
            description="Computer Science Major & Math Minor"
            link="https://www.linkedin.com/in/ayhanmehdiyev/"
            github="https://github.com/UMD-Mehdiyev"
            instagram=""
          />
          <Card
            name="Thomas Edwards"
            image={Thomas}
            description="Computer Science & Math Double Major"
            link="https://www.linkedin.com/in/thomas-edwards-44390725a/"
            github=""
            instagram="https://www.instagram.com/thomas.bombest/"
          />
          <Card
            name="Eknoor Kaur"
            image={Eknoor}
            description="Publich Health & Information Science Double Major"
            link="https://www.linkedin.com/in/eknoor-kaur-23aa50251/"
            github=""
            instagram="https://www.instagram.com/ekoo.shekoo/"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
