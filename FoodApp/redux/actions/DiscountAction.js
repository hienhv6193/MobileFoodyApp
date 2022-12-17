export const GETALL_DISCOUNT ='GETALL_DISCOUNT'
export const CREATE_DISCOUNT ='CREATE_DISCOUNT'
export const UPDATE_DISCOUNT ='UPDATE_DISCOUNT'
export const DELETE_DISCOUNT ='DELETE_DISCOUNT'
export const SEARCH_DISCOUNT ='SEARCH_DISCOUNT'


export const getAllCourses=(disc)=>{
    return{
        type:GETALL_DISCOUNT,
        payload:disc
    }
}

export const creeateFood=(disc)=>{
    return{
        type:CREATE_DISCOUNT,
        payload:disc,
    }
}
export const updateFood=(disc)=>{
    return{
        type:UPDATE_DISCOUNT,
        payload:disc
    }
}
export const deleteFood=(docId)=>{
    return{
    type:DELETE_DISCOUNT,
    payload:{docId}
    }
}
//action-thunk
export const fetchAllDiscount =()=>
{
    return(dispatch)=>{
        const getData =async()=>{
            try{
                const response = await fetch('http://localhost:9001/Discount');
                const courses = await response.json();
                console.log('here',courses)
                dispatch(getAllCourses(courses));
            }catch(err){
                console.log(err)
            }
        };
        getData();

     }
}
export const postFood=(disc)=>{
    return (dispatch)=>{
        const postData=async()=>{
            try{
                await fetch('http://localhost:9001/Discount',{
                    method:"POST",
                    headers:{
                        Accept:"application/json","Content-Type":"application/json",
                    },
                    body:JSON.stringify(disc)
                });

            }catch(err){
                console.log(err)

            }
        }
        postData();
        dispatch(creeateFood(disc))
    }
}
export const update=(docId,disc)=>{
    return(dispatch)=>{
        const updateData=async()=>{
        try{
            await fetch(`http://localhost:9001/updateDiscount${docId}`,{
                method:"PUT",
                headers:{
                    Accept:"application/json","Content-Type":"application/json",
                },
                body:JSON.stringify(disc)

            });
        }catch(err){
            console.log(err)

            }
        }
        updateData();
        dispatch(updateFood(disc))
    }
}
export const deleteF=(docId)=>{
    return(dispatch)=>{
        const deleteData=async()=>{
            try{
                await fetch(`http://localhost:9001/deleteDiscount/${docId}`,{
                    
                    method:"DELETE",
                    
                })
            }catch(err){
                console.log(err)
    
                }
        }
        deleteData();
        dispatch(deleteFood(docId))
    }
}

