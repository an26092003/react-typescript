import { number } from "joi";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    description: String,
  },
  { timestamps: true, versionKey: false }
);

productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
