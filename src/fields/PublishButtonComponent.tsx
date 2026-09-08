'use client'
import { Button, useForm, useFormFields, toast } from '@payloadcms/ui'
import { useState } from 'react'

export default function PublishButtonComponent() {
  const { submit, getData } = useForm()
  const dispatchFields = useFormFields(([, dispatch]) => dispatch)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isPublished, setIsPublished] = useState(() => getData().status === 'published')

  const handlePublish = async () => {
    setIsVerifying(true)

    const data = getData()

    // Verifying form fields
    if (!data.theme || data.theme === '') {
      toast.error('Theme cannot be left empty')
      setIsVerifying(false)
      return
    }

    if (!data.title || data.title.length === 0) {
      toast.error('Title cannot be left empty')
      setIsVerifying(false)
    }

    dispatchFields({
      type: 'UPDATE',
      path: 'status',
      value: 'published',
    })

    dispatchFields({
      type: 'UPDATE',
      path: 'published_at',
      value: new Date().toISOString(),
    })

    // Little delay to allow completion of dispatchFields operation
    await new Promise((resolve) => setTimeout(resolve, 0))

    // console.log('Status: ', getData().status)
    // console.log('Published At: ', getData().published_at)

    await submit()
    setIsPublished(() => getData().status === 'published')
    setIsVerifying(false)
  }

  const handleUnpublish = async () => {
    dispatchFields({
      type: 'UPDATE',
      path: 'status',
      value: 'draft',
    })

    dispatchFields({
      type: 'UPDATE',
      path: 'published_at',
      value: '',
    })

    // Little delay to allow completion of dispatchFields operation
    await new Promise((resolve) => setTimeout(resolve, 0))
    await submit()
    setIsPublished(() => getData().status === 'published')
  }

  return (
    <Button
      onClick={!isPublished ? handlePublish : handleUnpublish}
      buttonStyle="secondary"
      size="medium"
    >
      {isVerifying ? 'Publishing ...' : !isPublished ? 'Publish' : 'Unpublish'}
    </Button>
  )
}
