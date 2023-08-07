import Product from "../models/products";
import Category from "../models/category";
// import { productSchema } from "../schema/products";

export const getAll = async (req, res) => {
  const {
    _page = 1,
    _limit = 10,
    _sort = "createAt",
    _order = "asc",
  } = req.query;
  const option = {
    page: _page,
    limit: _limit,
    sort: {
      [_sort]: _order === "asc" ? -1 : 1,
    },
  };
  try {
    const { docs: products } = await Product.paginate({}, option);
    if (products.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      })
    } else {
      
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Product found",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};

export const create = async (req, res) => {
  try {
    // const { error } = productSchema.validate(req.body);
    // if (error) {
    //   return res.json({
    //     message: error.details[0].message,
    //   });
    // }
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(400).json({
        message: "Không thể tạo sản phẩm",
      });
    }
    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },
    });
    return res.status(201).json({
      message: "Product created",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const { isHardDelete } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    // xóa image trên cloudinary
    await cloudinary.uploader.destroy(product.image.public_id);
    // Nếu client gửi lên isHardDelete = true thì xóa sản phẩm vĩnh viễn
    // Ngoài ra xóa luôn id sản phẩm khỏi danh sách products ở category
    if (isHardDelete) {
      await product.forceDelete();
      // Xóa sản phẩm cũ khỏi danh sách products của category cũ
      await Category.findByIdAndUpdate(product.categoryId, {
        $pull: { products: product._id },
      });
    } else {
      await product.delete();
    }

    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Xóa sản phẩm thất bại",
      error: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    // const { error } = productSchema.validate(req.body, { abortEarly: false });
    // if (error) {
    //   return res.status(400).json({
    //     messages: error.details.map((message) => ({ message })),
    //   });
    // }
    const productId = req.params.id;
    const productOld = await Product.findById(productId);
    const oldPublicId = productOld.image.publicId;
    const { name, image, price,  description, categoryId } =
      req.body;
    let product
    if (!image) {
      product = {
      name,
      image: productOld?.image,
      price,
      
      description,
      categoryId,
    }
    } else {
      const [uploadResult, deleteResult] = await Promise.all([
      cloudinary.uploader.upload(image),
      cloudinary.uploader.destroy(oldPublicId),
    ]);

     product = {
      name,
      image: {
        publicId: uploadResult.public_id,
        url: uploadResult.secure_url,
      },
      price,
      
      description,
      categoryId,
    }
    }
    
    

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      product,
      { new: true }
    );
    if (!updatedProduct) {
      return res.sendStatus(404);
    }

    // Xóa sản phẩm cũ khỏi danh sách products của category cũ
    const oldCategoryId = updatedProduct.categoryId;
    await Category.findByIdAndUpdate(oldCategoryId, {
      $pull: { products: productId },
    });

    // Thêm sản phẩm mới vào danh sách products của category mới
    const newCategoryId = req.body.categoryId;
    if (newCategoryId) {
      // Thêm sản phẩm mới vào danh sách products của category mới
      await Category.findByIdAndUpdate(newCategoryId, {
        $addToSet: { products: productId },
      });
    }
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({
      message: "Cập nhật sản phẩm không thành công",
      error: error.message,
    });
  }
};
