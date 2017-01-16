function recolor(text, background) {
    var html = document.body.innerHTML
    function replace(regex, replacement_string) {
        html = html.replace(regex, replacement_string);
    }
    replace(/#000000/g, text);
    replace(/#EEEEEE/g, background);
    document.body.innerHTML = html
}
