import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="min-w-full p-3 flex justify-between">
      <button onClick={() => navigate('/') }>Home</button>
      <ul className="flex place-content-end gap-4">
        <li><button onClick={() => navigate('login') }>Login</button></li>
        <li><button>Register</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
