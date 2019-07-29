import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'customPassword', function(errorMsg) {
    return  this.test('customPassword', '', function (value) {
        // console.log('value', value);
        // console.log('errorMsg', errorMsg)
        const isValid = value && value!== '' && !isNaN(Number(value));
        if (!isValid) {
            console.log('not validation');
            return this.createError({ message: errorMsg, path: 'customPassword' });
        }
        
        return true;
    })
});


export default Yup;