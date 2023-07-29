import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!authHeader) {
    return res.status(401).json({
      message: "Bạn chưa đăng nhập",
    });
  }

  jwt.verify(token, "123456", async (error, payload) => {
    if (error) {
      if (error.name === "JsonWebTokenError") {
        return res.status(400).json({
          message: "Token không hợp lệ",
        });
      }
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({
          message: "Token đã hết hạn",
        });
      }
    }
    const user = await User.findById(payload.id);
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Bạn không có quyền thực hiện hành động này",
      });
    }
    next();
  });
};
