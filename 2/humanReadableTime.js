
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function whatsTheTime(t) {
    let h = 0;
    let m = 0;
    let s = 0;
  
    if (t >= 3600) {
      h = Math.floor(t / 3600);
      m = Math.floor((t % 3600) / 60);
      s = t - (h * 3600 + m * 60);
    } else if (t > 60) {
      m = Math.floor((t % 3600) / 60);
      s = t - (h * 3600 + m * 60);
    } else {
      s = t;
      if (t == 60) {
        m = m + 1;
        s=0
      }
    }
    h = `${h > 10 ? h : "0" + h}`;
    m = `${m > 10 ? m : "0" + m}`;
    s = `${s > 10 ? s : "0" + s}`;
  
    return `${h <= 0 ? "00" : h}:${m <= 0 ? `00` : m}:${s <= 0 ? `00` : s}`;
  
  }
  
  console.log(whatsTheTime(60));
  