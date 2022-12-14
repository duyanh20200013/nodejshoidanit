
import doctorService from '../services/doctorService'

let getTopDoctorHome =async(req,res)=>{
     let limit =req.query.limit;
     if(!limit) limit=10;
     try{
          let response= await doctorService.getTopDoctorHome(+limit);
          return res.status(200).json(response);
     }catch(e){
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            message:'Error from service...'
        })
     }
}

let getAllDoctors=async(req,res)=>{
      try{
          let doctors=await doctorService.getAllDoctors()
          return res.status(200).json(doctors)
      }catch(e){
        console.log(e)
         return res.status(200).json({
            errCode:-1,
            message:'Error from service...'
         })
      }
}

let postInforDoctor=async(req,res)=>{
    try{
        let response =await doctorService.postInforDoctor(req.body)
        return res.status(200).json(response)

    }catch(e){
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            message:'Error from service...'
         })
    }
}

let getDetailDoctorById=async(req,res)=>{
    try{
        let infor=await doctorService.getDetailDoctorById(req.query.id)
        return res.status(200).json(infor)
    }catch(e){
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            message:'Error from service...'
         })
    }
}

module.exports={
    getTopDoctorHome:getTopDoctorHome,
    getAllDoctors:getAllDoctors,
    postInforDoctor:postInforDoctor,
    getDetailDoctorById:getDetailDoctorById,
}