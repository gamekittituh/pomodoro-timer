"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Play, Pause, RotateCcw, Settings, Coffee, Brain, Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type TimerPhase = "work" | "shortBreak" | "longBreak"

interface TimerSettings {
  workDuration: number
  shortBreakDuration: number
  longBreakDuration: number
}

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<TimerPhase>("work")
  const [completedPomodoros, setCompletedPomodoros] = useState(0)
  const [settings, setSettings] = useState<TimerSettings>({
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
  })
  const [tempSettings, setTempSettings] = useState(settings)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const totalTime =
    phase === "work"
      ? settings.workDuration * 60
      : phase === "shortBreak"
        ? settings.shortBreakDuration * 60
        : settings.longBreakDuration * 60

  const progress = ((totalTime - timeLeft) / totalTime) * 100

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTuU2fPNeSsFJHfH8N2QQAoUXr",
      )
    }
  }, [])

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      // Timer finished
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Fallback if audio doesn't play
          console.log("Timer finished!")
        })
      }

      if (phase === "work") {
        const newCompletedPomodoros = completedPomodoros + 1
        setCompletedPomodoros(newCompletedPomodoros)

        if (newCompletedPomodoros % 4 === 0) {
          // Long break after 4 pomodoros
          setPhase("longBreak")
          setTimeLeft(settings.longBreakDuration * 60)
        } else {
          // Short break
          setPhase("shortBreak")
          setTimeLeft(settings.shortBreakDuration * 60)
        }
      } else {
        // Break finished, back to work
        setPhase("work")
        setTimeLeft(settings.workDuration * 60)
      }
      setIsActive(false)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isActive, timeLeft, phase, completedPomodoros, settings])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStart = () => {
    setIsActive(!isActive)
  }

  const handleReset = () => {
    setIsActive(false)
    setPhase("work")
    setTimeLeft(settings.workDuration * 60)
  }

  const handleSettingsUpdate = () => {
    setSettings(tempSettings)
    setIsActive(false)
    setPhase("work")
    setTimeLeft(tempSettings.workDuration * 60)
  }

  const getPhaseInfo = () => {
    switch (phase) {
      case "work":
        return {
          title: "เวลาทำงาน",
          description: "จดจ่อกับงานของคุณ",
          icon: <Brain className="w-6 h-6" />,
          color: "text-red-600",
          bgColor: "bg-red-50",
        }
      case "shortBreak":
        return {
          title: "พักสั้น",
          description: "พักผ่อนสายตาและร่างกาย",
          icon: <Coffee className="w-6 h-6" />,
          color: "text-green-600",
          bgColor: "bg-green-50",
        }
      case "longBreak":
        return {
          title: "พักยาว",
          description: "พักผ่อนให้เต็มที่",
          icon: <Coffee className="w-6 h-6" />,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
        }
    }
  }

  const phaseInfo = getPhaseInfo()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-800">Pomodoro Timer</h1>
          <p className="text-slate-600">เทคนิคการจัดการเวลาเพื่อเพิ่มประสิทธิภาพ</p>
        </div>

        {/* Main Timer Card */}
        <Card className="p-8">
          <CardContent className="space-y-6">
            {/* Phase Indicator */}
            <div className={`flex items-center justify-center gap-3 p-4 rounded-lg ${phaseInfo.bgColor}`}>
              <div className={phaseInfo.color}>{phaseInfo.icon}</div>
              <div className="text-center">
                <h2 className={`text-xl font-semibold ${phaseInfo.color}`}>{phaseInfo.title}</h2>
                <p className="text-sm text-slate-600">{phaseInfo.description}</p>
              </div>
            </div>

            {/* Timer Display */}
            <div className="text-center space-y-4">
              <div className="text-8xl font-mono font-bold text-slate-800 tracking-wider">{formatTime(timeLeft)}</div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress value={progress} className="h-3" />
                <p className="text-sm text-slate-500">{Math.round(progress)}% เสร็จสิ้น</p>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center gap-4">
              <Button onClick={handleStart} size="lg" className="px-8" variant={isActive ? "secondary" : "default"}>
                {isActive ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    หยุดชั่วคราว
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    เริ่มต้น
                  </>
                )}
              </Button>

              <Button onClick={handleReset} size="lg" variant="outline">
                <RotateCcw className="w-5 h-5 mr-2" />
                รีเซ็ต
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline">
                    <Settings className="w-5 h-5 mr-2" />
                    ตั้งค่า
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>ตั้งค่าเวลา</DialogTitle>
                    <DialogDescription>ปรับเวลาสำหรับแต่ละช่วงตามความต้องการ</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="work">เวลาทำงาน (นาที)</Label>
                      <Input
                        id="work"
                        type="number"
                        value={tempSettings.workDuration}
                        onChange={(e) =>
                          setTempSettings({
                            ...tempSettings,
                            workDuration: Number.parseInt(e.target.value) || 25,
                          })
                        }
                        min="1"
                        max="60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shortBreak">พักสั้น (นาที)</Label>
                      <Input
                        id="shortBreak"
                        type="number"
                        value={tempSettings.shortBreakDuration}
                        onChange={(e) =>
                          setTempSettings({
                            ...tempSettings,
                            shortBreakDuration: Number.parseInt(e.target.value) || 5,
                          })
                        }
                        min="1"
                        max="30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="longBreak">พักยาว (นาที)</Label>
                      <Input
                        id="longBreak"
                        type="number"
                        value={tempSettings.longBreakDuration}
                        onChange={(e) =>
                          setTempSettings({
                            ...tempSettings,
                            longBreakDuration: Number.parseInt(e.target.value) || 15,
                          })
                        }
                        min="1"
                        max="60"
                      />
                    </div>
                    <Button onClick={handleSettingsUpdate} className="w-full">
                      บันทึกการตั้งค่า
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              สถิติวันนี้
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-slate-800">{completedPomodoros}</div>
                <div className="text-sm text-slate-600">Pomodoros เสร็จสิ้น</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-slate-800">{Math.floor(completedPomodoros / 4)}</div>
                <div className="text-sm text-slate-600">รอบที่เสร็จสิ้น</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>เกี่ยวกับเทคนิค Pomodoro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  1
                </Badge>
                <div>
                  <h4 className="font-semibold">ทำงาน 25 นาที</h4>
                  <p className="text-sm text-slate-600">จดจ่ออยู่กับงานที่เลือก ทำงานอย่างเต็มที่</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  2
                </Badge>
                <div>
                  <h4 className="font-semibold">พัก 5 นาที</h4>
                  <p className="text-sm text-slate-600">พักผ่อนสายตาและร่างกาย ลุกขึ้นเดินหรือยืดเส้น</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  3
                </Badge>
                <div>
                  <h4 className="font-semibold">ทำซ้ำ 4 รอบ</h4>
                  <p className="text-sm text-slate-600">ทำซ้ำขั้นตอนที่ 1-2 อีก 3 ครั้ง</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  4
                </Badge>
                <div>
                  <h4 className="font-semibold">พักยาว 15-30 นาที</h4>
                  <p className="text-sm text-slate-600">หลังจากทำครบ 4 รอบ ให้พักยาวเพื่อฟื้นฟูพลังงาน</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">ประโยชน์ของเทคนิค Pomodoro</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• เพิ่มสมาธิและลดสิ่งรบกวน</li>
                <li>• ลดความเหนื่อยล้าจากการทำงาน</li>
                <li>• เพิ่มประสิทธิภาพในการทำงาน</li>
                <li>• ช่วยให้จัดการเวลาได้ดีขึ้น</li>
                <li>• ลดการผัดวันประกันพรุ่ง</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
