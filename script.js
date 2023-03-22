const markAllRead = document.querySelector(".mark-as-read");
const unreadMsg = document.querySelectorAll(".unread-msg");

// Removes the red notification mark on unread messages
function removeRedBadge() {
  const redBadge = document.querySelectorAll(".red-badge");
  redBadge.forEach(function (badge) {
    badge.classList.remove("red-badge");
  });
}

// Makes the background of unread messages white
function readMsg() {
  const unreadMsg = document.querySelectorAll(".unread-msg");
  unreadMsg.forEach((unreadMsg) => {
    if (unreadMsg.getElementsByClassName.backgroundColor != `var(--white)`)
      unreadMsg.style.backgroundColor = `var(--white)`;
  });
}

// Clicking on Mark as read makes the background of unread messages white
// Function that removes the red notification mark and resets the notification count
markAllRead.addEventListener("click", () => {
  const notifCount = document.querySelector(".notif-numb");
  notifCount.innerText = "0";
  removeRedBadge();
  readMsg();
});

// Function that marks users' messages as read by clicking one by one
function singleRemove(e) {
  const clickedUser = e.currentTarget;
  clickedUser.style.backgroundColor = `var(--white)`;
  const singleRedBadge = clickedUser.querySelector(".red-badge");
  singleRedBadge.classList.remove("red-badge");
}

// Function that decrease the number of notifications when the message is read
function decreaseCounter() {
  let counter = document.querySelector(".notif-numb");
  let notifCounter = parseInt(counter.textContent);
  if (notifCounter > 0) {
    Math.max(0, (notifCounter -= 1));
  }
  counter.textContent = notifCounter.toString();
}

unreadMsg.forEach(function (clickMsg) {
  clickMsg.addEventListener("click", singleRemove);
  clickMsg.addEventListener("click", decreaseCounter);
});
