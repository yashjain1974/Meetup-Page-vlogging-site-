import { MongoClient } from "mongodb";
//  api/new-meetup

const DataHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    //aking a connection
    const client = await MongoClient.connect(
      "mongodb+srv://yash:bh0UtSpeVPh5qdhN@cluster0.wz0i35s.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    
    //database
    const db = client.db();
    //table
    const meetUpsTable = db.collection("meetups");
    //inserting data
    const result = await meetUpsTable.insertOne(data);

    //closing connection
    client.close();
    res.status(201).json({ message: "Data Inserted Successfully" });
  }
};
export default DataHandler;
