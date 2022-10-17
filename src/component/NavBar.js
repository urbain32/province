import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav>
      <div class='nav-wrapper #263238 blue-grey darken-4'>
        <ul id='nav-mobile' class='right'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/create'>Create</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
