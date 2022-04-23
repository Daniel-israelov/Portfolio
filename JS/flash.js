document.querySelector("a[href='#projects-header']").addEventListener('click', function () { blink('projects-section') });
document.querySelector("a[href='#about-header']").addEventListener('click', function () { blink('about-section') });
document.querySelector("a[href='#recruiter-header']").addEventListener('click', function () { blink('recruiters-section') });
document.querySelector("a[href='#cv-header']").addEventListener('click', function () { blink('cv-links') });
document.querySelector("a[href='#footer']").addEventListener('click', function () { blink('footer') });

function blink(tag_id) {
    let ofs = 0;
    const tag = document.getElementById(tag_id);

    const interval = window.setInterval(function () {
        tag.style.background = 'rgba(213, 214, 230,' + Math.abs(Math.sin(ofs)) + ')';
        ofs += 0.01;
    }, 5);

    setTimeout(() => {
        clearInterval(interval);
        tag.style.background = 'rgba(255, 255, 255, 0)';
    }, 1500);
}