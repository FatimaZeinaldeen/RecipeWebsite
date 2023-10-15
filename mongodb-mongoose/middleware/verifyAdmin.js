import User from "../Models/user.js";
export const verifyAdmin = async (req, res, next) => {
    const {id} =req.params;
  try {
    console.log(id);
    const user = await User.find({"_id":id.toString()});
    console.log(user);
    if (!user) {
      return res.json({ error: 'User not found' });
  }

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

