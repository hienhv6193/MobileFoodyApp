export const CREATE_TAG = 'CREATE_TAG';
export const UPDATE_TAG = 'UPDATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
// action creator
export const createTag = (tag) => {
    return {
        type: CREATE_TAG,
        payload: {
            tagId: tag.id,
            tagName: tag.name,
            tagPrice: tag.price,
            tagImage: tag.image,
        }
    }
}

export const updateTag = (tag) => {
    return {
        type: UPDATE_TAG,
        payload: {
            tagId: tag.id,
            tagName: tag.name,
            tagPrice: tag.price,
            tagImage: tag.image,
        }
    }
}

export const deleteTag = (id) => {
    return {
        type: DELETE_TAG,
        payload: {
            tagId: id,
        }
        
    }
}