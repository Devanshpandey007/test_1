const {PrismaClient} = require('@prisma/client');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

exports.login = async (req, res) =>{
    const {email, password} = req.body;
    const user = await prisma.user.findUnique({
        where: {email}
    });

    if (!user){
        return res.status(400).json({error: "Invalid Credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        res.status(400).json({error: "Invalid Credentials"});
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
    res.json({token})
}

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: "User with this email already exists." });
    }
}