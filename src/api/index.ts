import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.json({
    message: `${req.originalUrl} api is up and running`,
  });
});

export default router;
