var tl = new TimelineMax(),
    replay = document.getElementById("replay");

tl.from(".elections", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 50})
    .from(".white", 0.5, {opacity: 0})
    .from(".orange", 0.5, {opacity: 0}, '-=0.3')
    .from(".by_el", 0.5, {opacity: 0}, '-=0.3')
    .from(".ticket", 0.5, {alpha: 0, ease: Back.easeInOut.config(1.4), y: -20}, '-=0.2')
    .to(".circle", 0.3, {ease: Power4.easeOut, x: -75})
    .from(".text_1_1", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45})
    .from(".text_1_2", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45})
    .to(".text_1_1", 0.3, {alpha: 0, delay: 1, ease: Back.easeInOut.config(1.4), x: -45})
    .to(".text_1_2", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45}, '+=.2')
    .to(".ticket", 0.5, {alpha: 0, ease: Back.easeInOut.config(1.4), y: -20}, '-=0.2')
    .to(".by_el", 0.3, {scale: 0, opacity: 0})
    .to(".white-orange", 0.3, {scale: 0, opacity: 0})
    .to(".white", 0.3, {scale: 1, opacity: 1})
    .to(".orange", 0.3, {scale: 1, opacity: 1})
    .from(".silhouette", .3, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 30})
    .from(".dialog", .3, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 0}, '-=.1')
    .from(".text_2_1", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45})
    .from(".text_2_2", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45})
    .from(".text_2_3", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45})
    .to(".text_2_1", 0.3, {alpha: 0, delay: 1, ease: Back.easeInOut.config(1.4), x: -45})
    .to(".text_2_2", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45}, '+=.2')
    .to(".text_2_3", 0.3, {alpha: 0, ease: Back.easeInOut.config(1.4), x: -45}, '+=.2')
    .to(".s-d", .1, {scale: 0, opacity: 0})
    .to(".circle", 0.3, {ease: Power4.easeOut, x: 0})
    .from(".enrol", .2, {opacity: 0}, '-=.3')
    .to(".elections", 0.1, {opacity: 0}, '-=.3')
    .from(".last", .3, {alpha: 0, ease: Back.easeInOut.config(1.4), y: 30})
    .from("#replay", .1, {opacity: 0});
replay.onclick = function () {
    tl.play(0);
}

