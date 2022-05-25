function solve(speed, area) {
  let status = "";

  if (area === "motorway") {
    let speedLimit = 130;
    if (speed > speedLimit) {
      let diff = Math.abs(speed - speedLimit);
      if (diff <= 20) {
        status = "speeding";
      } else if (diff <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  } else if (area === "interstate") {
    let speedLimit = 90;
    if (speed > speedLimit) {
      let diff = Math.abs(speed - speedLimit);
      if (diff <= 20) {
        status = "speeding";
      } else if (diff <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  } else if (area === "city") {
    let speedLimit = 50;
    if (speed > speedLimit) {
      let diff = Math.abs(speed - speedLimit);
      if (diff <= 20) {
        status = "speeding";
      } else if (diff <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  } else if (area === "residential") {
    let speedLimit = 20;
    if (speed > speedLimit) {
      let diff = Math.abs(speed - speedLimit);
      if (diff <= 20) {
        status = "speeding";
      } else if (diff <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
}
solve(40, "city");
console.log("--------");
solve(21, "residential");
console.log("--------");
solve(120, "interstate");
console.log("---------");
solve(200, "motorway");

// •	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h
// •	Within a residential area, the limit is 20 km/h
// If the driver is within the limits, there should be a printed speed and the speed limit.
//                 `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds.
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
