import { getUserModel, deleteUserModel, updateUserModel } from "../model/userModel.js";

export const getUser = async (req, res) => {
    const userId = req.params.userId;

    const userProfile = await getUserModel(userId);

    if (userProfile.message) {
        return res.status(404).json({ message: userProfile.message });
    }

    res.json(userProfile);
};

export const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const response = await deleteUserModel(userId);
        if (response.message === "User successfully deleted") {
            return res.status(200).json(response);
        } else {
            return res.status(404).json(response);
        }
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
};

export const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const updatedData = req.body;


    if (!updatedData || Object.keys(updatedData).length === 0) {
        return res.status(400).json({ message: "No update data provided" });
    }

    try {
        const response = await updateUserModel(userId, updatedData);

        if (response.message === "User account successfully updated") {
            return res.status(200).json(response);
        } else {
            return res.status(404).json(response);
        }
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
};












