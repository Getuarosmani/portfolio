
import { useTheme } from '../../ThemeContext';
import './Toggle.scss';

export const Toggle = () => {
 
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <label className="switch-wrapper">
      <input
        type="checkbox"
        role="switch"
        className="switch"
        defaultChecked={isDarkMode}
        onChange={toggleTheme}
      />
    </label>
  );
};