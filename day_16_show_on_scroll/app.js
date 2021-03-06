let elToShow = document.querySelectorAll('.show-on-scroll');

let isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    let viewHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        (rect.top <= 0) && (rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
    );
};

function loop() {
    elToShow.forEach(element => {
        if (isElInViewPort(element)) {
            element.classList.add('start');
        } else {
            element.classList.remove('start');
        }
    });
}

window.onscroll = loop;

loop();