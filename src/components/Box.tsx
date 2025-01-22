import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export const Box = ({ children }: { children: React.ReactNode }) => {
  /*
  This line defines a functional component named Box.

  The component accepts a children prop, which is typed as
  React.ReactNode. This means it can accept any valid React child elements.
  */
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
  /*
  This block returns a div element with inline styles for a black border,
  padding, and margin.

  The children prop is rendered inside the div, allowing any nested components
  to be displayed within the Box.
  */
};

export const NestedBox = () => {
  const { theme } = useContext(ThemeContext);
  /*
  This line uses the useContext hook to access the value of ThemeContext.
  It destructures the context value to get the theme state.
  */

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      Deeply Nested Box
    </div>
  );
  /*
  This block returns a div element with inline styles for a black border,
  padding, and margin.

  The backgroundColor and color styles are conditionally set based on the
  theme state. If the theme is "light", the background is white and the text
  is black. If the theme is "dark", the background is black and the text is white.

  The text content of the div is "Deeply Nested Box".
  */
};


/*
In summary, this file defines and exports two components: Box and NestedBox.
The Box component renders a div with a black border, padding, and margin, and
displays any nested children. The NestedBox component uses the useContext hook
to access the theme state from ThemeContext and conditionally sets its
background and text color based on the current theme.
*/
