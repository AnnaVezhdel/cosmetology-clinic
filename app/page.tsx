"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ContactSection } from "@/components/contact-section";
import { AppointmentModal } from "@/components/appointment-modal";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />
      <main>
        <HeroSection onBookAppointment={() => setAppointmentOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <PricingSection onBookAppointment={() => setAppointmentOpen(true)} />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
      />
      <Toaster />
    </>
  );
}
