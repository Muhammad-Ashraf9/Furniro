export const state = {
  currentUser: null,
  guestCart: [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 2 },
    { id: 3, quantity: 2 },
  ],
  users: [
    {
      id: 1,
      name: "ash customer",
      email: "ash@customer.ash",
      password: "ash123",

      orders: [1, 2],
      cart: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 2 },
      ],
      accountType: "customer",
    },
    {
      id: 2,
      name: "ash admin",
      email: "ash@admin.ash",
      password: "ash123",
      accountType: "admin",
    },
    {
      id: 3,
      name: "ash seller",
      email: "ash@seller.ash",
      password: "ash123",
      orders: [1, 2, 3],
      accountType: "seller",
      products: [
        {
          productId: 1,
          stock: 10,
        },
        {
          productId: 2,
          stock: 10,
        },
      ],
    },
  ],
  orders: [
    {
      id: 354028,
      items: [
        {
          id: 1,
          title: "a",
          description: "x",
          price: 100,
          img: "../assets/test1.jpeg",
          sellerId: 3,
          category: "any",
          stock: 7,
        },
        {
          id: 2,
          title: "b",
          description: "xy",
          price: 10,
          img: "../assets/test2.jpeg",
          sellerId: 3,
          category: "any",
          stock: 8,
        },
        {
          id: 3,
          title: "abc",
          description: "xyz",
          price: 10,
          img: "../assets/test2.jpeg",
          sellerId: 3,
          category: "any",

          stock: 8,
        },
      ],
      customerId: 1,
      status: "pending",
      date: "2024-01-25",
      customerDetails: {
        FirstName: "abdelhameed",
        lastname: "abdelhameed",
        userAddress: "78 madrab st,ezbet elshal,qism tani",
        Email: "abdelhameedosamaiti@gmail.com",
        Phone: "01094335757",
        streetAddress: "78 madrab st,ezbet elshal,qism tani",
        City: "mansoura",
        Zip: "35511",
      },
    },
    {
      id: 354028,
      items: [
        {
          id: 3,
          title: "ashhh",
          description: "dsfsdfsd sdfsd fsd f",
          price: 100,
          img: "../assets/test1.jpeg",
          sellerId: 3,
          category: "any",
          stock: 7,
        },
        {
          id: 4,
          title: "fghfgh",
          description: "fffff ffff",
          price: 10,
          img: "../assets/test2.jpeg",
          sellerId: 3,
          category: "any",

          stock: 8,
        },
      ],
      customerId: 1,
      status: "pending",
      date: "2024-01-25",
      customerDetails: {
        FirstName: "abdelhameed",
        lastname: "abdelhameed",
        userAddress: "78 madrab st,ezbet elshal,qism tani",
        Email: "abdelhameedosamaiti@gmail.com",
        Phone: "01094335757",
        streetAddress: "78 madrab st,ezbet elshal,qism tani",
        City: "mansoura",
        Zip: "35511",
      },
    },
  ],
  products: [
    {
      id: 2,
      title: "Coush",
      description: "Desk, 89 1/50 8/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1022432_pe832720_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1158868_pe888215_s5.jpg?f=xxs",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 2,
      title: "LAGKAPTEN / ALEX",
      description: "Desk, 55 1/8x23 5/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1022432_pe832720_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1158868_pe888215_s5.jpg?f=xxs",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 3,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 4,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 5,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 6,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 7,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 8,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 9,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 10,
      title: "LAGKAPTEN",
      description: "Tabletop, 55 1/8x23 5/8 ",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__0977800_pe813782_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/lagkapten-tabletop-white__1166683_ph182444_s5.jpg?f=xxs",
      imgURL2: "../assets/Products/prod13.png",
      imgURL3: "../assets/Products/prod14.png",
      price: 100,
      prevPrice: 200,
      category: "Sofas",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 11,
      title: "BESTÅ",
      description: "TV unit with doors, 70 7/8x16 1/2x15",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-lappviken-white__0719188_pe731908_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-lappviken-white__0723576_pe734034_s5.jpg?f=xxs",
      price: 230,
      prevPrice: 300,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 12,
      title: "BRIMNES",
      description: "TV unit, 70 7/8x16 1/8x20 7/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0704610_pe725291_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg?f=xxs",
      price: 150,
      prevPrice: 180,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 13,
      title: "KALLAX",
      description: "TV unit, 57 3/4x23 1/2",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/kallax-tv-unit-black-brown__1238897_pe918669_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/kallax-tv-unit-black-brown__1248782_pe923214_s5.jpg?f=xxs",
      price: 70,
      prevPrice: 170,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 14,
      title: "STOCKHOLM",
      description: "TV unit, 63x15 3/4x19 5/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/stockholm-tv-unit-walnut-veneer__0644450_pe702701_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/stockholm-tv-unit-walnut-veneer__0851074_pe655467_s5.jpg?f=xxs",
      price: 70,
      prevPrice: 170,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 15,
      title: "FJÄLLBO",
      description: "TV unit, 59x14 1/8x21 1/4",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/fjaellbo-tv-unit-black__0473390_pe614545_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/fjaellbo-tv-unit-black__0850235_pe616397_s5.jpg?f=xxs",
      price: 80,
      prevPrice: 178,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 16,
      title: "VIHALS",
      description: "TV unit, 57 1/2x14 5/8x19 5/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/vihals-tv-unit-white__1035579_pe838111_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/vihals-tv-unit-white__1048003_pe843550_s5.jpg?f=xxs",
      price: 80,
      prevPrice: 178,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
    {
      id: 17,
      title: "HAUGA",
      description: "TV/storage combination, 109x18 1/8x78 3/8",
      imgURL0:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xxs",
      imgURL1:
        "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0976536_ph173351_s5.jpg?f=xxs",
      price: 1000,
      prevPrice: 1500,
      category: "TV & media furniture",
      sellerId: 3,
      stock: 10,
      rating: 4,
      numberofsales: 0,
      countSold: 0,
      reviews: [
        {
          userId: 1,
          comment: "good",
          rating: 4,
        },
        {
          userId: 2,
          comment: "bad",
          rating: 2,
        },
      ],
    },
  ],
};
function loadStateFromLocalStorage() {
  for (const key in state) {
    state[key] = JSON.parse(localStorage.getItem(key)) || state[key];
  }
}
function saveStateInLocalStorage() {
  for (const key in state) {
    localStorage.setItem(key, JSON.stringify(state[key]));
  }
}
function saveInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function setCurrentUser(user) {
  state.currentUser = user;
  saveInLocalStorage("currentUser", user);
}
export function getCurrentUser() {
  return state.currentUser;
}
export function addUser(user) {
  state.users.push(user);
  saveInLocalStorage("users", state.users);
}

