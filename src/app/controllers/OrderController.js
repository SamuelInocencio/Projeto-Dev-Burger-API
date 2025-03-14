import * as Yup from 'yup';
import Order from '../schemas/Order';
import Product from '../models/Products';

class OrderController {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { products } = request.body;

    const productsIds = products.map((product) => product.id);

   const findProducts = await Product.findAll({
    where: {
       id: productsIds,
     },
   })

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
      products: findProducts,
    };

    return response.status(201).json(order);
  }
}

export default new OrderController();
