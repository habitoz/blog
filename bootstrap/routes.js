import userRoute from '../src/routes/user';

import blogRoute from '../src/routes/blog';

import commentRoute from '../src/routes/comment';

export default (server) => {
    server.use('/v1/api/user', userRoute);
    server.use('/v1/api/blog', blogRoute);
    server.use('/v1/api/comment', commentRoute);
};
