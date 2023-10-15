import React from 'react';
import loading from './loading.gif'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Spinner=()=>  {


   
        return <div  className='my-3 text-center'>
            <img src={loading} alt="loading" />
        </div>;
    
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
// #endregion

export default Spinner;