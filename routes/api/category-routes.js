const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  const getCategories = await Category.findAll({
    include: [{
      model: Product
    }]
  });
  res.json(getCategories)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const getOneCategory = await Category.findOne({where: {
    id: req.params.id
  }, include: [{
    model: Product
  }]})
  res.json(getOneCategory)
});

router.post('/', async (req, res) => {
  // create a new category
  
  if(req.body) {
    const createCategory = await Category.create({category_name: req.body.category_name})
    if(createCategory) {
      res.json({message: `new category created.`})}
  } else {
    res.json({message: `name was missing, please try again.`})
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const requestedCategory = req.params.id;
  const updateCategory = await Category.update({category_name: req.body.category_name}, {
    where: {id: requestedCategory}})
    if(updateCategory) {
    res.json({message: `the category you selected with ID ${req.params.id} is updated.`})
  } else {
    res.json({message: `error, try again.`})
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deleteItem = req.params.id;
  const findItem = await Category.destroy({where: {id: deleteItem}})
  if(findItem) {
    res.json({message: `category with id ${deleteItem} is deleted.`})
  } else {
    res.json({message: `error, please try again.`})
  }
});

module.exports = router;
