(function() {
  let timeId;
  let prvVal;
  let stop;
  const NORMALSPEED = 250;
  const TURBOSPEED = 50;
  let timeInterval = NORMALSPEED;
  let text;
  let idx;

  function changeContent() {
      document.getElementById('mytextarea').value = text[idx];
      idx = (idx + 1) % text.length;
      if (!stop)
          setTimeout(changeContent, timeInterval);
  };

  function disableInputs(truth) {
      document.getElementById('btnstart').disabled = truth;
      document.getElementById('btnstop').disabled = !truth;
      document.getElementById('comboanimation').disabled = truth;
      document.getElementById('mytextarea').readOnly = truth;
  };

  function startClick() {
      prvVal = document.getElementById('mytextarea').value;
      text = prvVal.split("=====\n");
      idx = 0;
      stop = false;
      setTimeout(changeContent, timeInterval);
      disableInputs(true);
  };

  function stopClick() {
      stop = true;
      setTimeout(function() {
          document.getElementById('mytextarea').value = prvVal;
      }, timeInterval);
      disableInputs(false);
  };

  function animationChange() {
      let animType = document.getElementById('comboanimation').value;
      document.getElementById('mytextarea').value = ANIMATIONS[animType];
  }

  function speedChange() {
      if (document.getElementById('cboxturbo').checked) {
          timeInterval = TURBOSPEED;
      } else
          timeInterval = NORMALSPEED;
  }

  function sizeChange() {
      document.getElementById('mytextarea').style.fontSize = document
          .getElementById('combosize').value;
  }

  window.onload = function() {
      document.getElementById('btnstart').onclick = startClick;
      document.getElementById('btnstop').onclick = stopClick;
      document.getElementById('comboanimation').onchange = animationChange;
      document.getElementById('cboxturbo').onchange = speedChange;
      document.getElementById('combosize').onchange = sizeChange;
  };
})();