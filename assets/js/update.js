
 (function(){

   $(function(){

     $("#updateRecipeForm :input").prop("disabled", true);

     $('#recipe_id').selectpicker({
        style: 'btn-info',
        size: 8
     });

     let currentRecipe

    $("#recipe_id").change(function () {


          currentRecipe = $(this).val()

           $.get("http://localhost:1337/recipes/" + currentRecipe, function(recipe){


             $.each(recipe, function(key, val){

                 let el = $('[name="'+key+'"]');
                 let type = el.attr('type');

                 switch(type){
                     case 'checkbox':
                         el.attr('checked', 'checked');
                         break;
                     case 'radio':
                         el.filter('[value="'+val+'"]').attr('checked', 'checked');
                         break;
                     default:
                         el.val(val);
                 }
              });
           })
           $("#updateRecipeForm :input").prop("disabled", false);
         })

         $("#updateRecipeButton").click(function(e){

           e.preventDefault()

            $.ajax({
            url: "http://localhost:1337/recipes/" + currentRecipe,
            data: $("#updateRecipeForm").serialize(),
            type: 'PUT',
            success: function(result) {
                alert("Successfully Changed")
            }
            });
         $("#updateRecipeForm :input").prop("disabled", true);
         })
         $("#updateRecipeForm").validate({
            rules: {
         recipe_name: {
           required: true,
         },
         description: {
           required: true
         },
         perp_time: {
           required: true
         }
       },
       messages: {
         recipe_name: {
           required: "We require a recipe name"
         },
         recipe_des: {
           required: "We require a recipe description"
         },
         prep_time: {
           required: "We require a preparation time"
         }
      },
        highlight: function (element) {
            $(element).parent().addClass('error')
        },
        unhighlight: function (element) {
            $(element).parent().removeClass('error')
        }
    });

   })

 })();
