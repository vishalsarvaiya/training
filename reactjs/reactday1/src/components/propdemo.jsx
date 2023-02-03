import React from 'react'
import PropTypes from 'prop-types'

const Propdemo = (props) => {
  return (<>
            <h1>{props.sname}</h1>
            <h1>{props.lname}</h1>
        </>
         )
}

Propdemo.protTypes = {
  sname: ProtTypes.string,
  lname: PropTypes.string
}

Propdemo.defaultProps = {
  sname: 'enter your name',
  lname: 'enter your last name'
};

export default Propdemo


