import {connect} from 'react-redux';
import Link from '../components/link';
import {setVisibilityFilter} from '../actions'

const mapStateToProps=(state,ownProps)=>{
    return {
        active: state.visibilityFilter===ownProps.filter
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
   return {
       onClick:()=>dispatch(setVisibilityFilter(ownProps.filter))
   }
}
const FilterLink=connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
export default FilterLink;