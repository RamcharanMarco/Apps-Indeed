import {useState, useEffect, useCallback} from 'react'
import {useAuthContext} from '../../hooks/useAuthContext'
import {Link} from 'react-router-dom'
import '../../styles/employer/vacancies.css'
import { BACKEND } from '../../api/env'

function Vacancies() {

  const [vacancies, setVacancies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [page, setPage] = useState(1)
  const [items, setItems] = useState([])
  const [itemsPerPage,setItemsPerPage] = useState(10)
  const [tot,setTot] = useState(0)

  const {employer} = useAuthContext()

  const getVacancies = useCallback( async () => {
    setLoading(true)
    setError(null)
    const response = await fetch(`${BACKEND}/api/employer/jobs/getJobSingleEmployer`, {
        headers: {
            'Authorization' : `Bearer ${employer.token}`
          }
    })

    const json = await response.json()

    if(!response.ok){
      setLoading(false)
      setError(true)
  }
  if(response.ok){
      setLoading(false)
      setVacancies(json)
      setItems(json.slice(0,10))
      setTot(json.length)
  }
  },[employer])


  useEffect( ()=>{
    getVacancies()

  },[getVacancies])

  const nextpage = (e) =>{
    e.preventDefault()
    setItems(vacancies.slice(page*itemsPerPage,(page*itemsPerPage) + itemsPerPage))
    setPage((prev)=> prev + 1)
    window.scrollTo(0,0)

  }

  const prevpage = (e) =>{
    e.preventDefault()
    setItems(vacancies.slice(((page*itemsPerPage) - itemsPerPage)-10,(page*itemsPerPage) - itemsPerPage))
    setPage((prev)=> prev - 1)
    window.scrollTo(0,0)

  }

  if(loading){
    return (
    <div 
    style={{height: '80vh', 
    backgroundColor: 'azure',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'}}>
      <h1>...LOADING</h1>
    </div>
    )
  }

  if(error){
    return (
    <div 
    style={{height: '80vh', 
    backgroundColor: 'azure',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'}}>
      <h1>...ERROR</h1>
    </div>
    )
  }

  return (

    <div className='vacancies'>
      <div className='empvacp empvacpagtop'>
        {page === 1 ? '': <button onClick={prevpage}>prev</button>}
        <h1>{page}</h1>
        {page*10 >= tot ? '': <button onClick={nextpage}>next</button> }
      </div>
      {!vacancies && <h1>you have no vacancies available</h1>}
      {items && 
      items.map((vac) => {
        return (
          <div className='vacancy' key={vac._id}>
            <h1>{vac.title}</h1>
               <Link to={`/employer/dashboard/vacancies/${vac._id}`}>view job</Link>
          </div>
        )
      })
      }
      <div className='empvacpag empvacp'>
        {page === 1 ? '': <button onClick={prevpage}>prev</button>}
        <h1>{page}</h1>
        {page*10 >= tot ? '': <button onClick={nextpage}>next</button> }
      </div>
    </div>
  )
}

export default Vacancies




