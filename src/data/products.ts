export interface Product {
  id: string;
  sku: string;
  name: string;
  swedishSubtitle: string;
  category: 'duka' | 'ljus' | 'textil' | 'smasaker';
  price: number;
  badge?: string;
  description: string;
  provenance: string;
  material: string;
  dimensions: string;
  inStock: boolean;
  images: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'wiggle-butter-dish',
    sku: 'RM-01',
    name: 'The Wiggle Butter Dish',
    swedishSubtitle: 'Smörask med vågkant',
    category: 'duka',
    price: 58,
    badge: 'Hero Piece',
    description: 'A cheerful hand-glazed earthenware butter crock with an undulating wavy rim and a charming mushroom knob. Made for unhurried Swedish morning breakfasts.',
    provenance: 'Handmade in Alcobaça, Portugal',
    material: 'High-fire earthenware with glossy food-safe glaze',
    dimensions: '14cm L × 10cm W × 8.5cm H',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'krumelur-candlestick',
    sku: 'RM-02',
    name: 'Krumelur Twist Candlestick',
    swedishSubtitle: 'Tvilling-ljusstake',
    category: 'ljus',
    price: 64,
    badge: 'Popular',
    description: 'Sculptural asymmetric stoneware candlestick designed to hold twin tapers in joyful dialog. Inspired by Swedish wood shavings and whimsical folk ironwork.',
    provenance: 'Cast & hand-finished in Caldas da Rainha, Portugal',
    material: 'Matte-finish speckled ceramic stoneware',
    dimensions: '19cm H × 14cm W',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'skogsbar-napkins',
    sku: 'RM-03',
    name: 'Skogsbär Scallop Napkins (Set of 4)',
    swedishSubtitle: 'Linneduk med vågig kant',
    category: 'duka',
    price: 72,
    badge: 'Heirloom Linen',
    description: 'Sumptuously pre-washed Baltic flax linen finished with a vibrant lingonberry-red scalloped merrow border. Gets softer with every Sunday gathering.',
    provenance: 'Woven & sewn in Kaunas, Lithuania',
    material: '100% Washed European Flax (OEKO-TEX Class 1)',
    dimensions: '45cm × 45cm (Set of 4)',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'bobbin-birch-lamp',
    sku: 'RM-04',
    name: 'Bobbin Turned Birch Lamp',
    swedishSubtitle: 'Svarvad bordslampa med plissérad skärm',
    category: 'ljus',
    price: 165,
    badge: 'Signature',
    description: 'A timeless spindle-turned solid FSC birch lamp base paired with a pleated blue-and-cream gingham empire shade. Emits an amber, storytelling bedside glow.',
    provenance: 'Turned in Småland, Sweden; shade hand-pleated in England',
    material: 'FSC Certified Scandinavian Birch, 100% Cotton shade, brass finial',
    dimensions: '42cm H (with shade) × 26cm Shade Diameter',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'fika-mug-cloud',
    sku: 'RM-05',
    name: 'Fika Mug in Cloud & Butter',
    swedishSubtitle: 'Kopp för livets fikastunder',
    category: 'duka',
    price: 38,
    badge: 'Staff Favorite',
    description: 'A generous hand-thrown silhouette featuring an oversized circular ring handle. The exterior has a chalky speckled white glaze, while the interior shines in buttercup yellow.',
    provenance: 'Wheel-finished in Alcobaça, Portugal',
    material: 'Dense culinary stoneware; dishwasher and microwave safe',
    dimensions: '360ml capacity; 9cm diameter × 8.5cm H',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'trollskogen-matchbox',
    sku: 'RM-06',
    name: 'Trollskogen Cast Brass Matchbox',
    swedishSubtitle: 'Mässingsfodral för tändstickor',
    category: 'smasaker',
    price: 48,
    description: 'A weighty heirloom cover that slips over any standard matchbox. Hand-cast with whimsical Swedish forest ferns and a tiny hidden mushroom motif.',
    provenance: 'Sand-cast in Moradabad, India',
    material: '100% Solid Unlacquered Brass (patinas gracefully over time)',
    dimensions: '11.5cm L × 6.5cm W × 2.2cm H',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'solstrale-cushion',
    sku: 'RM-07',
    name: 'Solstråle Ruffle Check Cushion',
    swedishSubtitle: 'Volangkudde i vävd bomullslinne',
    category: 'textil',
    price: 85,
    badge: 'Limited Run',
    description: 'Woven checkerboard in buttery oat and midnight lake blue, framed with a generous 5cm pleated perimeter ruffle. Filled with ethically sourced feather insert.',
    provenance: 'Woven & tailored in Portugal',
    material: '55% Linen, 45% Organic Cotton, duck feather insert',
    dimensions: '50cm × 50cm including ruffles',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'blommor-wall-pegs',
    sku: 'RM-08',
    name: 'Blommor Carved Flower Pegs (Pair)',
    swedishSubtitle: 'Träknoppar i snidad lind',
    category: 'smasaker',
    price: 44,
    description: 'Wall pegs shaped like hand-carved Swedish folk flowers. Perfect for hanging your kitchen apron, linen towels, or garden scissors.',
    provenance: 'Carved in Småland, Sweden',
    material: 'Sustainably harvested Linden wood, natural wax finish',
    dimensions: '7.5cm diameter bloom, 8cm wall projection (Pair of 2)',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'spiral-birch-tapers',
    sku: 'RM-09',
    name: 'Hand-Twisted Honey Tapers (Set of 2)',
    swedishSubtitle: 'Vridna ljus i svenskt bivax',
    category: 'ljus',
    price: 26,
    description: 'Traditional dipped tapers gently twisted by hand while warm. Infuses the room with a subtle natural honey aroma and burns cleanly for 9 hours.',
    provenance: 'Hand-dipped in Västmanland, Sweden',
    material: 'Pure Nordic beeswax and organic cotton wick',
    dimensions: '28cm L × standard 2.2cm base',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'heirloom-botanical-tray',
    sku: 'RM-10',
    name: 'The Reum Botanical Birch Tray',
    swedishSubtitle: 'Klassisk serveringsbricka i björkfanér',
    category: 'duka',
    price: 68,
    badge: 'Swedish Classic',
    description: 'Laminated birch veneer tray featuring whimsical Swedish wildflowers, blueberries, and tiny visiting bumblebees. Dishwasher safe and durable enough for daily fika.',
    provenance: 'Manufactured on the island of Öland, Sweden',
    material: 'FSC Certified Scandinavian Birch Veneer',
    dimensions: '38cm Round',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Objects', swedish: 'Alla Föremål' },
  { id: 'duka', name: 'Table & Feasting', swedish: 'Duka' },
  { id: 'ljus', name: 'Light & Glow', swedish: 'Ljus' },
  { id: 'textil', name: 'Linens & Rest', swedish: 'Textilier' },
  { id: 'smasaker', name: 'Curios & Brass', swedish: 'Småsaker' },
];

