import { MongoClient } from "mongodb";
//  api/new-meetup

const DataHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://yash:iPUhNRn2WQXpRLHg@cluster0.wz0i35s.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetUpsTable = db.collection("meetups");
    const result = await meetUpsTable.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Data Inserted Successfully" });
  }
};
export default DataHandler;
