import {
  Adapter,
  GenerateURL,
  HandleUpload,
  HandleDelete,
  StaticHandler,
} from '@payloadcms/plugin-cloud-storage/types'
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  analytics: false,
})

const FOLDER = 'personal-website'

// helper function: Generate public id. It also include the name of the folder
const getPublicId = (filename: string, prefix: string = '') =>
  path.posix.join(FOLDER, prefix, filename.replace(/\.[^/.]+$/, ''))

export const cloudinaryAdapter = (): Adapter => () => {
  const handleUpload: HandleUpload = async ({ file, data }) => {
    const result = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          public_id: getPublicId(data.filename), // set public_id to name of file without extension
        },
        (error, result) => (error ? reject(error) : resolve(result)),
      )
      stream.end(file.buffer)
    })

    return data
  }

  const handleDelete: HandleDelete = async ({ doc, filename }) => {
    const result = await cloudinary.uploader.destroy(getPublicId(filename, doc.prefix))
    if (result.result !== 'ok') {
      console.error('Cloudinary delete failed: ', result)
    }
  }

  const generateURL: GenerateURL = ({ filename, prefix }) => {
    const extension = filename.split('.').pop()
    return cloudinary.url(getPublicId(filename, prefix), { secure: true, format: extension })
  }

  const staticHandler: StaticHandler = async () =>
    new Response('Not in use ― serving direct cloudinary Links', { status: 404 })

  return {
    name: 'cloudinary',
    handleUpload,
    handleDelete,
    generateURL,
    staticHandler,
  }
}
