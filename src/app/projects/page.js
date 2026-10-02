'use client';

import { useEffect, useState } from 'react';
import './projects.css';

const projects = [
  // BRANDING PROJECTS (20+)
  {
    id: 1,
    name: 'Jaykay Delights Branding',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Complete brand identity design for Jaykay Delights including logo, product packaging, and visual guidelines.',
    tools: ['Illustrator', 'Photoshop', 'CorelDRAW'],
    image: '/image/JAYKAY/JK LOGO.png',
    alt: 'Jaykay Delights complete brand identity logo design featuring modern typography and visual elements'
  },
  {
    id: 2,
    name: 'Buymore Product Branding',
    category: 'branding',
    for: 'Buymore',
    description: 'Product packaging and branding design for Buymore snack products including plantain chips and kulikuli.',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    image: '/image/JAYKAY/BUYMORE/PLANTAIN CHIPS_RIPE.jpg',
    alt: 'Buymore plantain chips product packaging design with vibrant branding and nutritional information'
  },
  {
    id: 3,
    name: 'Abanacars Cafe Branding',
    category: 'branding',
    for: 'Abanacars Cafe',
    description: 'Complete brand identity for Abanacars Cafe including logo, menu design, and promotional materials.',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    image: '/image/JAYKAY/BRO WOLE/ABANACARS CAFE/ABANACARS CAFE LOGO.PNG',
    alt: 'Abanacars Cafe restaurant logo design with professional branding for food service business'
  },
  {
    id: 4,
    name: 'Product Photography & Design',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Professional product photography combined with graphic design for marketing materials and social media.',
    tools: ['Photoshop', 'Lightroom', 'Illustrator'],
    image: '/image/JAYKAY/CHIN CHIN.jpg',
    alt: 'Professional product photography of chin chin snack with graphic design overlays for marketing materials'
  },
  {
    id: 5,
    name: 'NAFDAC Compliance Design',
    category: 'branding',
    for: 'Buymore',
    description: 'Regulatory compliance packaging design meeting NAFDAC standards for Buymore product line.',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    image: '/image/JAYKAY/BUYMORE/NAFDAC/BUYMORE_CHIN CHIN.png',
    alt: 'NAFDAC compliant chin chin product packaging design with regulatory information and safety labels'
  },
  {
    id: 6,
    name: 'Ose 2027 Campaign',
    category: 'branding',
    for: 'Ose 2027',
    description: 'Political campaign branding including logo design and promotional materials for Ose 2027.',
    tools: ['Illustrator', 'Photoshop', 'CorelDRAW'],
    image: '/image/JAYKAY/BRO WOLE/OSE 2027/LOGOS/5.png',
    alt: 'Ose 2027 political campaign logo design with professional branding and promotional materials'
  },
  {
    id: 7,
    name: 'Potato Chips Packaging',
    category: 'branding',
    for: 'Buymore',
    description: 'Product packaging design for Buymore potato chips with vibrant branding and nutritional information.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/POTATO CHIPS.png',
    alt: 'Buymore potato chips product packaging design with vibrant branding and nutritional information'
  },
  {
    id: 8,
    name: 'Ripe Plantain Chips Design',
    category: 'branding',
    for: 'Buymore',
    description: 'Packaging design for ripe plantain chips featuring appetizing product imagery and brand elements.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/RIPE.png',
    alt: 'Ripe plantain chips packaging design with appetizing product imagery and brand elements'
  },
  {
    id: 9,
    name: 'Kulikuli Product Design',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Traditional snack packaging design for kulikuli with cultural elements and modern branding.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/february/KULI KULI.jpg',
    alt: 'Traditional kulikuli snack packaging design with cultural elements and modern branding'
  },
  {
    id: 10,
    name: 'Ginger Drink Design',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Beverage packaging design for ginger drink product with refreshing visual identity.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/FLYERS/2026/february/GINGER DRINK.jpg',
    alt: 'Ginger drink beverage packaging design with refreshing visual identity and brand elements'
  },
  {
    id: 11,
    name: 'Mango Juice Branding',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Tropical fruit juice packaging design with vibrant colors and appetizing imagery.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/FLYERS/2026/february/MANGO JUICE.jpg',
    alt: 'Tropical mango juice packaging design with vibrant colors and appetizing product imagery'
  },
  {
    id: 12,
    name: 'Tigernut Drink Design',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Traditional tigernut beverage packaging with cultural authenticity and modern appeal.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/FLYERS/2026/february/TIGERNUT.jpg',
    alt: 'Traditional tigernut beverage packaging design with cultural authenticity and modern appeal'
  },
  {
    id: 13,
    name: 'Tamarind Drink Design',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Unique tamarind beverage packaging design with distinctive flavor representation.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/FLYERS/2026/february/TAMARIND DRINK.jpg',
    alt: 'Unique tamarind beverage packaging design with distinctive flavor representation and branding'
  },
  {
    id: 14,
    name: 'Chilli Powder Packaging',
    category: 'branding',
    for: 'Buymore',
    description: 'Spice product packaging design for chilli powder with bold branding and safety information.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/CHILLI POWDER.png',
    alt: 'Chilli powder spice product packaging design with bold branding and safety information'
  },
  {
    id: 15,
    name: 'Peanuts Burger Design',
    category: 'branding',
    for: 'Jaykay Delights',
    description: 'Snack product packaging for peanuts burger with playful branding and nutritional highlights.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/FLYERS/2026/february/PEANUTS BURGER.jpg',
    alt: 'Peanuts burger snack product packaging with playful branding and nutritional highlights'
  },
  {
    id: 16,
    name: 'Kulikuli Sticker Design',
    category: 'branding',
    for: 'Buymore',
    description: 'Product label and sticker design for kulikuli packaging with brand consistency.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/SQUARE STICKERS/BUYMORE_KULIKULI.jpg',
    alt: 'Kulikuli product label and sticker design with brand consistency and visual elements'
  },
  {
    id: 17,
    name: 'Abujacar Branding',
    category: 'branding',
    for: 'Abujacar',
    description: 'Complete brand identity for Abujacar including logo design and promotional materials.',
    tools: ['Illustrator', 'Photoshop', 'CorelDRAW'],
    image: '/image/JAYKAY/Abujacar.jpg',
    alt: 'Abujacar complete brand identity design including logo and promotional materials'
  },
  {
    id: 18,
    name: 'Olusco Box Design',
    category: 'branding',
    for: 'Olusco',
    description: 'Product packaging box design with modern branding and product information layout.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/olusco box.jpg',
    alt: 'Olusco product packaging box design with modern branding and product information layout'
  },
  {
    id: 19,
    name: 'Unripe Plantain Packaging',
    category: 'branding',
    for: 'Buymore',
    description: 'Packaging design for unripe plantain chips with fresh green color scheme.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/UR.png',
    alt: 'Unripe plantain chips packaging design with fresh green color scheme and brand elements'
  },
  {
    id: 20,
    name: 'Spicy Plantain Packaging',
    category: 'branding',
    for: 'Buymore',
    description: 'Packaging design for spicy plantain chips with bold flavor indicators.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/UR_SPICY.png',
    alt: 'Spicy plantain chips packaging design with bold flavor indicators and heat level graphics'
  },
  {
    id: 21,
    name: 'Spicy Potato Chips Design',
    category: 'branding',
    for: 'Buymore',
    description: 'Spicy variant packaging for potato chips with heat level indicators.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/POTATO CHIPS_SPICY.png',
    alt: 'Spicy potato chips variant packaging design with heat level indicators and bold branding'
  },
  {
    id: 22,
    name: 'Ripe Spicy Plantain Design',
    category: 'branding',
    for: 'Buymore',
    description: 'Combination packaging for ripe and spicy plantain chips variant.',
    tools: ['Illustrator', 'Photoshop'],
    image: '/image/JAYKAY/BUYMORE/RIPE_SPICY.png',
    alt: 'Ripe and spicy plantain chips combination packaging design with flavor indicators'
  },

  // FLYERS PROJECTS (20+)
  {
    id: 23,
    name: 'Jaykay Product Flyers',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Series of promotional flyers for Jaykay products including yoghurts, chin chin, and plantain chips.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/february/YOGHURTS.jpg',
    alt: 'Jaykay Delights product promotional flyers featuring yoghurts, chin chin, and plantain chips with vibrant branding'
  },
  {
    id: 24,
    name: 'Seasonal Promotional Flyers',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Seasonal flyer designs for special occasions including Valentine\'s Day, Easter, and holiday promotions.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/february/HAPPY VAL.jpg',
    alt: 'Seasonal promotional flyer design for holiday campaign with festive graphics and special offers'
  },
  {
    id: 25,
    name: 'Event Backdrop Design',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Large format event backdrop designs for product launches and promotional events.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/APRIL_JK/JK_BACKDROP.png',
    alt: 'Large format event backdrop design for product launch with professional graphics and branding'
  },
  {
    id: 26,
    name: 'Price List Design',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Professional price list designs for distribution across multiple locations and digital platforms.',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    image: '/image/JAYKAY/FLYERS/2026/PRICE LIST/PRICE LIST 1.jpg',
    alt: 'Professional price list design with clear product pricing and branding for distribution'
  },
  {
    id: 27,
    name: 'Grand Opening Design',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Grand opening promotional materials including flyers, banners, and social media graphics.',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    image: '/image/JAYKAY/FLYERS/2026/APRIL_JK/GRAND OPENING.png',
    alt: 'Grand opening promotional flyer design with celebratory graphics and launch information'
  },
  {
    id: 28,
    name: 'All You Need Campaign',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Comprehensive promotional campaign highlighting product variety and quality.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MARCH_JAYKAY/ALL YOU NEED.jpg'
  },
  {
    id: 29,
    name: 'Distributor Campaign',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Business-to-business promotional materials for distributor recruitment and partnership.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MARCH_JAYKAY/BECOME A DISTRIBUTOR.jpg'
  },
  {
    id: 30,
    name: 'We Are Open Campaign',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Opening announcement materials for new location or business expansion.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MARCH_JAYKAY/WE ARE OPEN.jpg'
  },
  {
    id: 31,
    name: 'Good Friday Flyer',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Easter season promotional flyer design for Good Friday special offers.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/APRIL_JK/GOOD FRIDAY.jpg'
  },
  {
    id: 32,
    name: 'Did You Know Campaign',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Educational promotional flyers highlighting product benefits and features.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MARCH_JAYKAY/DID YOU KNOW_.jpg'
  },
  {
    id: 33,
    name: 'New Month Flyer',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Monthly promotional flyer celebrating new month with special offers.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/NOVEMBER/MAKET RUNS WITH JAYKAY.jpg'
  },
  {
    id: 34,
    name: 'Jaykay Double Sachet Mockup',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Product mockup flyer design for double sachet packaging presentation.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/NOVEMBER/Jaykay - Double Sachet Mockup copy.png'
  },
  {
    id: 35,
    name: 'HNM May Flyer',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'May promotional flyer design for HNM campaign with seasonal themes.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/HNM MAY (JAYKAY).jpg'
  },
  {
    id: 36,
    name: 'Jaykay on Chowdeck Flyer',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Partnership announcement flyer for Chowdeck delivery platform integration.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/JAYKAY ON CHOWDECK.png'
  },
  {
    id: 37,
    name: 'Jaykay Delights Truth',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Informational flyer sharing brand story and product quality commitment.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MAY_JK/CAROUSEL/WHY YOU FEEL TIRED\JAYKAY DELIGHTS TRUTH.png'
  },
  {
    id: 38,
    name: 'Meet Jaykay Price List',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Comprehensive price list flyer for Ekiti region distribution.',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/images/images/MEET-JAYKAY-(EKITI-PRICE-LIST)_03.png'
  },
  {
    id: 39,
    name: 'Progress is Working',
    category: 'flyers',
    for: 'Ose 2027',
    description: 'Political campaign flyer promoting progress and development agenda.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/BRO WOLE/OSE 2027/FLYERS/PROGRESS IS WORKING.png'
  },
  {
    id: 40,
    name: 'Abanacars Menu',
    category: 'flyers',
    for: 'Abanacars Cafe',
    description: 'Restaurant menu design with appetizing food photography and pricing.',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    image: '/image/JAYKAY/BRO WOLE/ABANACARS CAFE/BOBA MILKSHAKE MENU.jpg'
  },
  {
    id: 41,
    name: 'Ramadan Sales Flyer',
    category: 'flyers',
    for: 'Abanacars Cafe',
    description: 'Seasonal promotional flyer for Ramadan special offers and menu items.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/BRO WOLE/ABANACARS CAFE/RAMADAN SALES.jpg',
    alt: 'Ramadan seasonal promotional flyer for Abanacars Cafe with special offers and menu items'
  },
  {
    id: 42,
    name: 'We Are Hiring',
    category: 'flyers',
    for: 'Abanacars Cafe',
    description: 'Recruitment flyer design for cafe staff positions with professional branding.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/BRO WOLE/ABANACARS CAFE/ABANACARS/WE ARE HIRING.png',
    alt: 'Abanacars Cafe recruitment flyer design for hiring staff with professional branding'
  },
  {
    id: 43,
    name: 'Free Delivery Ekiti',
    category: 'flyers',
    for: 'Jaykay Delights',
    description: 'Promotional flyer announcing free delivery service for Ekiti and Abuja regions.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/APRIL_JK/FREE DELIVERY (EKITI AND ABUJA).png',
    alt: 'Free delivery promotional flyer for Ekiti and Abuja regions with service information'
  },

  // SOCIAL MEDIA PROJECTS (20+)
  {
    id: 44,
    name: 'Jaykay Social Media Campaigns',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media carousel designs and promotional graphics for Jaykay Delights marketing campaigns.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_01.gif',
    alt: 'Jaykay Delights social media carousel design for marketing campaigns with animated graphics'
  },
  {
    id: 45,
    name: 'Chowdeck Partnership Design',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media graphics for Chowdeck partnership announcement and promotional campaign.',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    image: '/image/JAYKAY/FLYERS/2026/MAY_JK/FLYERS/JAYKAY ON CHOWDECK.png',
    alt: 'Chowdeck partnership announcement social media graphics with promotional campaign branding'
  },
  {
    id: 46,
    name: 'Free Delivery Campaign',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media graphics promoting free delivery service for specific regions.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MAY_JK/FREE DELIVERY STARTS TODAY.jpg',
    alt: 'Free delivery campaign social media graphics promoting regional delivery service'
  },
  {
    id: 47,
    name: 'Factory Reveal Design',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Behind-the-scenes content design showcasing production facility and quality standards.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/MARCH_JAYKAY/FACTORY REVEAL.jpg',
    alt: 'Behind-the-scenes factory reveal content showcasing production facility and quality standards'
  },
  {
    id: 48,
    name: 'Jaykay Carousel Meet Jaykay',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media carousel series introducing Jaykay Delights brand and products.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_01.gif',
    alt: 'Jaykay Delights social media carousel slide introducing brand and products'
  },
  {
    id: 49,
    name: 'Jaykay Carousel 02',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Second slide in carousel series featuring product highlights.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_02.gif',
    alt: 'Jaykay Delights carousel slide featuring product highlights and variety'
  },
  {
    id: 50,
    name: 'Jaykay Carousel 03',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Third carousel slide showcasing brand values and quality commitment.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_03.gif',
    alt: 'Jaykay Delights carousel slide showcasing brand values and quality commitment'
  },
  {
    id: 51,
    name: 'Jaykay Carousel 04',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Fourth carousel slide with customer testimonials and reviews.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_04.gif',
    alt: 'Jaykay Delights carousel slide with customer testimonials and reviews'
  },
  {
    id: 52,
    name: 'Jaykay Carousel 05',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Fifth carousel slide featuring product range and variety.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_05.gif',
    alt: 'Jaykay Delights carousel slide featuring product range and variety'
  },
  {
    id: 53,
    name: 'Jaykay Carousel 06',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Sixth carousel slide with promotional offers and call-to-action.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_06.gif',
    alt: 'Jaykay Delights carousel slide with promotional offers and call-to-action'
  },
  {
    id: 54,
    name: 'Jaykay Carousel 07',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Seventh carousel slide highlighting health benefits of products.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_07.gif',
    alt: 'Jaykay Delights carousel slide highlighting health benefits of products'
  },
  {
    id: 55,
    name: 'Jaykay Carousel 08',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Eighth carousel slide with distribution network information.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_08.gif',
    alt: 'Jaykay Delights carousel slide with distribution network information'
  },
  {
    id: 56,
    name: 'Jaykay Carousel 09',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Ninth carousel slide featuring customer success stories.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_09.gif',
    alt: 'Jaykay Delights carousel slide featuring customer success stories'
  },
  {
    id: 57,
    name: 'Jaykay Carousel 10',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Tenth carousel slide with brand vision and future plans.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/MAY/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_10.gif',
    alt: 'Jaykay Delights carousel slide with brand vision and future plans'
  },
  {
    id: 58,
    name: 'Jaykay Academy Carousel',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media content for Jaykay Delights Academy training programs.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_01.gif',
    alt: 'Jaykay Delights Academy social media content for training programs'
  },
  {
    id: 59,
    name: 'Jaykay Fabrication',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media graphics showcasing fabrication and production capabilities.',
    tools: ['Photoshop', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/february/JAYKAY FABRICATION.jpg',
    alt: 'Jaykay Delights fabrication facility showcase with production capabilities'
  },
  {
    id: 60,
    name: 'Refer and Win Campaign',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Social media referral program graphics with incentives and rewards.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/february/REFER AND WIN.jpg',
    alt: 'Jaykay Delights refer and win campaign social media graphics with referral incentives'
  },
  {
    id: 61,
    name: 'Hello February',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'Monthly social media greeting design for February with seasonal themes.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/february/Hello February.jpg',
    alt: 'February monthly social media greeting design with seasonal themes'
  },
  {
    id: 62,
    name: 'Jaykay Carousel June 02',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'June carousel series second slide with summer promotional content.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_02.gif',
    alt: 'Jaykay Delights June carousel slide with summer promotional content'
  },
  {
    id: 63,
    name: 'Jaykay Carousel June 03',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'June carousel third slide with product showcase.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_03.gif',
    alt: 'Jaykay Delights June carousel slide with product showcase'
  },
  {
    id: 64,
    name: 'Jaykay Carousel June 04',
    category: 'social-media',
    for: 'Jaykay Delights',
    description: 'June carousel fourth slide with customer engagement content.',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    image: '/image/JAYKAY/FLYERS/2026/JUNE_JK/images/JAYKAY-CAROUSEL-(MEET-JAYKAY-DELIGHTS)_04.gif',
    alt: 'Jaykay Delights June carousel slide with customer engagement content'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'branding', name: 'Branding' },
  { id: 'social-media', name: 'Social Media' },
  { id: 'flyers', name: 'Flyers' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [filteredProjects]);

  return (
    <div className="projects-page">
      <section className="projects-header">
        <div className="container">
          <h1 className="page-title reveal-scale">My Work</h1>
          <p className="page-subtitle reveal">
            A collection of my design projects across various categories
          </p>
        </div>
      </section>

      <section className="projects-filter">
        <div className="container">
          <div className="filter-buttons reveal">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container">
          <div className="grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              >
                <div className="project-image" onClick={() => setSelectedImage(project)}>
                  <img 
                    src={project.image} 
                    alt={project.alt || project.name}
                    className="project-img"
                    loading="lazy"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-for">For: {project.for}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tools">
                    <span className="tools-label">Tools:</span>
                    <div className="tools-list">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <button className="view-design-btn" onClick={() => setSelectedImage(project)}>
                    View Design
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <div className="container">
            <p className="reveal">No projects found in this category.</p>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.alt || selectedImage.name} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedImage.name}</h3>
              <p>For: {selectedImage.for}</p>
              <p className="modal-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
