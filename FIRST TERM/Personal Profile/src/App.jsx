import Header from "./Header";
import Profile from "./Profile";
import Footer from "./Footer";
import './index.css';
import myImage from './images/about.png';

function App() {
  return (
    <div className="app-container">
      <Header />
      <section id="home">
        <br></br>
        <br></br>
      </section>
        <Profile 
          name="Erwin G. Aguiwas"
          name2="Student"
          profession="Network Administrator" 
          age={19} 
          hobbies="Coding, Playing Video Games, Reading Books"
          bio="I'm a simple college student studying information technology. I enjoy learning about new technologies. Outside of academics, I do participate in some sports, and in my free time, I do some reading and watch movies."
          avatar={myImage}
          twitterLink="https://twitter.com/yourusername"
          instagramLink="https://instagram.com/yourusername"
        />
        <br></br>
        <br></br>
        <br></br>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>You can reach me at: <a href="mailto:erwinaguiwas@gmail.com">erwinaguiwas@gmail.com</a></p>
      </section>
      <Footer />
    </div>
  );
}

export default App;