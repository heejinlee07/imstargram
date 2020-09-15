export const infiniteScrollObserver = (target, event = () => {}) => {
  if (!target) return;

  const options = {
    root: null,
    rootMargin: '1px',
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    const { target, isIntersecting } = entries[0];
    console.log(target, isIntersecting);
    if (!isIntersecting) return;
    observer.disconnect();
    event();
  }, options);

  observer.observe(target);
};
