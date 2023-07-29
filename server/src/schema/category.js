import joi from "joi";

export const categorySchema = joi.object({
  name: joi.string().min(2).max(255).required().messages({
    "string.base": `Tên danh mục phải là kiểu 'text'`,
    "string.empty": `Tên danh mục không được bỏ trống`,
    "string.min": `Tên danh mục phải chứa ít nhất {#limit} ký tự`,
    "string.max": `Tên danh mục không được vượt quá {#limit} ký tự`,
    "any.required": `Tên danh mục là trường bắt buộc`,
  }),
  imgUrl: joi.string().uri().required().messages({
    "string.base": `Đường dẫn hình ảnh phải là kiểu 'text'`,
    "string.empty": `Đường dẫn hình ảnh không được bỏ trống`,
    "string.uri": `Đường dẫn hình ảnh không hợp lệ`,
    "any.required": `Đường dẫn hình ảnh là trường bắt buộc`,
  }),
  products: joi
    .array()
    .items
    // joi.string().trim().messages({
    //   "string.base": `ID sản phẩm phải là kiểu 'text'`,
    //   "string.empty": `ID sản phẩm không được bỏ trống`,
    // })
    (),
});
