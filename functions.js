function searchFor() {
    var input, filter, ul, li, a, i;
    input = window.document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchOptions");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
