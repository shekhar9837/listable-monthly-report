'use client'

import React, { useEffect, useState } from 'react'
import { MdFullscreenExit } from "react-icons/md";

type HeaderProps = {
  currentIndex: number;
  totalSlides: number;
};

export default function Header({ currentIndex, totalSlides }: HeaderProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    handleFullscreenChange()
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      return
    }

    document.exitFullscreen()
  }

  return (
    <div className="fixed left-0 top-0 z-20 w-full bg-white/95 backdrop-blur-md border-b border-border">
    <div className="mx-auto flex w-full  items-center justify-between px-4 sm:px-6 md:px-8 py-3">
      <p className="text-xs text-muted gap-2 flex">
        <span className="text-primary font-semibold text-sm tracking-tight">Report   </span>
        <span className="text-secondary text-sm tracking-wider">
        • {currentIndex + 1} / {totalSlides}
        </span>
      </p>
      <button
        className="flex items-center gap-1 rounded-lg border border-border bg-border px-2 py-1 text-sm font-medium text-primary"
        type="button"
        onClick={handleFullscreenToggle}
      >
        <MdFullscreenExit size={20} />

        {isFullscreen ? 'Exit' : 'Present'}
      </button>
    </div>
  </div>  )
}