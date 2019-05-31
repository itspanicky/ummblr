export const RECEIVE_POST = "RECEIVE_POST";

const receivepost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}