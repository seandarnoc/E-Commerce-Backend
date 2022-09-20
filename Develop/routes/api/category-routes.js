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
  const newCategory = req.body.name
  if(newCategory) {
    const createCategory = await Category.create({category_name: newCategory})
    res.json({message: `new category created.`})
  } else {
    res.json({message: `name was missing, please try again.`})
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update({category_name: req.body.name}, {
    where: {id:req.params.id}
  })
  if(updateCategory) {
    res.json({message: `record was updated.`})
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
