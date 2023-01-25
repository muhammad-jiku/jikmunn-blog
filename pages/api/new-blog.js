export default function handler(req, res) {
  if (req.method !== 'POST') return;

  try {
    const { title, picUrl, desc } = req.body;
    const randomNum = Math.floor(Math.random() * 1000);

    const newBlog = {
      id: randomNum?.toString(),
      title,
      picUrl,
      desc,
    };

    res.status(200).json({
      message: 'New blog added successfully',
      data: newBlog,
    });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      message: 'Something went wrong!!',
      error: error?.message,
    });
  }
}
