export const toggleOverlay = ({ overlay, component, project }) => ({
  type: 'TOGGLE_OVERLAY',
  payload: { overlay, component, project }
});

export const changeProcessing = isProcessing => ({
  type: 'CHANGE_PROCESSING',
  payload: isProcessing
});
