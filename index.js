import express from 'express'
import mongoose from 'mongoose'
import userModel from './models/User.js'
import classModel from './models/Class.js'
import studentModel from './models/Student.js'
import teacherModel from './models/Teacher.js'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())

app.post("/reg", async (req, res) => {

    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const user = new userModel({ name:name, email:email, password:password});
     res.send("hmm resss chal to raha hai ..")        
    try {

        await user.save();
        res.send("hmm try res chal to raha hai ..")
    } catch (error) {
        console.log(error)
    }

})

app.post("/createclass", async (req, res) => {

    const className=req.body.className;
    const classTime=req.body.classTime;
    const studentName=req.body.studentName;
    const teacherName=req.body.teacherName;
    const classes = new classModel({ className: className, classTime: classTime, studentName:studentName,teacherName:teacherName});
     res.send("hmm resss chal to raha hai ..")        
    try {
        await classes.save();
        res.send("hmm try res chal to raha hai ..")
    } catch (error) {
        console.log(error)
    }

})

app.post("/createstudent", async (req, res) => {

    const name=req.body.name;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const address=req.body.address;
    const students = new studentModel({ name: name, email:email,phoneNumber:phoneNumber,address:address});
     res.send("ok ..")        
    try {
        await students.save();
        res.send("server is running ..")
    } catch (error) {
        console.log(error)
    }

})

app.post("/createteacher", async (req, res) => {

    const name=req.body.name;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const address=req.body.address;
    const teachers = new teacherModel({ name: name, email:email,phoneNumber:phoneNumber,address:address});
     res.send("ok ..")        
    try {
        await teachers.save();
        res.send("server is running ..")
    } catch (error) {
        console.log(error)
    }

})

app.get('/read',async(req,res)=>{
    userModel.find({},(error,result)=>
    {
      if(error)
      {
        console.log(error)
      }
      res.send(result)

    })
})


app.get('/readclass',async(req,res)=>{
    classModel.find({},(error,result)=>
    {
      if(error)
      {
        console.log(error)
      }
      res.send(result)

    })
})
app.get('/readstudent',async(req,res)=>{
    studentModel.find({},(error,result)=>
    {
      if(error)
      {
        console.log(error)
      }
      res.send(result)

    })
})

app.get('/readteacher',async(req,res)=>{
    teacherModel.find({},(error,result)=>
    {
      if(error)
      {
        console.log(error)
      }
      res.send(result)

    })
})

app.delete("/deleteclass/:id", async (req, res)=> {
    try {
        const deletedclass=await classModel.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).send(e)
    }   
    })

    app.delete("/deletestudent/:id", async (req, res)=> {
        try {
            const deletedstudent=await studentModel.findByIdAndDelete(req.params.id)
        } catch (error) {
            res.status(500).send(e)
        }
       
        })

app.put('/updateclass/:id',async (req, res)=> {
    const className=req.body.className;
    const classTime=req.body.classTime;
    const studentName=req.body.studentName;
    const teacherName=req.body.teacherName;
     try {
      const newdata=  await classModel.findByIdAndUpdate(req.params.id,{className,classTime,studentName,teacherName},{new:true})
      console.log(newdata);
    } catch (error) {
        res.status(500).send(error)
    } 
       })

       app.put('/updatestudent/:id',async (req, res)=> {
        const name=req.body.name;
        const email=req.body.email;
        const phoneNumber=req.body.phoneNumber;
        const address=req.body.address;
         try {
          const newdata=  await studentModel.findByIdAndUpdate(req.params.id,{name,email,phoneNumber,address},{new:true})
          console.log(newdata);
        } catch (error) {
            res.status(500).send(error)
        } 
           })
    

mongoose.connect('mongodb+srv://abhinav:kuttanekata@cluster0.rkyk0vj.mongodb.net/mern?retryWrites=true&w=majority',
{
    useNewUrlParser:true, 

}).then(()=>
{
    console.log("coneection to database successfull")
}).catch((error)=>{
    console.log("database not connected");
})

app.listen(5000, () => { console.log("server is running successfully")  })

