function removeTransition() {
 this.classList.remove("active")
}

const keys = document.querySelectorAll(".key")
keys.forEach((key) => key.addEventListener("transitionend", removeTransition))

function playSound(e) {
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

 if (!audio) return
 key.classList.add("active")
 audio.currentTime = 0
 audio.play()
}

window.addEventListener("keydown", playSound)
