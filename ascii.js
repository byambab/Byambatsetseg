
var timeout;
var currentFrame;
var animationType;
var animations;

function onClickStart() {
  $('#btn-start').attr('disabled', true);
  $('#btn-stop').attr('disabled', false);
 
  currentFrame = 0;
  if (!animationType) {
    animationType = $('#combo-animation option:selected').val();
  }

  // Access ANIMATIONS
  if (!animations) {
    animations = ANIMATIONS[animationType].split('=====\n');
  }

  const textArea = $('#mytextarea');
  timeout = setTimeout(function() { doAnimation(textArea); }, calculateInterval());
}

function onClickStop() {
  $('#btn-start').attr('disabled', false);
  $('#btn-stop').attr('disabled', true);
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
}

function calculateInterval() {
  const isTurbo = $('#cbox-turbo').is(':checked');
  let interval = 250;
  if (isTurbo) {
    interval = 50;
  }
  return interval;
}

//////////////////////////////////////////

function doAnimation(textArea) {
  const len = animations.length;
  if (len > 0) {
    const displayContent = animations[currentFrame];
    if (displayContent) {
      textArea.val(displayContent);
      currentFrame++;
      if (currentFrame >= len) {
        currentFrame = 0;
      }
    }
  }
  timeout = setTimeout(function() { doAnimation(textArea); }, calculateInterval());
}

function onChangeAnimation(element) {
  animationType = element.value;
  const value = ANIMATIONS[animationType];
  if (value) {
    const array = value.split('=====\n');
    if (array && array.length > 0) {
      currentFrame = 0;
      animations = array;
    }
  }
}

function onChangeSize(element) {
  $('#mytextarea').css('font-size', element.value);
}



