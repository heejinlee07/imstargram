export const infiniteScroll = (target, event) => {
  if (!target) return;
  console.log(target);

  const options = {
    root: null,
    rootMargin: '1px',
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    const { target, isIntersecting } = entries[0];
    console.log(target, isIntersecting);
    if (isIntersecting) observer.unobserve(target);
  }, options);

  observer.observe(target);

  console.log(observer);
};
