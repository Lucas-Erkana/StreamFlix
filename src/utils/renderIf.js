const RenderIf = ({ children, isTrue }) => {
  return isTrue ? children : null;
};

export default RenderIf;
