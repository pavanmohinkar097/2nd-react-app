// JSX Expression

// const App = () => {
//   const imageSource =
//     "https://tse1.mm.bing.net/th?id=OIP.G3NJewocVIB8xYj1IIMnRgEsCh&pid=Api&P=0";

//   return <img src={imageSource} alt="marvel" />;
// };


// Dynmaic in React
// const App = () =>{
//   return <h1>Hello! I am {"Pavan mohinkar"}</h1>
// }

  //OR

  // const App = () =>{
  //   const userName = "Pavan Mohinkar"
  //   return <h1>Hello! How Can you Help  {userName} </h1>
  // }
  /// true,false, null, something///
  const App = () =>{
    const userName = "something"? "Pavan" : "Ashish"
    return <h1>Hello! How Can you Help  {userName} </h1>
  }

export default App;
