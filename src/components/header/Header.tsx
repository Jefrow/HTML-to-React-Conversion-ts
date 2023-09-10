import './Header.css';

export const Header = () => {
  const navLinks = ['about us', 'info', 'support us'];

  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {navLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </nav>
    </header>
  );
};
