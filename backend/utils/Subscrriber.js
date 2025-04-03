import amqp, { connect } from "amqplib";

async function Publisher() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queueName = "user_events";

  await channel.assertQueue(queueName, { durable: true });
  channel.consume(queueName, (msg) => {
    if (msg !== null) {
      const message = JSON.parse(msg.content.toString());
      console.log("Mensagem recebida:", message);

      channel.ack(msg);
    }
  });
}

export default Publisher;
