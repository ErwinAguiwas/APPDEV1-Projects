import PropTypes from 'prop-types';

function Profile({ name, age, profession, bio, hobbies, avatar, twitterLink, instagramLink }) {
  return (
    <div className="profile game-card">
      <img src={avatar} alt="Profile" className="profile-picture" />
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Profession:</strong> {profession}</p>
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Hobbies:</strong></p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <div className="socials">
        <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="social-link twitter">Twitter</a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="social-link instagram">Instagram</a>
      </div>
    </div>
  );
}


Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  profession: PropTypes.string,
  bio: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  avatar: PropTypes.string,
  twitterLink: PropTypes.string,
  instagramLink: PropTypes.string,
};

export default Profile;
