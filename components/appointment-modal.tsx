"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { toast } from "sonner"

interface AppointmentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const services = [
  "Dermální výplně",
  "Hydrafacial",
  "Laserové ošetření",
  "Chemické peelingy",
  "Mikrojehličkování",
  "PRP terapie",
  "Úvodní konzultace",
]

const timeSlots = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
]

export function AppointmentModal({
  open,
  onOpenChange,
}: AppointmentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onOpenChange(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    })

    toast.success("Žádost o termín odeslána!", {
      description:
        "Váš termín potvrdíme do 24 hodin e-mailem.",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-card sm:max-w-lg">
        <DialogHeader>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="font-serif text-2xl font-bold text-foreground">
            Rezervovat termín
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Vyplňte níže uvedené údaje a náš tým potvrdí váš termín
            do 24 hodin.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Celé jméno
            </Label>
            <Input
              id="name"
              placeholder="Vaše celé jméno"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="rounded-lg border-border bg-background"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="vas@email.cz"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="rounded-lg border-border bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                Telefon
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+420 777 888 999"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="rounded-lg border-border bg-background"
              />
            </div>
          </div>

          {/* Service */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium text-foreground">Služba</Label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
              required
            >
              <SelectTrigger className="rounded-lg border-border bg-background">
                <SelectValue placeholder="Vyberte ošetření" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date & Time */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date" className="text-sm font-medium text-foreground">
                Preferovaný datum
              </Label>
              <Input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="rounded-lg border-border bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium text-foreground">Preferovaný čas</Label>
              <Select
                value={formData.time}
                onValueChange={(value) =>
                  setFormData({ ...formData, time: value })
                }
                required
              >
                <SelectTrigger className="rounded-lg border-border bg-background">
                  <SelectValue placeholder="Vyberte čas" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Doplňující poznámky{" "}
              <span className="text-muted-foreground">(volitelné)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Sdělte nám své dotazy nebo obavy..."
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="rounded-lg border-border bg-background"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-full bg-primary py-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? "Odesílám..." : "Odeslat žádost o termín"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            {"Odesláním souhlasíte s našimi "}
            <a href="#" className="text-primary underline">
              zásadami ochrany soukromí
            </a>
            {" a "}
            <a href="#" className="text-primary underline">
              obchodními podmínkami
            </a>
            .
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
