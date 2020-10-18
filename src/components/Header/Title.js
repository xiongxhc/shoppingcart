import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

const Title = ({text}) => {
    return (
        <div>
            <Link to='/'>{text}</Link>
        </div>
     );
}
 
export default Title;