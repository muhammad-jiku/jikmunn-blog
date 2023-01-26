import Blog from '@/db/models/Blog';
import databaseConnect from '@/db/utils/databaseConnect';

export default async function handler(req, res) {
  if (req.method !== 'POST') return;

  try {
    await databaseConnect();
    const { title, picUrl, desc } = req.body;
    const randomNum = Math.floor(
      Math.random() * 100 +
        (Math.random() * 10 * (Math.random() * 1000)) / (Math.random() * 100)
    );

    const newBlog = {
      id: randomNum?.toString(),
      title,
      picUrl,
      desc,
    };

    const savedBlog = await new Blog(newBlog).save();

    res.status(200).json({
      message: 'New blog added successfully',
      data: savedBlog,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      message: 'Something went wrong!!',
      error: error?.message,
    });
  }
}
