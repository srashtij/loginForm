import './Header.css';

const Header = () => {
  const nav = [
    { 
      title: 'Account', 
      pos: '1', 
    },
    { 
      title: 'About Us',
      pos: '2',  
    },
    { 
      title: 'Home',
      pos: '3', 
    },
    { 
      title: 'Contact',
      pos: '4',  
    },
    { 
      title: 'Login', 
      pos: '5', 
    },
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <img src="" alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          {nav.map((item, i) => (
            <li key={i} className="nav-item">
              <a href={item.pos}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
