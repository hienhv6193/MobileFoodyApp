export const CREATE_ACCOUNT ='CREATE_ACCOUNT'


export const creeateAccount=(acc)=>{
    return{
        type:CREATE_ACCOUNT,
        payload:acc,
    }
}
export const postFood=(acc)=>{
    return (dispatch)=>{
        const postData=async()=>{
            try{
                await fetch('http://localhost:9001/register',{
                    method:"POST",
                    headers:{
                        Accept:"application/json","Content-Type":"application/json",
                    },
                    body:JSON.stringify(acc)
                });

            }catch(err){
                console.log(err)

            }
        }
        postData();
        dispatch(creeateAccount(acc))
    }
}