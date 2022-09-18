import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'

const FeaturesList = (props) => {
  return (
    <div className='drop-down-features'>
        <ul className='drop-down-list-f' style={props.setShowState === false ? {display: 'none'}: {display: 'block'}}>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <img style={{objectFit: 'contain', marginRight: '10px'}} src={todo}></img><a>Todo List</a>
            </li>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <img style={{objectFit: 'contain', marginRight: '10px'}} src={calendar}></img><a>Calendar</a>
            </li>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <img style={{objectFit: 'contain', marginRight: '10px'}} src={reminders}></img><a>Reminders</a>
            </li>
            <li style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <img style={{objectFit: 'contain', marginRight: '10px'}} src={planning}></img><a>Planning</a>
            </li>
            
        </ul>
    </div>
  )
}

export default FeaturesList