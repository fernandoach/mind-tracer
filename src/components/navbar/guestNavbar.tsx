'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import React from 'react'
import { FaHandHoldingMedical } from 'react-icons/fa6'

function GuestNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  
  return (
    <Navbar isBordered={true} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <Link href='/' color='foreground'>
          <FaHandHoldingMedical size={25} className='text-success' />
            <p className='font-bold text-inherit px-2'>Mind Tracer</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center' >
        <NavbarBrand>
          <Link href='/' color='foreground'>
          <FaHandHoldingMedical size={25} className='text-success' />
            <p className='font-bold text-inherit px-2'>Mind Tracer</p>
          </Link>
          
        </NavbarBrand>
        <NavbarItem>
          <Link color='foreground' href='/#caracteristicas'>Características</Link>
        </NavbarItem>

        <NavbarItem>
          <Link color='foreground' href='/#beneficios'>Beneficios</Link>
        </NavbarItem>

        <NavbarItem>
          <Link color='foreground' href='/#comofunciona'>¿Como funciona?</Link>
        </NavbarItem>

        <NavbarItem>
          <Link color='foreground' href='/#llamadoaccion'>Llamado a la acción</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='flex flex-col items-center justify-center gap-8'>
        <NavbarMenuItem className='flex items-center justify-center'>
        <Link color='foreground'  href='/#caracteristicas'>Características</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link color='foreground' href='/#beneficios'>Beneficios</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link color='foreground' href='/#comofunciona'>¿Como funciona?</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link color='foreground' href='/#llamadoaccion'>Llamado a la acción</Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  )
}

export default GuestNavbar