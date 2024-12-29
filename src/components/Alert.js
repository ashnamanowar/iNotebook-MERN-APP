import React from 'react';

function Alert(props) {
  const capitalize=(word)=>{
    if(word==="danger"){
      word="error"
    }
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} fixed-top alert-dismissible fade show`}
          role="alert"
          style={{
            zIndex: '1050',
            top: '10px',   
            left: '50%',
            transform: 'translateX(-50%)', 
          }}
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </>
  );
}

export default Alert;
