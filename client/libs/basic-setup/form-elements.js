var FormElements = function () {
      
    //function to initiate Select2
    var runSelect2 = function () {
        $(".search-select").select2({
            placeholder: "Select a State",
            allowClear: true
        });
    };
   
    return {
        //main function to initiate template pages
        init: function () {
            runSelect2();
           
        }
    };
}();