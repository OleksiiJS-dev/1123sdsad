import { useEffect, useState } from "react";


function App() {
  const number = useState(0)
  useEffect(()=> {
    const timer = setInterval(()=> {
      
    }
  })
  const lib = "Skr-Skr"
  const data = 1;
  const boulevarddepo = () => {
    return lib + data + 1;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      let newData: number = 0
      setInterval(console.log(newData =+ 1), 1000)
    }, 1000);
    return () => clearTimeout(timer)
  })
  // setTimeout(() => {
  //   console.log('Hello, World!')
  // }, 1000);
  
  return (
    <>
      Pharaoh: {lib}
      <br />
      Boulevard Depo: {data}
      <br />
      <br></br>
    </>
  );
}

export default App;
