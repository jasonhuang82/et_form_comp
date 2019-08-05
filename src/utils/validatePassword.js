import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'customPassword', function(errorMsg) {
    // test(name: string, defaultErrorMessage: string | function, test: function)
    return  this.test('customPassword', 'customPassword no Validate', function (value) {
        const isValid = value && value!== '' && !isNaN(Number(value));
        if (!isValid) {
            return this.createError({
                message: errorMsg,
                // path: 'customPassword',
            });
        }
        return true;
    })
});


export default Yup;