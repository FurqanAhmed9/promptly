"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"


const Nav = () => {
  const {data:session}=useSession();
  const [providers,setProviders]=useState(null);
  const [toggleDropDown,setToggleDropDown]=useState(false)

  useEffect(()=>{
    const setUproviders = async()=>{
      const response=await getProviders();

      setProviders(response)
    }

    setUproviders();
  },[])

  return (
    <nav className="flex-between w-full pt-3 mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/logo.svg"
          alt="Promptly.ai Logo"
          width={30}
          height={40}
          className="logo"
        />
          <p className="logo_text" >
            Promptly
          </p>
      </Link>

      {/* Desktop Nevigation */}
      <div className="sm:flex hidden">
          {session?.user ?
          (
            <div className="flex gap-3 md:gap-5">
              <Link 
              href="/create-prompt"
              className="black_btn"
              >
                Create Post
              </Link>

              <button 
              type="button" 
              onClick={signOut}
              className="outline_btn">
              Sign Out
              </button>

              <Link href="/profile">
                <Image 
                src={session?.user.image}
                width={40}
                height={40}
                alt="Profile"
                className="rounded-full hover:-translate-y-1"
                />
              </Link>
            </div>
          ) :
          (
            <>
              {providers &&
              Object.values(providers).map((provider)=> (
                <button 
                type="button"
                key={provider.name}
                onClick={()=>signIn(provider.id)}
                className="black_btn">
                  Sign In
                </button>
              ))} 
            </>
          )}
      </div>

      {/* Mobile Nevigation */}
      <div className="sm:hidden flex relative">
          {session?.user ?
            (
            <div className="flex">
                <Image 
                src={session?.user.image}
                width={37}
                height={37}
                alt="Profile"
                className="rounded-full"
                onClick={()=>setToggleDropDown((prev)=>
                  !prev)}
                />

                {toggleDropDown && (
                  <div className="dropdown">
                    <Link 
                    href="/profile"
                    className="dropdown_link"
                    onClick={()=>setToggleDropDown(false)}
                    >
                    My Profile
                    </Link>

                    <Link 
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={()=>setToggleDropDown(false)}
                    >
                    Create Prompt
                    </Link>
                    <button
                    type="button"
                    onClick={()=>{
                      setToggleDropDown(false);
                      signOut();
                    }}
                    className="mt-5 w-full outline_btn">
                      Sign Out
                    </button>
                  </div>
                )
                }
            </div>
          ) :
          (
            <>
              {providers &&
              Object.values(providers).map((provider)=> (
                <button 
                type="button"
                key={provider.name}
                onClick={()=>signIn(provider.id)}
                className="black_btn">
                  Sign In
                </button>
              ))} 
            </>
          )}
      </div>

    </nav>
  )
}

export default Nav
