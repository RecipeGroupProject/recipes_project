/**
 * Use bootstrap-select to enhance the functionality of dropdown on this page.
 *
 *
 * Here's what this you will need to do:
 *
 * 1. Inlclude the following DataTables css in layout.ejs
 *    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css">
 *
 * 2. Include the following bootstrap-select JavaScript in layout.ejs
 *    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js"></script>
 *
 * 3. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 4. Use the live search functionality to make the dropdown searchable
 *
 * 5. Add the user glyphicons next to each student in the list
 *
 * 7. Add a menu header to the dropdown
 *
 * 8. Customize further with anything you find intersting
 *
 * Here's the documentation you need:
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 *
 */

 (function(){

   $(function(){

   })

     $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
      });

      $("#id").change(function() {

        $.get('http://localhost:1337/' + $('#id').find("option:selected").val(), function (thisRecipe) {
          // thisRecipe
          let template
          for (let ingredient of thisRecipe.ingredients) {
           template += `
           <td><form method="POST" action="/:id/ingredient/${ingredient.id}/delete"><button type="submit">Delete</button></form></td>
           <td>${ingredient.food_name}</td>
           <td>${ingredient.units}</td>
           <td>${ingredient.quantity}</td>
          `
         }
          $('#ingredientsTable tbody').html(template)

          $('#ingredientsTable').DataTable({
            dom: 'Bfrtip',
              buttons: [
                  'copy', 'csv', 'excel', 'pdf', 'print'
              ],
              colReorder: true,
              scrollX: true
          });
        })

      })

 })();
