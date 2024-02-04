"use client"

import React, { useState } from 'react'
import Form from '@components/Form'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const CreatePrompt = () => {

  const router = useRouter()
  const { data: session } = useSession()

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  });

  const createPrompt = async e => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id
        })
      })

      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      post={post}
      type='Create'
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    >
    
    </Form>
  )
}

export default CreatePrompt