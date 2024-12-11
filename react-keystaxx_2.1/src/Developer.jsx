import React, { useState } from 'react';

const Developer = () => {
  const [vouchCounts, setVouchCounts] = useState({
    erwin: 0,
  });

  const handleVouch = (developer) => {
    setVouchCounts({ ...vouchCounts, [developer]: vouchCounts[developer] + 1 });
  };

  return (
    <div>
      <h2>Developer Profile: Erwin Aguiwas</h2>

      <div className="developer-card">
        <h3>Erwin Aguiwas</h3>
        <p>
          <strong>Role:</strong> Full-Stack Web Developer
        </p>
        <p>
          <strong>About Me:</strong> I am a passionate web developer currently
          pursuing a Bachelor of Science in Information Technology. I specialize
          in building dynamic and responsive web applications using modern
          JavaScript frameworks like React and Vite.
        </p>

        <h4>Resume</h4>

        <h5>Summary</h5>
        <p>
          Motivated Full-Stack Developer with expertise in React, Node.js, and
          JavaScript frameworks. Known for creating dynamic, user-friendly web
          applications and providing scalable solutions.
        </p>

        <h5>Education</h5>
        <ul>
          <li>
            <strong>Bachelor of Science in Information Technology</strong>
            <br />
            University of Innovation and Technology
            <br />
            Expected Graduation: 2025
          </li>
        </ul>

        <h5>Experience</h5>
        <ul>
          <li>
            <strong>Frontend Developer Intern</strong> — TechSolutions Co.
            <br />
            <em>June 2023 – September 2023</em>
            <br />
            - Built and maintained React-based web applications.
            <br />
            - Collaborated with the backend team to integrate RESTful APIs.
            <br />
            - Enhanced user interfaces for accessibility and responsiveness.
          </li>
        </ul>

        <h5>Skills</h5>
        <ul>
          <li>Proficient in React, JavaScript, HTML, and CSS</li>
          <li>Backend Development: Node.js, Express</li>
          <li>Version Control: Git, GitHub</li>
          <li>Database Management: MongoDB, MySQL</li>
          <li>API Development and Integration</li>
          <li>Responsive Web Design</li>
        </ul>

        <h5>Projects</h5>
        <ul>
          <li>
            <strong>KeyStaxx App</strong>: Designed and developed a complete
            e-commerce application for mechanical keyboards, featuring a Neon
            UI and dynamic product management.
          </li>
          <li>
            <strong>TaskMaster</strong>: Built a task management app with React
            and Node.js to allow teams to collaborate and track progress.
          </li>
          <li>
            <strong>WeatherNow</strong>: Created a weather app using a RESTful
            API, showcasing live weather updates and a responsive UI.
          </li>
        </ul>

        <h5>Contact Information</h5>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:aguiwasErwin@email.com">aguiwasErwin@email.com</a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/erwin-aguiwas"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/erwin-aguiwas
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/erwin-aguiwas"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/erwin-aguiwas
          </a>
        </p>

        <button
          onClick={() => handleVouch('erwin')}
          className="vouch-button"
        >
          Vouch for Me
        </button>
        <p>Vouch Count: {vouchCounts.erwin}</p>
      </div>
    </div>
  );
};

export default Developer;
