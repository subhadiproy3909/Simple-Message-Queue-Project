const Queue = require("bull");

const emailQueue = new Queue("email-queue", {
    redis: {
        host: "127.0.0.1",
        port: "6379",
    }
});

const sendMailToUsers = async (req, res) => {
    try {
        const {email} = req.body;

        const response = await emailQueue.add({
            email: email,
            subject: "Welcome message",
            html: `<p>Hello User,</p>
                    
            <p>This is to verify your email account.</p>
                                            
            <p>From,</p>
            <p>ABC Media</p>`,
        }, {
            attempts: 2,
        }
        );
        console.log("Message added to the queue, job id: ", response.id);

        if(res){
            res.json({
                message: "message has been send",
            })
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {sendMailToUsers};