import React from 'react';
import FilterLink from '../containers/filterLink';
const Footer=()=>(
    <p>
    show:
    {' '}
    <FilterLink filter="SHOW_ALL">
        SHOW_ALL
    </FilterLink>
    {','}
    <FilterLink filter="SHOW_ACTIVE">
        SHOW_ACTIVE
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
   </p>     
)
export default Footer