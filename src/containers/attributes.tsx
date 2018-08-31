import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AttributeSectionComponent } from "../components/Attributes/AttributeSectionComponent";
import { State } from '../reducers';
import { getAttributes } from "../selectors";
import { Action, updateAttribute } from '../actions';


const mapStateToProps = (state: State) => ({
    attributes: getAttributes(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    updateAttribute: bindActionCreators(updateAttribute, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributeSectionComponent)
