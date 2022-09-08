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
