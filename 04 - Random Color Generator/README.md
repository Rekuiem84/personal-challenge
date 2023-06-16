# Random Color Generator

Fourth project of [this challenge](https://github.com/Rekuiem84/personal-challenge).

### What this project contains :

- A random color generator from which you can copy the RGB and HEX codes of the generated color.

### What remarkable/unusual properties are used ?

CSS :

- Native CSS **nesting**
- **box-decoration-break**

JS :

- **keydown** event to detect when a key is pressed
- **document.activeElement** to check if an element is focused
- **navigator.clipboard.writeText()** to copy something into the clipboard
- **setTimeout** to wait for a set time before removing a class to an element
- **padStart()** to add a string of characters in front of another one if it wasn't long enough
