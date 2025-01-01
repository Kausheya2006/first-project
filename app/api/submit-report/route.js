// // app/api/submit-report/route.js
// import { NextResponse } from 'next/server';
// import nextConnect from 'next-connect';
// import upload from '@/lib/multer'; // Import Multer setup
// import { createReport } from '@/actions/useractions'; // Import your useractions function

// const handler = nextConnect();

// // Use Multer to handle file uploads (handling one file under the name 'itempic')
// handler.use(upload.single('itempic')); // 'itempic' is the name of the input field

// // Handle POST request
// handler.post(async (req, res) => {
//   try {
//     // Extract other form fields from req.body
//     const { title, desc, date, lastseen, username } = req.body;
//     const itempic = req.file; // Multer will store the file in req.file

//     if (!itempic) {
//       return res.status(400).json({ error: 'Image file is required' });
//     }

//     // Call createReport function with the data
//     await createReport({ title, desc, date, lastseen, itempic }, username);

//     return res.status(200).json({ message: 'Report created successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Error creating report' });
//   }
// });

// export { handler as POST }; // Export POST method
