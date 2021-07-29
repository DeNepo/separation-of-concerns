debugger; // once when the script is loaded
// JavaScript Drum Kit App

{
  const playingClass = 'playing',
    crashRide = document.getElementById('crash-ride'),
    hiHatTop = document.getElementById('hihat-top');

  const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
  };

  const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
  };

  const playSound = (e) => {
    debugger; // every time a sound is played

    const keyCode = e.keyCode,
      keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    switch (keyCode) {
      case 69:
      case 82:
        animateCrashOrRide();
        break;
      case 75:
        animateHiHatClosed();
        break;
    }

    keyElement.classList.add(playingClass);
  };

  const removeCrashRideTransition = (e) => {
    debugger; // every time ... ?

    if (e.propertyName !== 'transform') return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
  };

  const removeHiHatTopTransition = (e) => {
    debugger; // every time ... ?

    if (e.propertyName !== 'top') return;

    e.target.style.top = '166px';
  };

  const removeKeyTransition = (e) => {
    debugger; // every time ... ?

    if (e.propertyName !== 'transform') return;

    e.target.classList.remove(playingClass);
  };

  const drumKeys = Array.from(document.querySelectorAll('.key'));

  drumKeys.forEach((key) => {
    key.addEventListener('transitionend', removeKeyTransition);
  });

  crashRide.addEventListener('transitionend', removeCrashRideTransition);
  hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

  window.addEventListener('keydown', playSound);
}
