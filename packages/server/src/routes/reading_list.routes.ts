import Router from 'express'

const router = Router()

router.get('/reading_list')
router.get('/reading_list/:id')
router.post('/reading_list')
router.put('/reading_list')
router.delete('/reading_list/:id')

export default router
