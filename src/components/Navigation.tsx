"use client";

import React, { useState } from 'react'
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [earnDropdown, setEarnDropdown] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleEarnDropdown = () => setEarnDropdown(!earnDropdown)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              SurfBit
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>

            {/* Earn Dropdown */}
            <div className="relative">
              <button
                onClick={toggleEarnDropdown}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Earn <ChevronDown size={16} className="ml-1" />
              </button>
              {earnDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href="/refer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Refer & Earn
                  </Link>
                  <Link href="/sell" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Sell Your Project
                  </Link>
                </div>
              )}
            </div>

            <Link href="/consultation" className="text-gray-700 hover:text-gray-900">
              Consultation
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-700 hover:text-gray-900">
              <ShoppingCart size={20} />
            </button>
            <button className="p-1 rounded-full text-gray-700 hover:text-gray-900">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/products" className="block py-2 text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900">
            Contact Us
          </Link>

          {/* Earn Dropdown */}
          <div className="py-2">
            <button
              onClick={toggleEarnDropdown}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              Earn <ChevronDown size={16} className="ml-1" />
            </button>
            {earnDropdown && (
              <div className="pl-4 mt-1">
                <Link href="/refer" className="block py-1 text-gray-700 hover:text-gray-900">
                  Refer & Earn
                </Link>
                <Link href="/sell" className="block py-1 text-gray-700 hover:text-gray-900">
                  Sell Your Project
                </Link>
              </div>
            )}
          </div>

          <Link href="/consultation" className="block py-2 text-gray-700 hover:text-gray-900">
            Consultation
          </Link>

          <div className="flex space-x-4 pt-2">
            <button className="p-1 rounded-full text-gray-700 hover:text-gray-900">
              <ShoppingCart size={20} />
            </button>
            <button className="p-1 rounded-full text-gray-700 hover:text-gray-900">
              <User size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation;