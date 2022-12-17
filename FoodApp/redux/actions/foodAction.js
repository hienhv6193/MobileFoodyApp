export const GETALL_FOOD = "GETALL_FOOD";
export const SEARCH_FOOD = "SEARCH_FOOD"
export const ADD_FOOD = "ADD_FOOD";
export const EDIT_FOOD = "EDIT_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";

export const getAllFood = (food) => {
    return {
        type: GETALL_FOOD,
        payload: food
    }
}
export const SearchFood = (food) => {
    return {
        type: SEARCH_FOOD,
        payload: food
    };
};
export const fetchAllFood = () => {
    return (dispatch) => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:9001/foods');
                const food = await response.json();
                console.log('foods:', food)

                dispatch(getAllFood(food));
            } catch (err) {
                console.log(err)
            }
        };
        getData();

    }
}
export const fetchSearchFood = (key) => {
    return (dispatch) => {
        const getData = async () => {
            try {
                const response = await fetch("http://localhost:9001/foods/" + key);
                const cate = await response.json();
                // console.log(books)
                dispatch(SearchFood(cate))
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }
}
export const createFOOD = (food) => {
    return {
        type: ADD_FOOD,
        payload: food,
    }
}
export const editFOOD = (food) => {
    return {
        type: EDIT_FOOD,
        payload: food
    }
}
export const deleteFOOD = (docId) => {
    return {
        type: DELETE_FOOD,
        payload: {docId}
    }
}
// action-thunk
export const postFOOD = (food) => {
    return (dispatch) => {
        const postData = async () => {
            try {
                await fetch('http://localhost:9001/food', {
                    method: "POST",
                    headers: {
                        Accept: "application/json", "Content-Type": "application/json",
                    },
                    body: JSON.stringify(food)
                });

            } catch (err) {
                console.log(err)
            }
        }
        postData();
        dispatch(createFOOD(food))
    }
}
export const updateFOOD = (docId, food) => {
    return (dispatch) => {
        const updateData = async () => {
            try {
                await fetch(`http://localhost:9001/updatefood/${docId}`, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json", "Content-Type": "application/json",
                    },
                    body: JSON.stringify(food)

                });
            } catch (err) {
                console.log(err)
            }
        }
        updateData();
        dispatch(editFOOD(food))
    }
}
export const deletefood = (docId) => {
    return (dispatch) => {
        const deleteData = async () => {
            try {
                await fetch(`http://localhost:9001/deleteFood/${docId}`, {

                    method: "DELETE",

                })
            } catch (err) {
                console.log(err)

            }
        }
        deleteData();
        dispatch(deleteFOOD(docId))
    }
}