import Blog from '@/db/models/Blog';
import databaseConnect from '@/db/utils/databaseConnect';

export default async function handler(req, res) {
  if (req.method !== 'GET') return;

  try {
    await databaseConnect();
    const blogs = await Blog.find({}).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });

    res.status(200).json({
      message: 'Blogs are displaying successfully!!',
      data: blogs,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      message: 'Something went wrong!!',
      error: error?.message,
    });
  }
}
