

function ErrorHandler(err, req, res, next) {

    // اگر از express-validation استفاده کنیم دیگه به همین راحتی به متن ارور دسترسی نداریم
    // برای حل این مسعله باید روز ارورها حلقه بزنیم و متن ارور رو بگیریم 
    // این کد فقط برای express-validation
    const validationManager = (error) => {
        const {details} = error;
        let invalidParams = {};

        if (details?.body?.length) {
            for (const item of details.body) {
                invalidParams[item.context.key] = item.message
            }
            return invalidParams
        }
        return invalidParams
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // این هم مثل کد بالاست فقط برای Joi
    const JoiManager = (error) => {
        const {details} = error;
        let invalidParams = {};

        if (details?.length) {
            for (const item of details) {
                invalidParams[item.context.key] = item.message
            }
            return invalidParams
        }
        return invalidParams
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    return res.json({
        statusCode: err.status || 500,
        error: {
            message: err.message.replaceAll('"', "").replaceAll("\\", ""),
            invalidParams: err.error, // برای express-validator
            // invalidParams: validationManager(err), // برای express-validation
            // invalidParams: JoiManager(err), // برای JOi
        }
    })
}

module.exports = {ErrorHandler}