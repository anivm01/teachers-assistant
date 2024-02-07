// Import next-connect and other necessary modules
import nc from "next-connect";
import multer from "multer";

// Create a next-connect handler
const apiRoute = nc({
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

// Multer configuration for file uploading
const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploads",
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

// Add multer as a middleware for handling multipart/form-data
const uploadMiddleware = upload.array("theFiles"); // Use .single for single file upload
apiRoute.use(uploadMiddleware);

// Process a POST request
apiRoute.post((req, res) => {
    // Your file handling logic here
    res.status(200).json({ data: "success" });
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disable default body parsing
    },
};
