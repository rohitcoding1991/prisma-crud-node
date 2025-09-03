const prisma = require("../models/model");
const { isValidObjectId } = require("../utils/functions/commonFunctions");

exports.createProduct = async (req, res) => {
  let { name, color, price } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        color,
        price,
      },
    });
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "data add successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log({ error });
    res.status(400).json({
      status: "failed",
      statusCode: 400,
      message: error.message,
      data: [],
    });
  }
};

exports.createManyProduct = async (req, res) => {
  const products = req.body;
  try {
    const createdProducts = await prisma.product.createMany({
      data: products,
    });
    res.status(200).send({
      status: "success",
      statusCode: 200,
      message: "products add successfully",
      data: [],
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      status: "failed",
      statusCode: 400,
      message: error.message,
      data: [],
    });
  }
};

exports.getProduct = async (req, res) => {
  let { id } = req.params;
  try {
    if (!id || !isValidObjectId(id)) {
      let message = !id ? "id is required" : "id format is invalid";
      return res.status(400).send({
        status: "failed",
        statusCode: 400,
        message,
      });
    }
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      res.status(200).json({
        status: "success",
        statusCode: 200,
        message: "produts found successfully",
        data: product,
      });
    } else {
      res.status(400).json({
        status: "failed",
        statusCode: 400,
        message: "product not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      statusCode: 400,
      message: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  const {
    page = 1,
    page_size = 10,
    sort_order = "desc",
    search,
    sort_by = ["createdAt"],
  } = req.query;
  try {
    const sortFields = sort_by.map((field) => ({
      [field]: sort_order,
    }));
    const products = await prisma.product.findMany({
      skip: (Number(page) - 1) * Number(page_size),
      take: Number(page_size),
      where: {
        name: {
          contains: search || "",
          mode: "insensitive",
        },
      },
      orderBy: sortFields,
    });
    const total_products = await prisma.product.count({
      where: {
        name: {
          contains: search || "",
          mode: "insensitive",
        },
      },
    });
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "products found successfully",
      data: products,
      total_products,
      page,
      page_size,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      statusCode: 400,
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  let { id, name, price, color } = req.query;
  try {
    
    if (!isValidObjectId(id)) {
      return res.status(400).send({
        status: "failed",
        statusCode: 400,
        message: "id format is invalid",
        data: [],
      });
    }
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      let updatedProduct = await prisma.product.update({
        where: { id: id },
        data: {
          name,
          price,
          color,
        },
      });
      res.status(200).json({
        status: "success",
        statusCode: 200,
        message: "product updated successfully",
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        status: "failed",
        statusCode: 400,
        message: "product not updated",
        data: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      statusCode: 400,
      message: error.message,
      data: [],
    });
  }
};

exports.deleteProduct = async (req, res) => {
  let { id } = req.params;
  let message = "product not found";
  try {
    if (!id || !isValidObjectId(id)) {
      let message = !id ? "id is required" : "id format is invalid";
      return res.status(400).json({
        status: "failed",
        statusCode: 400,
        message,
        data: [],
      });
    }
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (product) {
      await prisma.product.delete({
        where: { id: id },
      });
      message = "product deleted successfully";
    }
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message,
      data: [],
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      statusCode: 400,
      message: error.message,
      data: [],
    });
  }
};
