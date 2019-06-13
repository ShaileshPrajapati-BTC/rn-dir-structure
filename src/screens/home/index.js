import {connect} from 'react-redux'
import {getAssets} from './actions';

import HomeScreen from './homeScreen';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  getAssets
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
