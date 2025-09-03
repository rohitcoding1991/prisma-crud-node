/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 *     description: Add a new product with specified details.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: product1
 *               color:
 *                 type: string
 *                 example: red
 *               price:
 *                 type: integer
 *                 example: 1000
 *             required:
 *               - name
 *               - color
 *               - price
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: data add successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     color:
 *                       type: string
 *                     price:
 *                       type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                   required:
 *                     - id
 *                     - name
 *                     - color
 *                     - price
 *                     - createdAt
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get products with filters
 *     description: Retrieve products based on various query parameters.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Product ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: per_page
 *         schema:
 *           type: integer
 *         description: Number of products per page
 *       - in: query
 *         name: sort_order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term
 *       - in: query
 *         name: sort_by
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         description: Fields to sort by
 *     responses:
 *       200:
 *         description: Products found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: products found successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       color:
 *                         type: string
 *                       price:
 *                         type: integer
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                 total_products:
 *                   type: integer
 *                   example: 65
 *                 page:
 *                   type: string
 *                   example: "1"
 *                 page_size:
 *                   type: integer
 *                   example: 10
 *       400:
 *         description: Bad request
 */

/**
 * 
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Retrieve a single product by its ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: product found successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     color:
 *                       type: string
 *                     price:
 *                       type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /products:
 *   put:
 *     summary: Update an existing product
 *     description: Update a product's details using query parameters.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The product name
 *       - in: query
 *         name: price
 *         schema:
 *           type: integer
 *         description: The product price
 *       - in: query
 *         name: color
 *         schema:
 *           type: string
 *         description: The product color
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: product updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     color:
 *                       type: string
 *                     price:
 *                       type: integer
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Delete a product using its ID in path parameters.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: product deleted successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */

