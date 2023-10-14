import User from "../Models/user.js";
import bcrypt from "bcrypt";
import cloudinary from "cloudinary";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

//addUser(register)
export const registerUser = async (req, res) => {
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer);
      const user = new User({
        ...req.body,
        userPhoto: result.secure_url,
      });
      await user.save();
    } else {
      const user = new User(req.body);
      console.log(user);
      await user.save();
    }
    res.status(201).json({ message: "successfully added!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "No such account with this email" });
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    if (passwordMatch) {
      await User.updateOne(
        { email: email },
        {
          $set: {
            role: "admin",
          },
        },
        { new: true }
      );
      return res.status(200).json({ user });
    } else {
      return res.status(401).json("Wrong password");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//getUser
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//updateAdminProfile
export const updateProfile = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer);
      const user = await User.findByIdAndUpdate(
        id,
        { ...req.body, userPhoto: userPhotoUrl },
        { new: true }
      );
    } else {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
    }
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UserLogout
export const userLogout = async (req, res) => {
  const { id } = req.params;
  try {
    const usertoLogout = await User.findById(id);
    if (!usertoLogout) {
      return res.status(404).json({ error: "User not found" });
    }
    await User.updateOne(
      { _id: id },
      {
        $set: {
          role: "user",
        },
      },
      { new: true }
    );
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//deleteUserAccount
export const deleteAccount = async (req, res) => {
  const { id } = req.params;
  console.log("Received ID:", id);
  try {
    const usertoBeDeleted = await User.findByIdAndDelete(id);
    console.log(usertoBeDeleted);
    if (!usertoBeDeleted) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
    //usertoBeDeleted.role="user";
  } catch (error) {
    res.status(500).json({ error: "error in the server" });
  }
};

//The 401 status code is used to indicate that the client's request lacks proper authorization, and access to the requested resource is denied due to authentication failure.
