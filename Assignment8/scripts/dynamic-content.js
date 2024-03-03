// image rotation function using jQuery
function rotateImg(rotationAngle, rotationRate){
  var rotationAngle = parseInt(document.getElementById("rotationAngle").value);
  var rotationRate = parseInt(document.getElementById("rotationRate").value);
  var angle = ($('#rotatingImage').data('angle') + rotationAngle) || rotationAngle;
  $('#rotatingImage').css({'transform': 'rotate(' + angle + 'deg)'});
  $('#rotatingImage').data('angle', angle);
  $('#rotatingImage').css({transition: 'all ' + rotationRate + 's ease'});
}

// image background color change function using pure JavaScript
function changeImageBackgroundColor(){
  currentImageBackgroundColor = document.getElementById("colorChangingImage").style.backgroundColor;
  console.log('color was ' + currentImageBackgroundColor);

  if ( currentImageBackgroundColor == "" ){
       document.getElementById("colorChangingImage").style.backgroundColor = "rgb(241, 2, 255)"
       currentImageBackgroundColor = document.getElementById("colorChangingImage").style.backgroundColor;
  }

  else if ( currentImageBackgroundColor == "rgb(255, 255, 255)" ){
       document.getElementById("colorChangingImage").style.backgroundColor = "rgb(241, 2, 255)"
       currentImageBackgroundColor = document.getElementById("colorChangingImage").style.backgroundColor;
  }

  else if ( currentImageBackgroundColor == "rgb(241, 2, 255)" ){
       document.getElementById("colorChangingImage").style.backgroundColor = "rgb(255, 255, 255)";
       currentImageBackgroundColor = document.getElementById("colorChangingImage").style.backgroundColor;
  }

  // currentImageBackgroundColor = document.getElementById("colorChangingImage").style.backgroundColor;
  console.log('color changed to ' + currentImageBackgroundColor)
}
