import { combineReducers } from 'redux';

import ProjectImgReducer from './ProjectImgReducer';
import CurrentProjectReducer from './CurrentProjectReducer';
import ShowOverlayReducer from './ShowOverlayReducer';
import OverlayComponentReducer from './OverlayComponentReducer';
import MessageReducer from './MessageReducer';
import MessageStatusReducer from './MessageStatusReducer';
import ProcessingReducer from './ProcessingReducer';

const rootReducer = combineReducers({
  projectImg: ProjectImgReducer,
  currentProject: CurrentProjectReducer,
  showOverlay: ShowOverlayReducer,
  overlayComponent: OverlayComponentReducer,
  message: MessageReducer,
  messageStatus: MessageStatusReducer,
  processing: ProcessingReducer
});

export default rootReducer;
