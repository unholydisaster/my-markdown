import { UserNotes } from "@/backEnd/models/schema";
import { UserModel } from "@/backEnd/models/users";
import dbConnect from "@/backEnd/utils/dbConnect";


dbConnect();

export default async(req, res)=> {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        
        const response = await UserNotes.find({});
        res.json(response);
        
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
      //we have two ways of doing this
      //below is the first method
       /*const data=new userNotes(req.body)
         const response=await data.save()
         res.status(response)
       */
      //below is the second method
      //9560
      //9789
        const notes = new UserNotes(req.body);
        await notes.save()
        res.json(notes);
    
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      case 'PUT':
        try{
          const user=await UserModel.findById(req.body.userID);
          const createdNotes=await UserNotes.findById(req.body.notesID)

          user.savednotes.push(createdNotes)
          await user.save()
          res.json({savedNotes:user.savednotes})

        }catch(error){
          console.log(error)
        }
        break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};


