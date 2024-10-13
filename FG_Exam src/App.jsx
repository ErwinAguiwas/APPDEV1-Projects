import Header from "./Header";
import KeyboardProfile from "./KeyboardProfile";
import Footer from "./Footer";
import './index.css';
import myImage from './images/keyboard.png';

function App() {
  const kbX1000Documentation = {
    model: "KB-X1000",
    overview: "The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience.",
    specifications: [
      "Switch Type: Cherry MX Red (Mechanical)",
      "Key Layout: Full-size (104 keys)",
      "Backlighting: RGB with customizable colors",
      "Connectivity: Wired (USB 2.0)",
      "Dimensions: 440 mm x 135 mm x 35 mm",
      "Weight: 1.2 kg",
      "Cable Length: 1.8 meters",
      "Additional Features: Anti-ghosting, N-key rollover, dedicated media controls"
    ],
    features: [
      "Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.",
      "Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.",
      "Programmable Keys: Assign macros and custom functions to any key with the included software.",
      "Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.",
      "Dedicated Media Controls: Easily control music and videos with dedicated media keys."
    ],
    inBox: [
      "KB-X1000 Keyboard",
      "USB Cable",
      "User Manual",
      "Keycap Removal Tool",
      "Warranty Card"
    ],
    instructions: [
      "Carefully remove the keyboard and accessories from the box.",
      "Plug the USB cable into an available USB port on your computer.",
      "The keyboard should be automatically recognized and ready for use. No additional drivers are required.",
      "Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.",
      "Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.",
      "Replace keycaps by aligning them over the switch and pressing down until they click into place."
    ],
    maintenance: [
      "Disconnect the keyboard from the computer.",
      "Use a soft, dry cloth to clean the surface.",
      "For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.",
      "Store the keyboard in a cool, dry place.",
      "Avoid exposure to liquids or extreme temperatures."
    ],
    warranty: [
      "Warranty Period: 2 years from the date of purchase.",
      "Customer Support: For assistance, contact customer support via the manufacturer’s website  or call the support hotline at 1-800-555-1234."
    ]
  };

  return (
    <div className="app-container">
      <Header />
      <section id="keyboard">
        <KeyboardProfile 
          model={kbX1000Documentation.model}
          overview={kbX1000Documentation.overview}
          specifications={kbX1000Documentation.specifications}
          features={kbX1000Documentation.features}
          inBox={kbX1000Documentation.inBox}
          instructions={kbX1000Documentation.instructions}
          maintenance={kbX1000Documentation.maintenance}
          warranty={kbX1000Documentation.warranty}
          avatar={myImage}
        />
 <h2>Contact Us</h2>
        <p>Manufacturer’s Website:  <a href="mailto:www.keyboardcompany.com">www.keyboardcompany.com</a></p>
        <p>Customer Support Email:  <a href="mailto: support@keyboardcompany.com"> support@keyboardcompany.com</a></p>
        <p>Support Hotline: 1-800-555-1234</p>


      </section>
      <Footer />
    </div>
  );
}

export default App;
