import { connect } from "react-redux";
import Power from "./power";

// Actions
import { receivePower } from "../../actions/power_actions";
import { allPower } from "../../reducers/selectors";

const mapStateToProps = state => ({
  power: allPower(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receivePower: todo => dispatch(receivePower(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Power);
