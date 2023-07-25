import joi from 'joi'

export const signupSchema = joi.object({
    name: joi.string(),
    email: joi.string().email().required().messages({
        "string.base": `"email" phải là kiểu "text"`,
        "string.empty": `"email" không được bỏ trống`,
        "string.email": `"email" phải có định dạng là email`,
        "any.required": `"email" là trường bắt buộc`,
    }),
    password: joi.string().min(6).required().messages({
        "string.base": `"password" phải là kiểu "text"`,
        "string.empty": `"password" không được bỏ trống`,
        "string.min": `"password" phải chứa ít nhất {#limit} ký tự`,
        "any.required": `"password" là trường bắt buộc`,
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.base": `"confirmPassword" phải là kiểu "text"`,
        "string.empty": `"confirmPassword" không được bỏ trống`,
        "any.only": `"confirmPassword" phải giống "password"`,
        "any.required": `"confirmPassword" là trường bắt buộc`,
    }),
});

export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty": 'Trường "email" không được để trống',
        "string.email": 'Trường "email" không đúng định dạng',
        "any.required": 'Trường "email" là bắt buộc',
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": 'Trường "mật khẩu" không được để trống',
        "string.min": 'Trường "mật khẩu" phải có ít nhất 6 ký tự',
        "any.required": "Trường mật khẩu là bắt buộc",
    }),
});