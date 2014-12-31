(function(){
    GOOGLE_FORM_METHOD = 'POST';
    GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1RilKIhGuEVXSzj0LDguanqL73dv4ncIA9uLGXcC-pmo/formResponse';

    GOOGLE_FORM_FIELD_MAP = {
        'name'    : 'entry.1227069971',
        'email'   : 'entry.1399216896',
        'subject' : 'entry.2147290663',
        'message' : 'entry.579683605'
    };

    function retrieveData () {
        var fields = $('form .field'),
            data = {};

        fields.each(function(i, field){
            data[GOOGLE_FORM_FIELD_MAP[field.name]] = field.value;
        });


        return data;
    }


    function sendForm () {
        var data = retrieveData();

        $.ajax({
            url: GOOGLE_FORM_URL,
            type: GOOGLE_FORM_METHOD,
            data: data,
            dataType: "xml",
            xhrFields: {
              withCredentials: true
            },
            statusCode: {
                0  : whenFormSent,
                200: whenFormSent
            }
        });
    }

    function whenFormSent (){
         var fields = $('form .field'),
             btn    = $('button'),
             text   = btn.text();

        fields.each(function(i, field){
            $(field).val("");
        });

        btn.text('Message Sent!');

        setTimeout(function(){btn.text(text);}, 1000);
    }


    function preventSubmit (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    $(document).ready(function(){
        $('form').on('submit', preventSubmit);
        $('button').on('click', sendForm);
    });

})();



