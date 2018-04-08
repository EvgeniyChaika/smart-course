export const ACTIVE_BUTTON = 'ACTIVE_BUTTON';

export function headerActions(index) {
  return {
    type: ACTIVE_BUTTON,
    activeIndex: index
  };
}
