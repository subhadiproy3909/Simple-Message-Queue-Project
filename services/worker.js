const Worker = require('bull');
const sendMail = require('./mailsendingLogic');

const worker = new Worker("email-queue", {
    redis: {
        host: "127.0.0.1",
        port: "6379",
    }
});

worker.process(async (job, done) => {

    const response = await sendMail(job.data);
    done();
})