"use client"

import React, { useEffect, useState } from 'react'
import Form from '@components/Form'
import { useRouter, useSearchParams } from 'next/navigation'

const EditPrompt = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const promptId = searchParams.get('id')

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  });

  const updatePrompt = async e => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert('Prompt ID not found')

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
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

  useEffect(() => {
    const getPromptDetails = async () => {
        const res = await fetch(`/api/prompt/${promptId}`)
        const data = await res.json();

        setPost({
            prompt: data.prompt,
            tag: data.tag
        })

        console.log(data);
    }

    if (promptId) getPromptDetails()
  }, [promptId])

  return (
    <Form
      post={post}
      type='Edit'
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt