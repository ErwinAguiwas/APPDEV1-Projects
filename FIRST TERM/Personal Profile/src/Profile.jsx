import PropTypes from 'prop-types';

function Profile({ name, name2, profession, age, hobbies, bio, avatar, twitterLink, instagramLink }) {
  return (
    <div className="profile game-card">
      <center><img src={avatar} alt="Profile" className="profile-picture" /></center>
      <center><h1>{name}</h1></center>
      <center><h2>{name2}</h2></center>
      <br></br>
      <p><strong>Profession:</strong> {profession}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Hobbies:</strong> {hobbies}</p>
      <p><strong>Bio:</strong> {bio}</p>
      
      
      <div className="socials">
        <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="social-link twitter">Twitter</a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="social-link instagram">Instagram</a>
      </div>
    </div>
  );
}


Profile.propTypes = {
  name: PropTypes.string,
  name2: PropTypes.string,
  profession: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
  twitterLink: PropTypes.string,
  instagramLink: PropTypes.string,
  
};

export default Profile;
