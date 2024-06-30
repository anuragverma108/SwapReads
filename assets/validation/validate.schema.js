import zod from 'zod';

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody; 
    next();
  } catch (err) {
    console.log(err);
    const yourerror = err.errors[0].message;
    res.status(400).json({
      msg: yourerror,
    });
  }
};

export default validate;
