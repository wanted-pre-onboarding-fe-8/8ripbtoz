export function debounce<T>(action: (value: T) => void, delay = 300) {
  let timer: NodeJS.Timeout | null = null;
  return function (value: T) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      action(value);
    }, delay);
  };
}
