
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function App (){
  return(

    <>
    <Header />
    <Body name="Erwin" food="pizza" isHealthy = "No" age= "19" />
    <Body name="Erwin" food="pizza" isHealthy = "No" age="19" />
    <Body name="Erwin" food="pizza" isHealthy = "No" age="19" />
    <Body name="Erwin" food="pizza" isHealthy = "No" age="19" />
    <Footer />
    </>

  )
}