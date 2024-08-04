import React from 'react'
import { middleware } from '../../middleware'
import { NextRequest } from 'next/server'

async function page(request: NextRequest) {
  return (
    <div>admin page</div>
  )
}

export default page