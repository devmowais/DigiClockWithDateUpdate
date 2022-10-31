
const clock = {
    wd: document.getElementById('wd'),
    md: document.getElementById('md'),
    mn: document.getElementById('mn'),
    yr: document.getElementById('yr'),
    hrs: document.getElementById('h'),
    mins: document.getElementById('m'),
    sec: document.getElementById('s'),
    ampm: document.getElementById('ampm')
}

function clockUpdate() {

    let dat = new Date();
    let mdays = dat.getDate();
    let h = dat.getHours();
    let m = dat.getMinutes();
    let s = dat.getSeconds();
    let y = dat.getFullYear();
    let AMPM = 'AM';


    if (mdays == '1') {
        mdays = mdays + 'st';
    } else
        if (mdays == '2') {
            mdays = mdays + 'nd';
        } else
            if (mdays == '3') {
                mdays = mdays + 'rd';
            } else
                if (mdays == '21') {
                    mdays = mdays + 'st';
                } else
                    if (mdays == '22') {
                        mdays = mdays + 'nd';
                    } else
                        if (mdays == '23') {
                            mdays = mdays + 'rd';
                        } else
                            if (mdays == '31') {
                                mdays = mdays + 'st';
                            } else {
                                mdays = mdays + 'th';

                            }

    // h.insertAdjacentHTML('afterend', '<span>:</span>');
    // m.insertAdjacentHTML('afterend', '<span>:</span>');
    // h.insertAdjacentHTML('afterend', '<span>:</span>');

    const getWeekday = ['Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'][dat.getDay()];

    let getMonthName = ['January,', 'February,', 'March,', 'April,', 'May,', 'June,', 'July,', 'August,', 'September,', 'October,', 'November,', 'December,'][dat.getMonth()];

    if (h > 12) {
        h = h - 12;
        AMPM = "PM"
    }

    //ternary operators

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    clock.wd.innerText = getWeekday;
    clock.md.innerText = mdays;
    clock.mn.innerText = getMonthName;
    clock.yr.innerText = y;
    clock.hrs.innerText = h;
    clock.mins.innerText = m;
    clock.sec.innerText = s;
    clock.ampm.innerText = AMPM;



    setTimeout(() => {
        clockUpdate();
    }, 1000);
}
clockUpdate();