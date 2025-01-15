import { createContext } from "react";
import { ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

/*
This line creates a new Context object named ThemeContext using
the createContext function.

The createContext function is called with a default value that
matches the ThemeContextType type. The default value is an object with:

theme: a string set to "light", indicating the default theme.

setTheme: a function that does nothing (() => {}), which is a
placeholder for the actual function that will update the theme.

The ThemeContext object is then exported so it can be used in
other parts of the application.

In summary, this file defines and exports a ThemeContext object
with a default value, which includes a theme state and a function
to update the theme. This context will be used to provide and
consume the theme state throughout the application.
*/
