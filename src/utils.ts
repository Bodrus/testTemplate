export const getIconSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 20;
    case 'medium':
      return 30;
    case 'large':
      return 40;
    default:
      return 30;
  }
};
