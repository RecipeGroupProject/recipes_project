(function() {

  $(function() {

    var recipeID;
    var description;
    var preparation_time;
    var instructions;
    var ingredients;


    // $('.selectpicker').selectpicker({
    //   style: 'btn-info',
    //   size: 4
    // });

    $('#recipeTable2').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ],
      colReorder: true,
      "scrollX": true
    });


  })

  // $('.view-recipe').click(function() {
  //   recipeID = $(this).parents('tr').data('id');
  //   description = $('.recipe_description', $(this).parents('tr')).html();
  //   preparation_time = $('.recipe_preparation_time', $(this).parents('tr')).html();
  //
  //
  //
  //   $.get("/recipes/" + recipeID, data => {
  //     let recipe = data;
  //
  //     $("#blah").html('')
  //     $(".modal-title").html('')
  //     $(".modal-title").append(recipeID + " " + description)
  //
  //     $("#blah").append(`
  //       <div class="dialog">
  //         <p>Recipe: ${recipe.title}</p>
  //         <p>Preparation Time: ${recipe.num_min}</p>`)
  //
  //     for (let i = 0; i < recipe.length; i++) {
  //       $("#blah2").append(`
  //         <p>Recipe: ${recipe.title}</p>
  //         <p>Ingredients: ${recipes.ingredients[i].food_name}</p>
  //         </div>
  //       `)
  //     }
  //     $('#cardWindow').modal('show');
  //   })
  // })
})();
