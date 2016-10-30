// if (bothHands(frame)) {
//
//   details(leftHand);
//   details(rightHand);
//
//   if (leftHand.pitch() < 0 && rightHand.pitch() > 0 && rightHand.grabStrength > 0.2) {
//     elem.src = "pay.jpg";
//     document.getElementById("placehere").appendChild(elem);
//   }
//
//   if (rightHand.pitch() < 0 && rightHand.yaw() < 0 && leftHand.pitch() > 0 && leftHand.roll() > 0) {
//     elem.src = "to.jpg";
//     document.getElementById("placehere").appendChild(elem);
//   }
// }

function details(hand) {
  frameString += hand.type + "<br>";
  // if (hand.pitch() < 0) {
  //   frameString += "pitch: down <br>";
  // }
  //
  // if (hand.pitch() > 0) {
  //   frameString += "pitch: up <br>";
  // }
  //
  // if (hand.roll() > 0) {
  //   frameString += "roll: left <br>";
  // }
  //
  // if (hand.roll() < 0) {
  //   frameString += "roll: right <br>";
  // }
  //
  // if (hand.yaw() > 0) {
  //   frameString += "yaw: top <br>";
  // }
  //
  // if (hand.yaw() < 0) {
  //   frameString += "yaw: bottom <br>";
  // }

  frameString += "pitch: " + Math.round(hand.pitch());
  frameString += "roll: " + Math.round(hand.roll());
  frameString += "yaw: " + Math.round(hand.yaw());

  frameString += "<br>";
}

// var training = "{ input: { lx: " + leftHand.pitch() + ", ly: " + leftHand.roll() + ", lz: " + leftHand.yaw();
// var counter = 0;
// leftHand.fingers.forEach(function(finger) {
//   training += ", leftFinger" + counter + "x: " + finger.dipPosition[0] + ", leftFinger" + counter + "y: " + finger.dipPosition[1]+ ", leftFinger" + counter + "z: " + finger.dipPosition[2];
//   counter += 1;
// })
// training += ", rx: " + rightHand.pitch() + ", ry: " + rightHand.roll() + ", rz: " + rightHand.yaw();
// counter = 0;
// rightHand.fingers.forEach(function(finger) {
//   training += ", rightFinger" + counter + "x: " + finger.dipPosition[0] + ", rightFinger" + counter + "y: " + finger.dipPosition[1]+ ", rightFinger" + counter + "z: " + finger.dipPosition[2];
//   counter += 1;
// })
// training += " }, output: { money: 1 }},";
// console.log(training);

// var result = net.run({lx: leftHand.pitch(), ly: leftHand.roll(), lz: leftHand.yaw(), leftFinger0: leftHand.fingers[0].dipPosition, leftFinger1: leftHand.fingers[1].dipPosition, leftFinger2: leftHand.fingers[2].dipPosition, leftFinger3: leftHand.fingers[3].dipPosition, leftFinger4: leftHand.fingers[4].dipPosition, rx: rightHand.pitch(), ry: rightHand.roll(), rz: rightHand.yaw(), rightFinger0: rightHand.fingers[0].dipPosition, rightFinger1: rightHand.fingers[1].dipPosition , rightFinger2: rightHand.fingers[2].dipPosition, rightFinger3: rightHand.fingers[3].dipPosition, rightFinger4: rightHand.fingers[4].dipPosition});
