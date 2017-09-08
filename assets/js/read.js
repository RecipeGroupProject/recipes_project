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

      $('#table1').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        colReorder: true,
        "scrollX": true
      });


    })

    $('.view-recipe').click(function() {
        recipeID = $(this).parents('tr').data('id');
        // description = $('.recipe_description', $(this).parents('tr')).html();
        // preparation_time = $('.recipe_preparation_time', $(this).parents('tr')).html();



        $.get("/recipes/" + recipeID, recipe => {

            $("#details").html('')
            $(".modal-title").html('')
            $(".modal-title").append(recipe.id + " " + recipe.description)

            let detailsStuff = `
              <div class="dialog">
                <p>Recipe: ${recipe.title}</p>
                <p>Description: ${recipe.description}</p>
                <p>Preparation Time: ${recipe.num_min}</p>
                <p>Instructions: `

            for (instruction of recipe.instructions) {
              detailsStuff += `${instruction.description}, `
            }

            detailsStuff += `
                </p>
                <p>Ingredients: `

            for (ingredient of recipe.ingredients) {
              detailsStuff += `${ingredient.food_name}, `
            }

            detailsStuff += `
                </p>
              </div>
              `

            $('#details').append(detailsStuff)
            $('#cardWindow').modal('show');
        })
    })
})();
