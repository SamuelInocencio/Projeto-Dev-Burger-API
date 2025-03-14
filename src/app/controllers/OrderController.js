import * as Yup from 'yup';
import Order from '../schemas/Order';

class OrderController {
  async store(request, response) {
    // const schema = Yup.object({
    //   name: Yup.string().required(),
    //   });

    // try {
    //   schema.validateSync(request.body, { abortEarly: false });
    // } catch (err) {
    //   return response.status(400).json({ error: err.errors });
    // }

    // const { name } = request.body;

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
    };

    return response.status(201).json(product);
  }
}

export default new OrderController();
