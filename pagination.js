var currPage = 1,

total = 22;

function pagination(num, limit, range) {

    range = range || 3;

    var arr = [];

    for (var i = 1; i <= limit; i++)

        if (i <= range || i > num - range / 2 && i < num + range / 2 || i > limit - range) {

            if (arr[arr.length - 1] && i != arr[arr.length - 1] + 1) arr.push("...");

            arr.push(i)

        }

    return arr

}

 

function generateItems() {

    var items = pagination(currPage, total);

    items = items.map(function(el) {

        return el == currPage ? '<span class="cur" >' + el + "</span>" : el == "..." ? el : '<a class="page" data-page="' + el + '">' + el + "</a>"

    }).join("");

    $("#pager").html('<a class="prev">prev</a>' + items + '<a class="next">next</a>');

    $("#curr-page").text(currPage)

}

 

$(".pager").on("click", ".page", function(event) {

    event.preventDefault();

    currPage = $(this).data("page");

    generateItems()

});

 

$(".pager").on("click", ".prev,.next", function(event) {

    event.preventDefault();

    $(this).is(".prev") ? currPage-- : currPage++;

    currPage < 1 && (currPage = 1);

    currPage > total && (currPage = total);

    generateItems()

});

generateItems();
