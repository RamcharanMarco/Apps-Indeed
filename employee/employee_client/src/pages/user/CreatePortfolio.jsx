import { useState } from "react"
import '../../styles/user/progress.css'
import {Link} from 'react-router-dom'
import '../../styles/user/createPortfolio.css'

const CreatePortfolio = () => {

  const [page,setPage] = useState(1)

  const next = (e) =>{
    e.preventDefault()
    setPage((prev) => prev +1)
  }

  const prev = (e) =>{
    e.preventDefault()
    setPage((prev) => prev -1)
  }

  const submit = (e) =>{
    e.preventDefault()
    setPage((prev) => prev +1)
    if(photo){
      console.log('useadportfoliopic')
    }else{
      console.log('useaddportfolio')
    }
  }

  return (
    <div className="createPortfolio">
        <h1>create your portflio</h1>
        <Link id="cancelCreatePortfolio" to='/employee/dashboard'>cancel</Link>
        <form>
          {
            page === 1 ? 
            <div className="file">
            <label>photo</label>
            <input type="file" />
            <div>
              <button className="next" onClick={next}>next</button>
            </div>
          </div>
            :
            page === 2 ?
            <div className="personaldetails">
              <div>
                <label>name</label>
                <input type="text" />
              </div>
              <div>
                <label>surname</label>
                <input type="text" />
              </div>
              <div>
                <label>age</label>
                <input type="text" />
              </div>
              <div>
                <label>location</label>
                <input type="text" />
              </div>
                <div>
                <label>gender</label>
                <input type="text" />
              </div>
              <div>
                <label>occupation</label>
                <input type="text" />
              </div>
              <div>
                <button className="prev" onClick={prev}>prev</button>
              <button className="next" onClick={next}>next</button>
            </div>
            </div>
            :
            page === 3 ?
            <div className="about">
              <div>
                <label>about me</label>
                <input type="text" />
              </div>
              <div>
                <button className="prev" onClick={prev}>prev</button>
              <button className="next" onClick={next}>next</button>
            </div>
            </div>
            :
            page === 4 ?
            <div className="hobbiesdetails">
            <div>
            <label>hobbies</label>
            <ul>
              <li>hobby1</li>
              <li>hobby12</li>
            </ul>
            <input type="text" />
            <button>add hobby</button>
          </div>
          <div>
            <label>skills</label>
            <ul>
              <li>skill1</li>
              <li>skill2</li>
            </ul>
            <input type="text" />
            <button>add skill</button>
          </div>
          <div>
            <label>qualifications</label>
            <ul>
              <li>qual1</li>
              <li>qual2</li>
            </ul>
            <input type="text" />
            <button>add qualification</button>
          </div>
          <div>
              <button className="prev" onClick={prev}>prev</button>
              <button className="next" onClick={next}>next</button>
            </div>
            </div>
            :
            page === 5 ?
            <div className="workandedu">
            <div>
            <label>work experience</label>
            <ul>
              <li>we1</li>
              <li>we2</li>
            </ul>
            <input type="text" />
            <button>add we</button>
          </div>
          <div>
            <label>education</label>
            <ul>
              <li>edu1</li>
              <li>edu2</li>
            </ul>
            <input type="text" />
            <button>add education</button>
          </div>
          <div>
              <button className="prev" onClick={prev}>prev</button>
              <button className="next" onClick={submit}>next</button>
            </div>
            </div>
            :
            page === 6 ? 
            <div className="portfoliocongrats">
              <h1>congrats your porfolio is now created</h1>
              <Link>view portfolio</Link>
            </div>
            :
            ''
          }
        </form>
    </div>
  )
}

export default CreatePortfolio