

import { Router } from 'express'
import Recipe from '../model/recipe'


const router = Router()


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        res.json(recipe)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingridients: req.body.ingredients
    })
    try {
        const r1 = await recipe.save()
        res.json({ message: `Sucessfully added ${r1.name}` })
    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        recipe.name = req.body.name
        recipe.ingridients = req.body.ingredients
        const r1 = await recipe.save()
        res.json({ message: `Sucessfully Updated for ${r1.name}` })
    } catch (err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        const r1 = await recipe.deleteOne()
        res.json({ message: `Sucessfully deleted ${r1.name}` })
    } catch (err) {
        res.send('Error' + err)
    }
})
export default router