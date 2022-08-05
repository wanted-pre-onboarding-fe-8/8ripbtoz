export function debounce(action: () => void, delay = 300) {
  let timer: NodeJS.Timeout | null = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      action();
    }, delay);
  };
}
