import React from 'react';

const ToDo=(props)=>{

    
    
    return <div>
        <div>

        </div>
        <li>
            <button 
                onClick={()=>{
                    props.onSelect(props.id)
                }}>
                    *
            </button>
            {props.text}
        </li>
    </div>
};

export default ToDo;