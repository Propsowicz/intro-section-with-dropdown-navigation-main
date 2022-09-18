import arrUp from '../images/icon-arrow-up.svg'
import arrDown from '../images/icon-arrow-down.svg'
import CompanyList from './CompanyList'

import { useState } from 'react'

const Company = () => {
  const[showDropCompany, setShowDropCompany] = useState(false)

  return (
    <li>
      <div>
        <div style={{display: 'flex'}} onClick={() => setShowDropCompany(!showDropCompany)}>
          <a>Company</a><img style={{objectFit: 'contain', marginLeft: '5px'}} src={showDropCompany === false ? arrDown: arrUp}></img> 
        </div>
        <CompanyList setShowStateCompany={showDropCompany} />
        
      </div>
    </li>
  )
}

export default Company