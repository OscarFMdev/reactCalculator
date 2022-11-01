import { FaReact } from 'react-icons/fa';

const Home = () => (
  <>
    <h2>Welcome!</h2>
    <p>
      This is a React app, feel free to navigate trough
      the different sections of this Single Page Application:
    </p>
    <p>
      <FaReact />
      <span>Home:</span>
      {' '}
      This section is a welcome page and introduction to this Single Page Application
    </p>
    <p>
      <FaReact />
      <span>Calculator:</span>
      {' '}
      This section is for using the calculator created with React.
    </p>
    <p>
      <FaReact />
      <span>Quote:</span>
      {' '}
      This section is for displaying a quote about Math.
    </p>

  </>
);

export default Home;
