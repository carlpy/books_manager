import { Router } from "express";

import userRoutes from "./users.routes";
import bookRoutes from "./books.routes";
import readingListRoutes from "./reading_list.routes";
import bookNotesRoutes from "./book_notes.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(bookRoutes);
router.use(readingListRoutes);
router.use(bookNotesRoutes);

export default router;
