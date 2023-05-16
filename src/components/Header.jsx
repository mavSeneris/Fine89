import React, {useState, useEffect} from 'react'



export default function Header() {
  const [date, setDate] = useState(new Date())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  },[])

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const dayOfWeek = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = date.getDate()
  const year = date.getFullYear()


  return (
    <div className='header container'>
      <span className='header-date'>{dayOfWeek}, {month} {dayOfMonth}, {year}</span>
      <div className='header--title'>
        <div className='header-logo'>
          <img src="#" />
        </div>
        <h1>FINE89 COFFEE</h1>
        <div className='header-logo'>
          <img src="#" />
        </div>
      </div>
      <div className='header--sub-title'>
        <span>ESTD . 2014</span>
        <div><img src="#" /></div>
        <span>MANILA - PH</span>
      </div>


      <nav>

      </nav>
    </div>
  )
}
