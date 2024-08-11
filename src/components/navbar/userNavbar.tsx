'use client'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaHandHoldingMedical } from 'react-icons/fa6'

function UserNavbar(props: {fullName: string, email: string, handleLogout: () => Promise<void>}) {
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center" >
        <NavbarBrand>
          <Link href='/' color='foreground'>
          <FaHandHoldingMedical size={25} className='text-success' />
            <p className='font-bold text-inherit px-2'>Mind Tracer</p>
          </Link>
          
        </NavbarBrand>
        <NavbarItem>
          <Link color='foreground' href='/panel'>Panel</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="/images/user-loged.svg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold text-center">Logeado como {props.fullName}</p>
              <p className="font-semibold text-center">{props.email}</p>
            </DropdownItem>
            <DropdownItem onClick={props.handleLogout} key="logout" color="danger" className='text-center'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className='flex flex-col items-center justify-center gap-8'>
        <NavbarMenuItem>
        <Link color='foreground' href='/panel'>Panel</Link>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  )
}

export default UserNavbar