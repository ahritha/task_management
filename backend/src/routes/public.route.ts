import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.send('hello')
})


const publicRouter = router;
export default publicRouter;