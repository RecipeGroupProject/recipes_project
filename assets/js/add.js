
let ing_name
let ing_unit
let ing_quan
let ins
let step = 0
let id

$("#ing_add").click(function(e){
    ing_name = $("#ingredient_name").val()
    ing_unit = $("#unit_of_measure").val()
    ing_quan = $("#quantity").val()
    e.preventDefault()
    $("#ing_list").append(`
        <tr>
            <td>${ing_name}</td>
            <td>${ing_unit}</td>
            <td>${ing_quan}</td>
        </tr>
    `);
    $('#addIngForm')[0].reset();
})

$("#ins_add").click(function(e){
    ins = $("#instruction").val()
    step += 1
    e.preventDefault()
    $("#ins_list").append(`
        <tr>
            <td>${step}.</td>
            <td>${ins}</td>
        </tr>
    `);
    $('#addInsForm')[0].reset();
})