export function getUserById(id) {
  return state.users.find((user) => user.id === +id);
}
export function getUserByEmail(email) {
  return state.users.find((user) => user.email === email);
}

export function getAllOrdersByOrderIds(orderIds) {
  // Initialize an array to store the found orders
  const allOrders = [];

  // Iterate through the order IDs
  for (const orderId of orderIds) {
    // Find the order in the state.orders array
    const foundOrder = state.orders.find((order) => order.id === orderId);

    // If the order is found, add it to the allOrders array
    if (foundOrder) {
      allOrders.push(foundOrder);
    }
  }

  return allOrders;
}

export function getAllProductsByProductIds(productIds) {
  // Initialize an array to store the found orders
  const allProducts = [];

  // Iterate through the order IDs
  for (const productId of productIds) {
    // Find the order in the state.orders array
    console.log(productId);
    const foundProduct = state.products.find(
      (product) => product.id === productId.productId
    );

    // If the order is found, add it to the allOrders array
    if (foundProduct) {
      console.log(foundProduct);
      allProducts.push(foundProduct);
    }
  }

  return allProducts;
}

export function getCustomers() {
  return state.users.filter((u) => u.accountType === "customer");
}
export function getSellers() {
  return state.users.filter((u) => u.accountType === "seller");
}
export function getLastAddedProducts(number = 0) {
  return state.products.slice(-number);
}
export function getTotalOrdersRevenue() {
  return getOrdersRevenue(state.orders);
}
export function getOrderById(id) {
  return state.orders.find((order) => order.id === +id);
}
export function getProductById(id) {
  return state.products.find((product) => product.id === +id);
}
export function getOrdersRevenue(ordersArray) {
  return ordersArray.reduce((acc, order) => acc + getOrderTotal(order), 0);
}
export function getOrderTotal(order) {
  return order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

export function getByPageNumber(array, pageNumber, itemsPerPage) {
  //sorting first or sorting after slicing?
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return array.slice(start, end);
}
export function deleteProductById(id) {
  state.products = state.products.filter((product) => product.id !== +id);
  saveInLocalStorage("products", state.products);
}
export function deleteUserById(id) {
  state.users = state.users.filter((user) => user.id !== +id);
  saveInLocalStorage("users", state.users);
}

export function changeCartItemCount(id, quantity) {
  const cart = getCurrentCart();
  const index = cart.findIndex((item) => item.id === +id);
  cart[index].quantity = quantity;
  if (!state.currentUser) {
    state.guestCart = cart;
  } else {
    state.currentUser.cart = cart;
    const index = state.users.findIndex(
      (user) => user.id === state.currentUser.id
    );
    state.users[index].cart = cart;
  }

  saveStateInLocalStorage();
}
export function DeleteFromCart(id) {
  const cart = getCurrentCart();
  console.log("cart", cart);
  console.log("id", id);
  const newCart = cart.filter((item) => item.id !== +id);
  console.log("newCart", newCart);
  if (!state.currentUser) {
    state.guestCart = newCart;
  } else {
    state.currentUser.cart = newCart;
    const index = state.users.findIndex(
      (user) => user.id === state.currentUser.id
    );
    state.users[index].cart = newCart;
  }
  saveStateInLocalStorage();
}
export function getCurrentCart() {
  return state.currentUser ? state.currentUser.cart : state.guestCart;
}

//this runs once when the app starts sets the state from local storage
loadStateFromLocalStorage();
