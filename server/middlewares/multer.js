import multer from "multer"

const multerUpload = multer({
    limits: {
        filesSize: 1024 * 1024 * 5,
    },
});

const singleAvatar = multerUpload.single("avatar");

export {
    singleAvatar
}