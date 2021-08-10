const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const refs = {
    body: document.body,
    start: document.querySelector('button[data-action = "start"]'),
    stop: document.querySelector('button[data-action = "stop"]')
  }
  const NOTIFICATION_DELAY = 1000;
  let intervalId = null;

  refs.start.addEventListener('click', startColorChange);
  refs.stop.addEventListener('click', stopColorChange);

  function startColorChange() {
    intervalId = setInterval(() => {
    refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, NOTIFICATION_DELAY);
    refs.start.disabled = true;
  }

  function stopColorChange() {
    clearInterval(intervalId);
    refs.start.disabled = false;
  }