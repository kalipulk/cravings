$(document).ready(function () {
console.log("snacks.js is loaded");

    $("#create_snack").on("click", function () {
        console.log("you got clicked", $("#snack_name").val());
        var newCraving = {
            name: $("#snack_name").val(),
        }
        $.ajax({
            url: "/cravings/create",
            type: "post",
            data: newCraving
        }).then(function (data) {
            console.log("saved a new snack", data);
            window.location.reload();
        })
    })

    $(".eat_snack").on("click", function () {
        console.log("you got clicked", $(this).attr("snackid"));
        event.preventDefault();

        $.ajax({
            url: "/cravings/" + $(this).attr("snackid"),
            type: "put",
        }).then(function (data) {
            console.log(data);
            window.location.reload();
        })
    })

    $(".delete_snack").on("click", function () {
        console.log("you got clicked", $(this).attr("snackid"));
        event.preventDefault();

        $.ajax({
            url: "/cravings/" + $(this).attr("snackid"),
            type: "delete",
        }).then(function (data) {
            console.log(data);
            window.location.reload();
        })
    })

});