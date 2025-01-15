import { ThemeProvider } from "./context/ThemeContextProvider";
import ThemeToggle from "./components/ThemeToggle";
import { Box, NestedBox } from "./components/Box";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>React Context Example</h1>
        <ThemeToggle />
        <Box>
          <Box>
            <NestedBox />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
  /*
This block returns the JSX structure of the App component.

The ThemeProvider component wraps the entire application,
providing the theme context to all nested components.

Inside the ThemeProvider, there is a div with the class name "App".

The h1 element displays the title "React Context Example".

The ThemeToggle component is included to allow toggling the theme.

The Box components are nested inside each other, with the most deeply
nested box being the NestedBox component that changes its color based
on the theme.
*/
}

export default App;

/*
1. Create the Context:

Use createContext() to create a ThemeContext. This context will
hold the current theme value and a function to update the theme.

2. Create the ThemeProvider:

Create a ThemeProvider component that uses useState to manage
the theme state.
The ThemeProvider should wrap its children with the ThemeContext.
Provider and pass the current theme and the function to update the
theme as the context value.

3. Create the ThemeToggle Component:

Create a ThemeToggle component that uses useContext to access the
theme and the function to update the theme from ThemeContext.
This component should render a button that toggles the theme between
"light" and "dark" when clicked.

4. Create the Box Components:

Create a Box component that renders a div with a black border, padding,
and margin. This component will be used to create nested boxes.
Create a NestedBox component that uses useContext to access the theme
from ThemeContext.
The NestedBox component should conditionally set its background and
text color based on the current theme.

5. Update the App Component:

In the App component, wrap the application with the ThemeProvider to
provide the theme context to the entire app.
Include the ThemeToggle component to allow toggling the theme.
Create nested Box components, with the most deeply nested box being
the NestedBox component that changes its color based on the theme.

By following these steps, you can build a simple React app that uses
React Context to manage and toggle the theme of a deeply nested component.
*/
