const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();


exports.addCategory = async (req, res)=>{
    const {name} = req.body;
    const category = await prisma.category.create({
        data: {name}
    });
    res.json(category);
};

exports.getCategory = async (req, res)=>{
    const categories = await prisma.category.findMany();
    res.json(categories);
}

exports.updateCategory = async(req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const category = await prisma.category.update({
        where: {id:parseInt(id)},
        data: {name}

    })
    res.json(category);
};

exports.deleteCategory = async(req, res)=>{
    const {id} = req.params;
    await prisma.category.delete({
        where: {categoryId: parseInt(id)}
    });
    res.json({message: "category and its services deleted"});
}