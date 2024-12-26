import Router from 'express'

const router = Router()

router.get('/book_notes')
router.get('/book_notes/:id')
router.post('/book_notes')
router.put('/book_notes')
router.delete('/book_notes/:id')

export default router