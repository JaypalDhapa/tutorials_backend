import Tutorial from '../models/tutorialModel.js';

export const getTutorials = async (req,res) =>{
    try{
        const tutorials = await Tutorial.find();
        res.json({
            success:true,
            tutorials
        });
    }catch(err){
        res.json({
            success:false,
            message:"faild to get tutorials"
        })
    }
}
export const createTutorial = async (req,res) =>{
    
    try{
        const tutorialData = req.body;

        //check is Exist ?
        const existingTutorial = await Tutorial.findOne({slug:tutorialData.slug});

        if(existingTutorial){
            return res.status(400).json({
                success:false,
                message:"This slug already exists"
            })
        };

        //create new tutorial
        await Tutorial.create(tutorialData);
        res.json({
            message:"created new tutorial"
        })
    }catch(err){
        console.log(err)
        res.json({
            message:"something went wrong"
        })
    }

}

export const getTutorial = async (req,res)=>{
    try{
        const {slug} = req.params;

        const tutorial = await Tutorial.findOne({slug});

        if(!tutorial){
            return res.status(404).json({
                success:false,
                message:"Tutorial not found",
            })
        }

        res.status(200).json({
            sucees:true,
            tutorial:tutorial
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"faild to fetch tutorial"
        })
    }
}

export const updateTutorial = async (req,res) =>{
    try{
        const {slug} = req.params;
        const updateData = req.body;

        //check is tutorial

        const updatedTutorial = await Tutorial.findOneAndUpdate(
            {slug},
            updateData,
            { returnDocument: "after" }
        );

        if(!updatedTutorial){
            return res.status(404).json({
                success:false,
                message:"tutorial not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"updated successfully"
        })
    }catch(error){
        console.log(error);
        res.json({
            message:"faild to update tutorial"
        })
    }

}

export const deleteTutorial = async (req,res)=>{

    try{
        const slug = req.params.slug;
        console.log(slug);

        const deletedTutorial = await Tutorial.findOneAndDelete({slug});

        if(!deletedTutorial){
            return res.status(404).json({
                success:false,
                message:"Tutorial not found"
            })
        }

        res.status(200).json({
            success:true,
            message:`${slug} tutorial deleted successfully`
        })
    }catch(err){
        console.log(err);
        res.json({
            message:"faild to delete tutorial"
        })
    }

}