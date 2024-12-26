import Router from 'express'

const router = Router()

router.get('/books')
router.get('/books/:id')
router.post('/books')
router.put('/books')
router.delete('/books/:id')

export default router;