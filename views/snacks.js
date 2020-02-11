$("#create_snack").on("click", function () {
    console.log("you got clicked", $("#snack_name").val());
    var newCraving = {
        name: $("#snack_name").val(),
    }
    $.ajax({
        url: "/create",
        type: "post",
        data: newCraving
    }).then(function (data) {
        console.log(data);
    })
})

$("#delete_snack").on("click", function () {
    console.log("you got clicked", $("#delete_name").val());
    var newCraving = {
        name: $("#delete_name").val(),
    }
    $.ajax({
        url: "/delete",
        type: "delete",
        data: newCraving
    }).then(function (data) {
        console.log(data);
    })
})