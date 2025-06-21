const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

exports.addService = async (req, res)=>{
    const {name, type, priceOptions} = req.body;
    const {categoryId} = req.params;
    const service = await prisma.service.create({
        data: {
            name,
            type,
            category: {connect:{id: parseInt(categoryId)}},
            priceOptions: {
                create: priceOptions
            }
        }
    });
    
    res.json(service);
};

exports.getService = async(req, res)=>{
    const{categoryId} = req.params;
    const services = await prisma.service.findMany({where:{categoryId: parseInt(categoryId)}});
    res.json(services);
}


exports.updateService = async (req, res)=>{
    const {serviceId} =  req.params;
    const {name, type} = req.body;
    const service = await prisma.service.update({
        where: {id: parseInt(serviceId)},
        data: {name, type}
    });
    res.json(service);
};

exports.deleteService = async (req, res)=>{
    const {serviceId} = req.params;
    await prisma.service.delete({where: {id: parseInt(serviceId)}});
    res.json({message: "Services deleted!"});
}