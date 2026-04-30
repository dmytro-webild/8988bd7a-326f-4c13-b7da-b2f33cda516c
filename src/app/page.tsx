"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, CheckCircle, MapPin, Shield, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Velvet & Stiletto"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Timeless Elegance in Every Step"
      description="Discover our exclusive collection of hand-crafted footwear and luxury apparel designed for the modern woman."
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-fashion-model_93675-128454.jpg"
      showDimOverlay={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-shine-clothes-posing-camera_613910-11037.jpg",
          alt: "Elegant fashion customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fashionable-blond-female-sits-round-chair-big-empty-room_613910-8167.jpg",
          alt: "Stylish woman in boutique",
        },
        {
          src: "http://img.b2bpic.net/free-photo/red-haired-stylish-girl-sunglasses-wear-black-against-abadoned-place_627829-10343.jpg",
          alt: "Sophisticated fashion enthusiast",
        },
        {
          src: "http://img.b2bpic.net/free-photo/slim-woman-black-short-dress-sitting-chair-white-room_613910-2869.jpg",
          alt: "Modern woman in luxury wear",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2629.jpg",
          alt: "Happy fashion boutique client",
        },
      ]}
      avatarText="Join 50,000+ satisfied style icons"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Philosophy of",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/portrait-young-man-posing_23-2148916390.jpg",
          alt: "Design studio",
        },
        {
          type: "text",
          content: "Modern Sophistication.",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Classic Beige Stiletto",
          price: "$295",
          imageSrc: "http://img.b2bpic.net/free-photo/shoes_1303-3602.jpg",
        },
        {
          id: "p2",
          name: "Silk Evening Gown",
          price: "$890",
          imageSrc: "http://img.b2bpic.net/free-photo/two-beautiful-women-evening-dresses-posing_176420-3726.jpg",
        },
        {
          id: "p3",
          name: "Midnight Suede Pumps",
          price: "$320",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-european-girl-cute-orange-sunglasses-jacket-black-hat-sitting-outdoor-autumn-fashion_273443-1617.jpg",
        },
        {
          id: "p4",
          name: "Essential Silk Blouse",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/fairskinned-adult-blonde-woman-black-pajamas-sits-indoors-white-background-relaxation-concept_197531-31168.jpg",
        },
        {
          id: "p5",
          name: "Leather Ankle Boots",
          price: "$410",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-wearing-hills_23-2149273119.jpg",
        },
        {
          id: "p6",
          name: "Satin Cocktail Dress",
          price: "$550",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-girl-glasses-pink-coat-black-tunic-posed-against-wooden-doors_627829-10962.jpg",
        },
      ]}
      title="New Arrivals"
      description="Shop the latest trends in our premium collection."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Sparkles,
          title: "Premium Materials",
          description: "Sourced from the finest tanneries in Europe.",
        },
        {
          icon: CheckCircle,
          title: "Handcrafted Care",
          description: "Artisan techniques used in every piece.",
        },
        {
          icon: Shield,
          title: "Secure Shipping",
          description: "Ensuring your luxury items arrive in perfect condition.",
        },
      ]}
      title="The Velvet Promise"
      description="Excellence in design and comfort."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "50K+",
          title: "Satisfied Customers",
          description: "Women worldwide.",
          icon: Star,
        },
        {
          id: "m2",
          value: "12",
          title: "Global Boutiques",
          description: "Key fashion capitals.",
          icon: MapPin,
        },
        {
          id: "m3",
          value: "5",
          title: "Design Awards",
          description: "Recognizing excellence.",
          icon: Award,
        },
      ]}
      title="Global Presence"
      description="Trusted by style icons across the world."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Elena Rossi",
          role: "Head Designer",
          description: "Defining the new classics.",
          imageSrc: "http://img.b2bpic.net/free-photo/two-fashionable-gorgeous-girls-wearing-elegant-evening-dresses-slender-attractive-women-with-blonde-long-hair-walking-looking-camera-girls-posing-red-powder-long-dresses_132075-12072.jpg",
        },
        {
          id: "t2",
          name: "Marcus Chen",
          role: "Creative Director",
          description: "Visualizing luxury forward.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background-glasses_158538-9629.jpg",
        },
        {
          id: "t3",
          name: "Sarah Jenkins",
          role: "Lead Craftswoman",
          description: "Perfecting every detail.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-girl-with-blonde-wavy-hair-modern-luxury-room-young-woman-smiling-wearing-stylish-elegant-black-dress-with-paillettes-sleeves_197531-2859.jpg",
        },
      ]}
      title="Creative Minds"
      description="Meet the team behind the elegance."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Executive",
          company: "Global Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sales-man-jewelry-store-using-magnifier-tool-see-quality-stone_1303-30686.jpg",
        },
        {
          id: "2",
          name: "James Foster",
          role: "Entrepreneur",
          company: "Tech Startup",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/magnificent-young-woman-with-elegant-hairstyle-looking-away-smiling-standing-outdoor-portrait-inspired-fair-haired-lady-with-red-manicure-holding-wineglass_197531-4295.jpg",
        },
        {
          id: "3",
          name: "Emily Watson",
          role: "Influencer",
          company: "Vogue Style",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bride-putting-wedding-heels_8353-12575.jpg",
        },
        {
          id: "4",
          name: "David Thorne",
          role: "Architect",
          company: "Design Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-smartphone-paper-bags_23-2147786770.jpg",
        },
        {
          id: "5",
          name: "Alice Green",
          role: "Lawyer",
          company: "Law Firm",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/shapely-red-haired-girl-posing-after-shopping-female-shopaholic-wears-red-dress_197531-11695.jpg",
        },
      ]}
      title="Voices of Elegance"
      description="See why our customers love our collections."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I choose the right fit?",
          content: "Refer to our detailed sizing guides for each product type.",
        },
        {
          id: "q2",
          title: "Do you offer returns?",
          content: "Yes, returns within 30 days are accepted if in original packaging.",
        },
        {
          id: "q3",
          title: "Are your shoes handmade?",
          content: "Every pair is carefully handcrafted by our artisans.",
        },
      ]}
      title="Frequently Asked"
      description="Have questions? We're here to help."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Inquiry"
      title="Let's Connect"
      description="Get in touch with our concierge service."
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Velvet & Stiletto"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Shoes",
              href: "#",
            },
            {
              label: "Apparel",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
