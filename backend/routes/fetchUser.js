const express = require('express');
const router=express.Router();
const axios=require('axios').default;

var userRepos=[];

//route to fetch basic user info as well as repos of user.
router.get('/',async (req,res,next)=>{
    const userName=req.query['user'];
    var foundUser=false;   
    var userInfo={};
    axios({
        method: 'GET',
        url: 'https://api.github.com/users/'+userName
    })
    .then((response)=>{
        foundUser=true;
        userInfo=response.data;
        console.log(userInfo);
        if(foundUser){
            console.log('next');
            axios({
                method: 'GET',
                url: 'https://api.github.com/users/'+userName+'/repos',
            })
            .then((response)=>{
                userRepos=response.data;
                userInfo['reposLength']=userRepos.length;
                console.log('sending response');
                res.status(200).json({"success" : true, "data": userInfo});
            })
            .catch((error)=>{
                console.log(error);
                res.status(404).json({"success" : false, "message": "User Not Found"});
            });
        }
    })
    .catch((error)=>{
        console.log(error);
        res.status(404).json({"success" : false, "message": "User Not Found"});
    });
    
})

router.get('/repos',async (req,res,next)=>{
    const page=parseInt(req.query['currentPage']);
    const pageSize=parseInt(req.query['pageSize']);
    const startIndex=(page - 1)*pageSize;
    const endIndex=page*pageSize;
    const result={};
    if(userRepos.length>0){
        result['repos']=userRepos.slice(startIndex,endIndex);
        console.log(result['repos']);
        res.status(200).json({"success":true, "data": result['repos']});
    }

})

module.exports=router;