import { useTheme } from '../../../ThemeContext';
import './Burger.scss';

export const Burger = ({ active, setActive }) => {
  const { isDarkMode } = useTheme();

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <label className="burger-label">
      <input
        type="checkbox"
        checked={active}
        onChange={handleToggle}
      />
      <span className={isDarkMode ? 'dark' : ''}></span>
      <span className={isDarkMode ? 'dark' : ''}></span>
      <span className={isDarkMode ? 'dark' : ''}></span>
    </label>
  );
};
