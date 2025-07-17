import express from "express";
import userController from "../controller/user-controller.js";
import contactController from "../controller/contact-controller.js";
import addressController from "../controller/address-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.get("/users/current", userController.get);
userRouter.patch("/users/current", userController.update);
userRouter.delete("/users/logout", userController.logout);

// Contact API
userRouter.post("/contacts", contactController.create);
userRouter.get("/contacts/:contactId", contactController.get);
userRouter.put("/contacts/:contactId", contactController.update);
userRouter.delete("/contacts/:contactId", contactController.remove);
userRouter.get("/contacts", contactController.search);

// Address API
userRouter.post("/contacts/:contactId/addresses", addressController.create);
userRouter.get(
  "/contacts/:contactId/addresses/:addressId",
  addressController.get
);
userRouter.put(
  "/contacts/:contactId/addresses/:addressId",
  addressController.update
);
userRouter.delete(
  "/contacts/:contactId/addresses/:addressId",
  addressController.remove
);
userRouter.get("/contacts/:contactId/addresses", addressController.list);

export { userRouter };
