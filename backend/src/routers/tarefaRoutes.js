import { Router } from "express";
import { getTarefas } from "../controllers/tarefaController.js";

const router = Router();

router.get('/tarefas', getTarefas);

export default router;