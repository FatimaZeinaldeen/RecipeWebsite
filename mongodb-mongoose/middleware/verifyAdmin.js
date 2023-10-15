import User from "../Models/user.js";
export const verifyAdmin = async (req, res, next) => {
    const{ id }=req.params;
  try {
    const user = await User.findById(id);

    const userRole = user.role;

    if (userRole !== 'admin') {
      return res.json({ error: 'Access denied. You are not an admin.' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};

