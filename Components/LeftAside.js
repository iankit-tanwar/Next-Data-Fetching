import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside className="col-3 a_tbdr"><ul class="nav flex-column">
  <li class="nav-item bg-info mt-2 mb-2 text-center">
    <Link href="students" class="nav-link text-white active">Student</Link>
   
  </li>
  <li class="nav-item bg-info mt-2 mb-2 text-center">
    <Link class="nav-link text-white" href="teachers">Teacher</Link>
  </li>
  <li class="nav-item bg-info mt-2 mb-2 text-center">
  <Link class="nav-link text-white" href="principal">Principal</Link>
  </li>
  <li class="nav-item bg-info mt-2 mb-2 text-center">
  <Link class="nav-link text-white" href="management">Management</Link>
  </li>
</ul></aside>
  )
}
