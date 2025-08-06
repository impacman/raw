export const useTouch = (link) => {
  const swipeElements = document.querySelectorAll('[data-touch]');
  const threshold = 50;

  const handleSwipe = (startX, endX, onSwipeLeft, onSwipeRight) => {
    if (endX < startX - threshold) {
      onSwipeLeft();
    } else if (endX > startX + threshold) {
      onSwipeRight();
    }
  };

  swipeElements.forEach((element) => {
    let touchStartX = 0;
    let touchEndX = 0;

    const onSwipeLeft = () => element.click();
    const onSwipeRight = () => element.click();

    element.addEventListener(
      'touchstart',
      (event) => {
        touchStartX = event.changedTouches[0].screenX;
      },
      { passive: true }
    );

    element.addEventListener(
      'touchend',
      (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe(touchStartX, touchEndX, onSwipeLeft, onSwipeRight);
      },
      { passive: true }
    );

    element.addEventListener('mousedown', (event) => {
      touchStartX = event.screenX;
    });

    element.addEventListener('mouseup', (event) => {
      touchEndX = event.screenX;
      handleSwipe(touchStartX, touchEndX, onSwipeLeft, onSwipeRight);
    });

    element.addEventListener('mouseleave', (event) => {
      if (touchStartX !== 0) {
        touchEndX = event.screenX;
        handleSwipe(touchStartX, touchEndX, onSwipeLeft, onSwipeRight);
      }
    });

    element.addEventListener('mousemove', (event) => {
      if (touchStartX !== 0) {
        touchEndX = event.screenX;
      }
    });
  });
};
