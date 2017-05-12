export const toggleOverlay = ({ overlay, component, project }) => ({
  type: 'TOGGLE_OVERLAY',
  payload: { overlay, component, project }
});
