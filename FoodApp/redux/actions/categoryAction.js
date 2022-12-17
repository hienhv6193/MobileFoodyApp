
export const GETALL_CATEGORY = 'GETALL_CATEGORY'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const SEARCH_CATEGORY = 'SEARCH_CATEGORY'

export const getAllCATEGORY = (cate) => {
    return {
        type: GETALL_CATEGORY,
        payload: cate
    }
}
export const fetchSearchCATEGORY = (key) => {
    return (dispatch) => {
        const getData = async () => {
            try {
                const response = await fetch("http://localhost:9001/api/" + key);
                const cate = await response.json();
                // console.log(books)

                dispatch(Searchcate(cate))
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }
}

export const Searchcate = (cate) => {
    return {
        type: SEARCH_CATEGORY,
        payload: cate
    };
};
export const creeateCATEGORY = (cate) => {
    return {
        type: CREATE_CATEGORY,
        payload: cate,
    }
}
export const updateCATEGORY = (cate) => {
    return {
        type: UPDATE_CATEGORY,
        payload: cate
    }
}
export const deletecate = (docId) => {
    return {
        type: DELETE_CATEGORY,
        payload: { docId }
    }
}
//action-thunk
export const fetchAllCATEGORY = () => {
    return (dispatch) => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:9001/api/category');
                const cate = await response.json();
                console.log('here', cate)
                dispatch(getAllCATEGORY(cate));
            } catch (err) {
                console.log(err)
            }
        };
        getData();

    }
}
export const postCATEGORY = (cate) => {
    return (dispatch) => {
        const postData = async () => {
            try {
                await fetch('http://localhost:9001/cate', {
                    method: "POST",
                    headers: {
                        Accept: "application/json", "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cate)
                });

            } catch (err) {
                console.log(err)

            }
        }
        postData();
        dispatch(creeateCATEGORY(cate))
    }
}
export const update = (docId, cate) => {
    return (dispatch) => {
        const updateData = async () => {
            try {
                await fetch(`http://localhost:9001/updateCate/${docId}`, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json", "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cate)

                });
            } catch (err) {
                console.log(err)

            }
        }
        updateData();
        dispatch(updateCATEGORY(cate))
    }
}
export const deleteF = (docId) => {
    return (dispatch) => {
        const deleteData = async () => {
            try {
                await fetch(`http://localhost:9001/delCate/${docId}`, {

                    method: "DELETE",

                })
            } catch (err) {
                console.log(err)

            }
        }
        deleteData();
        dispatch(deletecate(docId))
    }
}

