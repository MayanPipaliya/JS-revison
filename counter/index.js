const instagram = () => {
    let count = 0;
    let instacount = parseInt(document.getElementById("instagram-counter").innerHTML, 10);

    let insta = setInterval(() => {
        count++;
        document.getElementById("instagram-counter").innerHTML = count;
        if (count === instacount) {
            clearInterval(insta);
        }
    }, 10);
}

const linkedin = () => {
    let count = 0;
    let linkedincount = parseInt(document.getElementById("linkedin-counter").innerHTML, 10);

    let link = setInterval(() => {
        count++;
        document.getElementById("linkedin-counter").innerHTML = count;
        if (count === linkedincount) {
            clearInterval(link);
        }
    }, 10);
}

const facebook = () => {
    let count = 0;
    let facebookcount = parseInt(document.getElementById("facebook-counter").innerHTML, 10);

    let facebook1 = setInterval(() => {
        count++;
        document.getElementById("facebook-counter").innerHTML = count;
        if (count === facebookcount) {
            clearInterval(facebook1);
        }
    }, 10);
}

instagram();
linkedin();
facebook();
