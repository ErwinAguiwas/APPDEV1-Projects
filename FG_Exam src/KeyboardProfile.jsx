import PropTypes from 'prop-types';

function KeyboardProfile({avatar, model, overview, specifications, features, inBox, instructions, maintenance, warranty }) {
  return (
    <div className="keyboard-profile">
          <center><img src={avatar} alt="Profile" className="profile-picture" /></center>
      <center><h2>Model: {model}</h2></center>
      <br></br>
      <h3>Product Overview:</h3>
      <p>{overview}</p>

      <h3>Specifications:</h3>
      <ul>
        {specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>

      <h3>Key Features:</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3>In the Box:</h3>
      <ul>
        {inBox.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Setup Instructions:</h3>
      <ul>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3>Maintenance and Care:</h3>
      <ul>
        {maintenance.map((careStep, index) => (
          <li key={index}>{careStep}</li>
        ))}
      </ul>

      <h3>Warranty and Support:</h3>
      <ul>
        {warranty.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

KeyboardProfile.propTypes = {
  model: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  specifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  inBox: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  maintenance: PropTypes.arrayOf(PropTypes.string).isRequired,
  warranty: PropTypes.arrayOf(PropTypes.string).isRequired,
  avatar: PropTypes.string,
};

export default KeyboardProfile;
