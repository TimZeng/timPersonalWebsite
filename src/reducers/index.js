import { combineReducers } from 'redux';

import ProjectImgReducer from './ProjectImgReducer';
import CurrentProjectReducer from './CurrentProjectReducer';
import ShowOverlayReducer from './ShowOverlayReducer';
import OverlayComponentReducer from './OverlayComponentReducer';

const rootReducer = combineReducers({
  projectImg: ProjectImgReducer,
  currentProject: CurrentProjectReducer,
  showOverlay: ShowOverlayReducer,
  overlayComponent: OverlayComponentReducer
});

export default rootReducer;
