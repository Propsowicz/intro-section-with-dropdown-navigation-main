import React from 'react'

const CompanyList = (props) => {
  return (
    <div className='drop-down-company'>
        <ul className='drop-down-list-c' style={props.setShowStateCompany === false ? {display:'none'}: {display:'block'}}>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <a>History</a>
            </li>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <a>Our Team</a>
            </li>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <a>Blog</a>
            </li>            
        </ul>
    </div>
  )
}

export default CompanyList