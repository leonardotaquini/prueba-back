import { Router, Request, Response } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  res.json({ message: "Users" });
});
router.get("/user/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `User ${id}` });
});
router.post("/user/create", (req: Request, res: Response) => {
  const { body } = req;
  res.json({ message: "User created", body });
});

router.put("/user/update/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({ message: `User ${id} updated`, body });
});

router.delete("/user/delete/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
});

export default router;
