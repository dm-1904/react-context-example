import { useState, ReactNode } from "react";
import { ThemeContext } from "./CreateContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  /*
  This line defines and exports a functional component named ThemeProvider.

  The component accepts a children prop, which is typed as ReactNode.
  This means it can accept any valid React child elements.
  */

  const [theme, setTheme] = useState("light");
  /*
  This line uses the useState hook to create a state variable named
  theme and a function to update it named setTheme.

  The initial value of theme is set to "light".
  */

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
  /*
  This block returns a ThemeContext.Provider component.

  The value prop of the ThemeContext.Provider is set to an
  object containing the theme state and the setTheme function.

  This means that any component wrapped by ThemeProvider will
  have access to the theme state and the setTheme function via
  the ThemeContext.

  The children prop is rendered inside the ThemeContext.Provider,
  allowing any nested components to consume the context.
  */
};
export { ThemeContext };

/*
This line re-exports the ThemeContext object, making it available
for import in other parts of the application.


In summary, this file defines and exports a ThemeProvider component
that uses the useState hook to manage the theme state. It provides
the theme state and the setTheme function to any nested components
via the ThemeContext.Provider. The ThemeContext object is also
re-exported for use in other parts of the application.
*/
