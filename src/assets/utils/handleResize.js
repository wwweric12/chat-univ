export const handleResize = (setHeight) => {
  const handleResize = () => {
    setHeight(window.innerHeight);
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
