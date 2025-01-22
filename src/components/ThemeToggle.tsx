import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  /*
  This line uses the useContext hook to access the value of ThemeContext.

  It destructures the context value to get the theme state and the
  setTheme function.
  */

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
  /*
  This block returns a button element.

  The onClick event handler of the button is set to a function that toggles
  the theme.

  When the button is clicked, the setTheme function is called with the new
  theme value. If the current theme is "light", it sets the theme to "dark",
  and vice versa.

  The button's text content is "Toggle Theme".
  */
};

/*
In summary, this file defines and exports a ThemeToggle component that
uses the useContext hook to access the theme state and the function to
update it from ThemeContext. The component renders a button that toggles
the theme between "light" and "dark" when clicked.
*/
