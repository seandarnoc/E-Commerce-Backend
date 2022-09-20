const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const returnTags = await Tag.findAll({include: [Product]});
  if(returnTags) {
    res.json(returnTags)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const requestTag = await Tag.findOne({where: {id:req.params.id}, include: [Product]});
  if(requestTag) {
    console.log(requestTag)
    res.json(requestTag)
  } else {res.json({message: `The requested tag with id ${req.params.id} could not be found.`})}
});

router.post('/', async (req, res) => {
  // create a new tag
  if(req.body) {
    const createTag = await Tag.create({tag_name: req.body.tag_name})
    if(createTag) {
      res.json(createTag)
    } else {res.json({message: `error, please try again.`})}
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const requestedItem = req.params.id;
  const updateItem = await Tag.update({tag_name: req.body.tag_name}, {where: {id: requestedItem}})
  if(updateItem) {
    res.json({message: `the tag you selected with ID ${req.params.id} is now updated.`})
  } else {res.json({message: `error, please try again.`})};

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const searchItem = await Tag.destroy({where: {id: req.params.id}})
  if(searchItem) {
    res.json({message: `the tag was deleted!`})
  } else res.json({message: `error, please try again.`})
});

module.exports = router;
