/**
 * ALL IMAGES LIVE HERE
 * --------------------
 * Just replace the paths below with your real files in /public/images/...
 */

export const images = {
  hero: {
    /** Transparent PNG of the hero lamp (about 900 x 1000) */
    lamp: "/1-removebg-preview.png",
    thumb: "/hero.webp",
  },

  ticker: [
    "/13.webp",
    "/20.avif",
    "/21.webp",
    "/22.webp",
  ],

  about: {
    video: "/5.webp",
    gallery: [
      { full: "/1.webp", thumb: "/1.webp" },
      { full: "/2.webp", thumb: "/2.webp" },
      { full: "/3.webp", thumb: "/3.webp" },
      { full: "/4.webp", thumb: "/4.webp" },
    ],
  },

  products: [
    {
      name: "Fungi Table Lamp",
      price: "$128",
      tag: "Bestseller",
      swatches: ["#f3e6a8", "#b7d6a6", "#e9d3c4"],
      images: ["/hero.webp", "/6.webp"],
    },
    {
      name: "Ribbed Pendant",
      price: "$164",
      tag: "New",
      swatches: ["#b7d6a6", "#f3e6a8"],
      images: ["/il_1588xN.8099888456_2ui2.webp", "/il_1588xN.8121372901_qtma.webp"],
    },
    {
      name: "Pebble Desk Light",
      price: "$96",
      tag: "",
      swatches: ["#e9d3c4", "#ffffff", "#b7d6a6"],
      images: ["/8.webp", "/9.webp"],
    },
    {
      name: "Arc Floor Light",
      price: "$240",
      tag: "Limited",
      swatches: ["#5f6f3b", "#f3e6a8"], 
      images: ["/10.webp", "/11.webp"],
    },
    {
      name: "Cloud Wall Sconce",
      price: "$112",
      tag: "",
      swatches: ["#ffffff", "#e9d3c4"],
      images: ["/12.avif", "/13.webp"],
    },
    {
      name: "Glow Cube",
      price: "$74",
      tag: "New",
      swatches: ["#b7d6a6", "#ffffff", "#f3e6a8"],
      images: ["/14.webp", "/15.webp"],
    },
  ],

  features: {
    toneLamp: "/16.webp", // transparent PNG
    portrait: "/17.webp",
    resin: "/18.webp",
  },

  craft: [
    "/19.avif",
    "/20.avif",
    "/21.webp",
    "/22.webp",
  ],

  lookbook: {
    main: "/1.webp",
    floating: [
      "/2.webp",
      "/3.webp",
      "/4.webp",
    ],
  },

  people: [
    "/images/people/a.jpg",
    "/images/people/b.jpg",
    "/images/people/c.jpg",
    "/images/people/d.jpg",
  ],
} as const;