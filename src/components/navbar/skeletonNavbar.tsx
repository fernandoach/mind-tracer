'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Skeleton } from '@nextui-org/react'
import React from 'react'
import { FaHandHoldingMedical } from 'react-icons/fa6'

function SkeletonNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  
  return (
    <Navbar className='w-full flex flex-col gap-2 items-center justify-center' isBordered={true} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <Skeleton className='h-3 w-full rounded-lg' />
    </Navbar>
  )
}

export default SkeletonNavbar