/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function(){

  $(function(){

        $("#addRecipeForm").validate({
          rules: {
            recipe_name: {
              required: true,
            },
            recipe_des: {
              required: true
            },
            perp_time: {
              required: true
            }
            // },
            // ingredient_list: {
            //   // required: true
            // }
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
            // },
            // isPremium: {
            //   required: "We require a true or false"
            // }
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
