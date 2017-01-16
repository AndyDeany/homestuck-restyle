function replace(regex, replacement_string, body=true) {
    if (body) {
        document.body.innerHTML = document.body.innerHTML.replace(regex, replacement_string);
    } else {
        document.head.innerHTML = document.head.innerHTML.replace(regex, replacement_string);
    }
}

function color(text, background, backdrop) {
    replace(/#000000/g, text);
    replace(/#EEEEEE/g, background);
    replace(/#535353/, backdrop, false);
}

function font_type(link, text) {
    replace(/font-family: Verdana/, "font-family: " + link);
    replace(/font-family: courier/g, "font-family: " + text);
}

function font_size(pixels) {
    replace(/font-size: 14px;/, "font-size: " + pixels);
}
