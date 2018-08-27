import { connect } from 'react-redux'
// import { bindActionCreators, Dispatch } from 'redux'
import { AttributeComponent } from "../components/AttributeComponent";
import { State } from '../reducers';
import { getAttributes } from "../selectors";


const mapStateToProps = (state: State) => ({
    attributes: getAttributes(state)
})


// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
//   actions: bindActionCreators(TodoActions, dispatch)
// })

export default connect<any, any, any>(
    mapStateToProps,
    null
)(AttributeComponent)
