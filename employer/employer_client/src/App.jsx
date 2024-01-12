import { useEffect,useState } from 'react'
import Router from './router/Router'

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(false)
    /*setTimeout(()=>{
      setLoading(false)
    },100000000000)*/
  },[])
  
  return (
    <>
    {
      loading ? 
      <div className="loading">
        <h1>INDEED</h1>
      </div>
      :
      <Router/>
    }
    </>
  );
}


export default App;
