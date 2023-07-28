import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().min(2).max(255).required().message({
    "string.base": `tên sản phẩm phải là kiểu "text"`,
    "string.empty": `tên sản phẩm không được bỏ trống`,
    "string.min": `Tên danh mục phải chứa ít nhất {#limit} ký tự`,
    "string.max": `Tên danh mục không được vượt quá {#limit} ký tự`,
    "any.required": `Tên danh mục là trường bắt buộc`,
  }),
  price: joi.number.required().message({
    "number.base": `giá sản phẩm phải là kiểu "number"`,
    "number.empty": `giá sản phẩm không được bỏ trống`,
    "any.required": `giá sản phẩm là trường bắt buộc`,
  }),
  image: joi.string().required().message({
    "any.required": `ảnh sản phẩm là trường bắt buộc `,
  }),
  categoryId: joi.string().required().message({
    "any.required": `categoryId là trường bắt buộc`,
  }),

  description: joi.string().required().message({
    "string.base": `mô tả sản phẩm phải là kiểu "text"`,
    "string.empty": `mô tả sản phẩm không được bỏ trống`,
    "any.required": `mô tả sản phẩm là trường bắt buộc`,
  }),
});
