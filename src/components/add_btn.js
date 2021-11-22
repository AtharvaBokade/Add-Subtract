import React from 'react';



function Add(props){
    return(
        <button type="button" className="btn btn-success" onClick= {props.Add_num}>Add</button>
    );
}
export default Add;