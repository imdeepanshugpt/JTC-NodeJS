/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import postSchema from '../models/post';
import Response from './response';

function getPosts(req, res) {
    const response = new Response();
    postSchema.find({}).then((data) => {
        response.data.result = data;
        response.status.statusCode = 200;
        response.status.message = "recieved all the posts succesfully !";
        res.status(200).json(response);
    }).catch((error) => {
        response.status.statusCode = '500';
        response.status.message = "Unable to get all the posts!";
        res.status(500).json(response);
    });
}

function updatePost(req, res) {
    const response = new Response();
    postSchema.findOneAndUpdate(
        { '_id': req.body.postId },
        {
            $set: {
                'vote': req.body.vote
            }
        },
        (error, data) => {
            if (!error) {
                response.data.result = data;
                response.status.statusCode = 200;
                response.status.message = "Post get updated succesfully !";
                res.status(200).json(response);
            } else {
                response.status.statusCode = '500';
                response.status.message = "Unable to update the post!";
                res.status(500).json(response);
            }
        }
    )
}

function createPost(req, res) {
    const response = new Response();
    const post = new postSchema(req.body);
    post.save((err, insertedData) => {
        if (!err) {
            response.data.result = insertedData;
            response.status.statusCode = 200;
            response.status.message = "created a post succesfully !";
            res.status(200).json(response);
        } else {
            response.status.statusCode = '500';
            response.status.message = "Unable to create the post!";
            res.status(500).json(response);
        }
    });
}

module.exports = {
    getPosts,
    updatePost,
    createPost,
};
