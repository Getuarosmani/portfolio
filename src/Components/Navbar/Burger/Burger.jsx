import { useTheme } from '../../../ThemeContext';
import './Burger.css';

export const Burger = ({ active, setActive }) => {
  const { isDarkMode } = useTheme();

  const handleToggle = () => {
    console.log('Toggled:', !active);
    setActive(!active);
  };

  return (
    <>
      <input
        type="checkbox"
        id="menu_checkbox"
        onChange={handleToggle}
        checked={active}
        hidden
      />
      <label
        htmlFor="menu_checkbox"
        className={`label ${active ? 'active' : ''}`}
      >
        <div className={`bar ${isDarkMode ? 'dark' : ''}`}></div>
                <div className={`bar ${isDarkMode ? 'dark' : ''}`}></div>
        <div className={`bar ${isDarkMode ? 'dark' : ''}`}></div>
      </label>
    </>
  );
};
