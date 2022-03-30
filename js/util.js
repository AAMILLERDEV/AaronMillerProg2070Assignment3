function doValidate_formAddVehicle(){
    var form = $("#formAddVehicle");
    form.validate({
        rules:{
            txtFirstName:{
                required: true
            },
            txtLastName:{
                required: true
            },
            txtAddress:{
                required: true
            },
            txtCity:{
                required: true
            },
            selectProvince:{
                required: true
            },
            txtPostalCode:{
                required: true,
                postalCodeCheck: true
            },
            txtPhone:{
                required: true,
                phoneCheck: true
            },
            txtEmail:{
                required: true
            },
            txtMake:{
                required: true
            },
            txtModel:{
                required: true
            },
            numYear:{
                required: true
            }

        },
        messages:{
            txtFirstName:{
                required: "Please Enter a first name"
            },
            txtLastName:{
                required: "Please Enter a last name"
            },
            txtAddress:{
                required: "Please Enter an address "
            },
            txtCity:{
                required: "Please Enter a city"
            },
            selectProvince:{
                required: "Please select a province"
            },
            txtPostalCode:{
                required: "Please Enter a postal code",
                postalCodeCheck: "Incorrect Postal Code format, please re-enter"
            },
            txtPhone:{
                required: "Please Enter a phone number",
                phoneCheck: "Incorrect phone number format, please re-enter"
            },
            txtEmail:{
                required: "Please Enter an email address"
            },
            txtMake:{
                required: "Please Enter a Vehicle Make"
            },
            txtModel:{
                required: "Please Enter a model"
            },
            numYear:{
                required: "Please Enter a year"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("postalCodeCheck",
    function(value, element){
        var regexp =  /^\d[A-Z]\d [A-Z]\d[A-Z]$/;
        return this.optional(element) || regexp.test(value);
    },
    "Must be a valid postal code.");

jQuery.validator.addMethod("phoneCheck",
    function(value, element){
        var regexp =  /^\d\d\d-\d\d\d-\d\d\d\d$/;
        var regexp1 = /^[(]\d\d\d[)]\d\d\d-\d\d\d\d$/;
        return this.optional(element) || regexp.test(value) || regexp1.test(value);
    },
    "Must be a valid postal code.");
