  // 模拟网络延时
  function delay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
