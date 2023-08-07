import cloudinary from "../config/cloudinary"

export const uploadImage = async (req, res) => {
    
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            upload_preset: 'my_upload_preset'
        })
        fs.unlinkSync(req.file.path);
        res.status(200).json({
            url: result.secure_url,
            publicId: result.public_id
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

