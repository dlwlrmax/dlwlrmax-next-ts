export const throttleFunc = (func: any, delay: number) => {
  let shouldWait = false;
  let waitingArgs: any;
  const timeoutFunc = (): any => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      func(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };
  return (...args: any[]) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    func(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
};

export const intersectionObserverFunc = (
  func: CallableFunction,
  threshold: number,
  repeatable = false
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          //handle animate
          func(true);
        }
        if (repeatable && !entry.isIntersecting) {
          func(false);
        }
      }
    },
    {
      threshold: threshold
    }
  );
  return observer;
};
