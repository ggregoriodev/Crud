import amqp from "amqplib";

async function Publisher(queueName, message) {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(queueName, { durable: true });

    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
    console.log("Mensagem enviada para a fila:", message);
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
}
export default Publisher;
