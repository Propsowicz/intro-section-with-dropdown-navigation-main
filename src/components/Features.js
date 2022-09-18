import arrUp from '../images/icon-arrow-up.svg'
import arrDown from '../images/icon-arrow-down.svg'

import { useState } from 'react'
import FeaturesList from './FeaturesList'

export const Features = () => {
    const [showDrop, setShowDrop] = useState(false)

  

  return (
    <li>
        <div>
            <div style={{display: 'flex'}} onClick={() => setShowDrop(!showDrop)} >
                <a>Features</a><img style={{objectFit: 'contain', marginLeft: '5px'}} src={showDrop === false ? arrDown: arrUp}></img> 
            </div>
            <FeaturesList setShowState={showDrop}/>
        </div>
    </li>
  )
}

export default Features