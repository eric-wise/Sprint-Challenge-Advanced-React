- [ ] Why would you use class component over function components (removing hooks from the question)?
    - Class components give additional functionality such as State and Lifecycle Hooks that you can’t do with functional components.

- [ ] Name three lifecycle methods and their purposes.
    - render()
        The most used lifecycle method, used in all React classes. Render handles component rendering of the virtual DOM.

    - componentDidMount()
        This method is called as part of the mounting phase in the React Lifecycle. This method gets called as soon as the render method is called the first time.  Often this method is used for fetching data via HTTP. 
        It also allows the use of setStat(), which render() does not allow.

    - componentDidUpdate()
        This method is used to update the virtual DOM for the item the state has changed for.

- [ ] What is the purpose of a custom hook?
    - The purpose of a custom hook is being able to utilize a component as a reusable function. This allows our code to stay DRY. 

- [ ] Why is it important to test our apps?
    - Testing allows automated identification of issues that will arise before the code in put into production. Testing should not be optional because it can affect anyone that utilizes the aplication negitivaly. Having     testing in place allows our pears to be able to add features and verify if their changes have negitivly impacted existing features. 