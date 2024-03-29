const products = [
  {
    name: 'Tequila Rose Cream Liquor',
    image: '/images/airpods.jpg',
    description: 'Division of Left Shoulder Tendon, Percutaneous Approach',
    brand: 'Logitech',
    category: 'Electronics',
    price: 5842,
    countInStock: 47,
    rating: 2,
    numReviews: 80,
  },
  {
    name: 'Lettuce - Radicchio',
    image: '/images/phone.jpg',
    description:
      'Reposition Right Mandible with External Fixation Device, Percutaneous Endoscopic Approach',
    brand: 'Apple',
    category: 'TV',
    price: 2683,
    countInStock: 26,
    rating: 5,
    numReviews: 127,
  },
  {
    name: 'Snails - Large Canned',
    image: '/images/camera.jpg',
    description:
      'Restriction of Right Ureter, Via Natural or Artificial Opening',
    brand: 'Apple',
    category: 'Electronics',
    price: 5409,
    countInStock: 5,
    rating: 0,
    numReviews: 438,
  },
  {
    name: 'Cookie Dough - Double',
    image: '/images/playstation.jpg',
    description:
      'Dilation of Right Vertebral Artery, Bifurcation, with Four or More Intraluminal Devices, Percutaneous Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 444,
    countInStock: 17,
    rating: 5,
    numReviews: 114,
  },
  {
    name: 'Shrimp - Baby, Warm Water',
    image: '/images/mouse.jpg',
    description:
      'Bypass Left Internal Iliac Artery to Bilateral Femoral Arteries with Autologous Arterial Tissue, Open Approach',
    brand: 'Apple',
    category: 'TV',
    price: 9020,
    countInStock: 25,
    rating: 3,
    numReviews: 33,
  },
  {
    name: 'Steel Wool S.o.s',
    image: '/images/alexa.jpg',
    description: 'Change Other Device in Parathyroid Gland, External Approach',
    brand: 'Sony',
    category: 'Electronics',
    price: 3831,
    countInStock: 78,
    rating: 0,
    numReviews: 493,
  },
  {
    name: 'Table Cloth 62x114 Colour',
    image: '/images/airpods.jpg',
    description:
      'Restriction of Left Large Intestine with Intraluminal Device, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 8750,
    countInStock: 60,
    rating: 3,
    numReviews: 484,
  },
  {
    name: 'Jolt Cola - Red Eye',
    image: '/images/phone.jpg',
    description:
      'High Dose Rate (HDR) Brachytherapy of Mediastinum using Iridium 192 (Ir-192)',
    brand: 'Logitech',
    category: 'TV',
    price: 7351,
    countInStock: 11,
    rating: 2,
    numReviews: 130,
  },
  {
    name: 'Wine - Magnotta - Cab Sauv',
    image: '/images/camera.jpg',
    description:
      'Alteration of Left Upper Leg with Synthetic Substitute, Percutaneous Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 2036,
    countInStock: 94,
    rating: 2,
    numReviews: 183,
  },
  {
    name: 'Foam Espresso Cup Plain White',
    image: '/images/playstation.jpg',
    description: 'Inspection of Right Foot, External Approach',
    brand: 'Logitech',
    category: 'Electronics',
    price: 6486,
    countInStock: 98,
    rating: 3,
    numReviews: 401,
  },
  {
    name: 'Shopper Bag - S - 4',
    image: '/images/mouse.jpg',
    description:
      'Supplement Vulva with Nonautologous Tissue Substitute, Open Approach',
    brand: 'Apple',
    category: 'TV',
    price: 9076,
    countInStock: 21,
    rating: 3,
    numReviews: 265,
  },
  {
    name: 'Pepper Squash',
    image: '/images/alexa.jpg',
    description:
      'Supplement Hymen with Synthetic Substitute, External Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 4756,
    countInStock: 33,
    rating: 0,
    numReviews: 378,
  },
  {
    name: 'Sauce - Plum',
    image: '/images/airpods.jpg',
    description:
      'Revision of Monitoring Device in Pancreatic Duct, External Approach',
    brand: 'Logitech',
    category: 'Electronics',
    price: 8880,
    countInStock: 81,
    rating: 0,
    numReviews: 362,
  },
  {
    name: 'Salt - Celery',
    image: '/images/phone.jpg',
    description:
      'Bypass Right Internal Iliac Artery to Bilateral Internal Iliac Arteries with Autologous Venous Tissue, Open Approach',
    brand: 'Apple',
    category: 'TV',
    price: 7904,
    countInStock: 48,
    rating: 5,
    numReviews: 453,
  },
  {
    name: 'Artichokes - Jerusalem',
    image: '/images/camera.jpg',
    description: 'Division of Left Lower Arm and Wrist Tendon, Open Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 1156,
    countInStock: 95,
    rating: 2,
    numReviews: 279,
  },
  {
    name: 'Onions - Vidalia',
    image: '/images/playstation.jpg',
    description:
      'Excision of Right Lower Extremity, Percutaneous Approach, Diagnostic',
    brand: 'Sony',
    category: 'TV',
    price: 7225,
    countInStock: 82,
    rating: 1,
    numReviews: 495,
  },
  {
    name: 'Bread - Bagels, Plain',
    image: '/images/mouse.jpg',
    description:
      'Fluoroscopy of Bilateral Tracheobronchial Trees using Other Contrast',
    brand: 'Apple',
    category: 'Electronics',
    price: 5736,
    countInStock: 69,
    rating: 4,
    numReviews: 15,
  },
  {
    name: 'Bread - Hot Dog Buns',
    image: '/images/alexa.jpg',
    description:
      'Plain Radiography of Left Epididymis using Low Osmolar Contrast',
    brand: 'Amazon',
    category: 'TV',
    price: 3875,
    countInStock: 1,
    rating: 3,
    numReviews: 380,
  },
  {
    name: 'Cafe Royale',
    image: '/images/airpods.jpg',
    description: 'Release Anal Sphincter, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2817,
    countInStock: 77,
    rating: 2,
    numReviews: 438,
  },
  {
    name: 'Sauce - Balsamic Viniagrette',
    image: '/images/phone.jpg',
    description:
      'Bypass Left Femoral Artery to Left Femoral Artery with Autologous Venous Tissue, Open Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 6523,
    countInStock: 44,
    rating: 3,
    numReviews: 429,
  },
  {
    name: 'Vinegar - Rice',
    image: '/images/camera.jpg',
    description:
      'Reposition Thoracolumbar Vertebral Joint, Percutaneous Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 2191,
    countInStock: 15,
    rating: 4,
    numReviews: 384,
  },
  {
    name: 'Star Anise, Whole',
    image: '/images/playstation.jpg',
    description:
      'Fusion of Occipital-cervical Joint, Anterior Approach, Anterior Column, Percutaneous Endoscopic Approach',
    brand: 'Sony',
    category: 'Electronics',
    price: 7904,
    countInStock: 64,
    rating: 2,
    numReviews: 390,
  },
  {
    name: 'Ham - Cooked',
    image: '/images/mouse.jpg',
    description:
      'Tomographic (Tomo) Nuclear Medicine Imaging of Liver using Technetium 99m (Tc-99m)',
    brand: 'Sony',
    category: 'TV',
    price: 5208,
    countInStock: 93,
    rating: 0,
    numReviews: 89,
  },
  {
    name: 'Chickensplit Half',
    image: '/images/alexa.jpg',
    description:
      'High Dose Rate (HDR) Brachytherapy of Oropharynx using Other Isotope',
    brand: 'Logitech',
    category: 'Electronics',
    price: 8862,
    countInStock: 37,
    rating: 3,
    numReviews: 119,
  },
  {
    name: 'Flax Seed',
    image: '/images/airpods.jpg',
    description:
      'Extirpation of Matter from Left Metacarpocarpal Joint, Open Approach',
    brand: 'Sony',
    category: 'TV',
    price: 359,
    countInStock: 54,
    rating: 0,
    numReviews: 151,
  },
  {
    name: 'Cheese - Cream Cheese',
    image: '/images/phone.jpg',
    description:
      'Alteration of Right Lower Arm Subcutaneous Tissue and Fascia, Open Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 2829,
    countInStock: 79,
    rating: 0,
    numReviews: 329,
  },
  {
    name: 'Carbonated Water - Wildberry',
    image: '/images/camera.jpg',
    description:
      'Supplement Right Ulnar Artery with Nonautologous Tissue Substitute, Percutaneous Approach',
    brand: 'Cannon',
    category: 'TV',
    price: 7764,
    countInStock: 95,
    rating: 2,
    numReviews: 253,
  },
  {
    name: 'Goldschalger',
    image: '/images/playstation.jpg',
    description:
      'Fluoroscopy of Left Foot/Toe Joint using High Osmolar Contrast',
    brand: 'Amazon',
    category: 'TV',
    price: 2773,
    countInStock: 56,
    rating: 2,
    numReviews: 222,
  },
  {
    name: 'Bread - Frozen Basket Variety',
    image: '/images/mouse.jpg',
    description:
      'Dilation of Middle Colic Artery with Four or More Drug-eluting Intraluminal Devices, Percutaneous Endoscopic Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 8938,
    countInStock: 44,
    rating: 3,
    numReviews: 20,
  },
  {
    name: 'Mint - Fresh',
    image: '/images/alexa.jpg',
    description:
      'Drainage of Trochlear Nerve, Percutaneous Approach, Diagnostic',
    brand: 'Logitech',
    category: 'Electronics',
    price: 6560,
    countInStock: 96,
    rating: 2,
    numReviews: 463,
  },
  {
    name: 'Island Oasis - Cappucino Mix',
    image: '/images/airpods.jpg',
    description: 'Drainage of Thyroid Gland, Open Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 5299,
    countInStock: 60,
    rating: 5,
    numReviews: 167,
  },
  {
    name: 'Wine - Touraine Azay - Le - Rideau',
    image: '/images/phone.jpg',
    description: 'Excision of Sacrococcygeal Joint, Percutaneous Approach',
    brand: 'Cannon',
    category: 'Electronics',
    price: 2915,
    countInStock: 50,
    rating: 4,
    numReviews: 127,
  },
  {
    name: 'Crab - Dungeness, Whole, live',
    image: '/images/camera.jpg',
    description: 'Detachment at Right Foot, Partial 5th Ray, Open Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 127,
    countInStock: 30,
    rating: 3,
    numReviews: 107,
  },
  {
    name: 'Pork - Loin, Bone - In',
    image: '/images/playstation.jpg',
    description:
      'Supplement Superior Mesenteric Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 4238,
    countInStock: 77,
    rating: 5,
    numReviews: 397,
  },
  {
    name: 'Chicken - Whole Fryers',
    image: '/images/mouse.jpg',
    description: 'Repair Left Sphenoid Bone, Percutaneous Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 4129,
    countInStock: 98,
    rating: 4,
    numReviews: 254,
  },
  {
    name: 'Breadfruit',
    image: '/images/alexa.jpg',
    description:
      'Removal of Intraluminal Device from Mouth and Throat, Percutaneous Approach',
    brand: 'Cannon',
    category: 'Electronics',
    price: 937,
    countInStock: 60,
    rating: 1,
    numReviews: 155,
  },
  {
    name: 'Containter - 3oz Microwave Rect.',
    image: '/images/airpods.jpg',
    description:
      'Removal of Intraluminal Device from Stomach, Via Natural or Artificial Opening',
    brand: 'Amazon',
    category: 'TV',
    price: 2019,
    countInStock: 75,
    rating: 1,
    numReviews: 212,
  },
  {
    name: 'Bread - Multigrain',
    image: '/images/phone.jpg',
    description:
      'Drainage of Right Lower Leg Subcutaneous Tissue and Fascia, Open Approach, Diagnostic',
    brand: 'Logitech',
    category: 'TV',
    price: 2651,
    countInStock: 39,
    rating: 1,
    numReviews: 168,
  },
  {
    name: 'Cake Slab',
    image: '/images/camera.jpg',
    description:
      'Supplement Bladder with Autologous Tissue Substitute, Via Natural or Artificial Opening Endoscopic',
    brand: 'Sony',
    category: 'Electronics',
    price: 2031,
    countInStock: 66,
    rating: 5,
    numReviews: 301,
  },
  {
    name: 'Pop Shoppe Cream Soda',
    image: '/images/playstation.jpg',
    description:
      'Supplement Bladder with Nonautologous Tissue Substitute, Open Approach',
    brand: 'Apple',
    category: 'TV',
    price: 4936,
    countInStock: 37,
    rating: 5,
    numReviews: 476,
  },
  {
    name: 'Beans - Navy, Dry',
    image: '/images/mouse.jpg',
    description: 'Excision of Sciatic Nerve, Percutaneous Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 7482,
    countInStock: 15,
    rating: 5,
    numReviews: 92,
  },
  {
    name: 'Yucca',
    image: '/images/alexa.jpg',
    description:
      'Dilation of Left External Carotid Artery, Bifurcation, with Two Intraluminal Devices, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 9079,
    countInStock: 22,
    rating: 0,
    numReviews: 470,
  },
  {
    name: 'Cloves - Ground',
    image: '/images/airpods.jpg',
    description:
      'Excision of Left Main Bronchus, Percutaneous Approach, Diagnostic',
    brand: 'Amazon',
    category: 'Electronics',
    price: 4924,
    countInStock: 14,
    rating: 5,
    numReviews: 138,
  },
  {
    name: 'Pepsi - Diet, 355 Ml',
    image: '/images/phone.jpg',
    description:
      'Drainage of Left Hip Bursa and Ligament with Drainage Device, Percutaneous Endoscopic Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 7254,
    countInStock: 27,
    rating: 2,
    numReviews: 165,
  },
  {
    name: 'Wine - Ruffino Chianti',
    image: '/images/camera.jpg',
    description:
      'Restriction of Left Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic',
    brand: 'Amazon',
    category: 'TV',
    price: 3510,
    countInStock: 68,
    rating: 3,
    numReviews: 460,
  },
  {
    name: 'Pears - Bosc',
    image: '/images/playstation.jpg',
    description:
      'Drainage of Left Mandible, Percutaneous Endoscopic Approach, Diagnostic',
    brand: 'Sony',
    category: 'TV',
    price: 2195,
    countInStock: 68,
    rating: 0,
    numReviews: 293,
  },
  {
    name: 'Bacardi Raspberry',
    image: '/images/mouse.jpg',
    description:
      'Dilation of Left Vertebral Artery, Bifurcation, with Two Drug-eluting Intraluminal Devices, Open Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 3500,
    countInStock: 24,
    rating: 2,
    numReviews: 228,
  },
  {
    name: 'Vodka - Hot, Lnferno',
    image: '/images/alexa.jpg',
    description:
      'Revision of Nonautologous Tissue Substitute in Thoracic Vertebral Disc, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 5338,
    countInStock: 51,
    rating: 5,
    numReviews: 156,
  },
  {
    name: 'Pepper Squash',
    image: '/images/airpods.jpg',
    description:
      'Fusion of Right Elbow Joint with Synthetic Substitute, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 7951,
    countInStock: 97,
    rating: 0,
    numReviews: 92,
  },
  {
    name: 'Capon - Whole',
    image: '/images/phone.jpg',
    description:
      'Plain Radiography of Right Jugular Veins using Low Osmolar Contrast',
    brand: 'Logitech',
    category: 'TV',
    price: 3049,
    countInStock: 61,
    rating: 2,
    numReviews: 397,
  },
  {
    name: 'Lemonade - Black Cherry, 591 Ml',
    image: '/images/camera.jpg',
    description:
      'Drainage of Lumbosacral Disc with Drainage Device, Percutaneous Approach',
    brand: 'Apple',
    category: 'TV',
    price: 3048,
    countInStock: 79,
    rating: 3,
    numReviews: 225,
  },
  {
    name: 'Chicken - Whole Fryers',
    image: '/images/playstation.jpg',
    description:
      'Supplement Right 5th Toe with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach',
    brand: 'Cannon',
    category: 'TV',
    price: 2493,
    countInStock: 69,
    rating: 0,
    numReviews: 484,
  },
  {
    name: 'Puree - Raspberry',
    image: '/images/mouse.jpg',
    description:
      'Replacement of Left Glenoid Cavity with Synthetic Substitute, Open Approach',
    brand: 'Sony',
    category: 'TV',
    price: 6114,
    countInStock: 79,
    rating: 3,
    numReviews: 48,
  },
  {
    name: 'Bols Melon Liqueur',
    image: '/images/alexa.jpg',
    description:
      'Extirpation of Matter from Left Metacarpal, Percutaneous Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2058,
    countInStock: 63,
    rating: 2,
    numReviews: 321,
  },
  {
    name: 'Bread Ww Cluster',
    image: '/images/airpods.jpg',
    description: 'Dilation of Right Middle Lobe Bronchus, Open Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 8799,
    countInStock: 8,
    rating: 3,
    numReviews: 290,
  },
  {
    name: 'Rice Pilaf, Dry,package',
    image: '/images/phone.jpg',
    description:
      'Removal of Drainage Device from Hepatobiliary Duct, Percutaneous Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 7283,
    countInStock: 20,
    rating: 4,
    numReviews: 34,
  },
  {
    name: 'Rice - 7 Grain Blend',
    image: '/images/camera.jpg',
    description:
      'Excision of Right Superior Parathyroid Gland, Percutaneous Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 9703,
    countInStock: 92,
    rating: 5,
    numReviews: 34,
  },
  {
    name: 'Fish - Atlantic Salmon, Cold',
    image: '/images/playstation.jpg',
    description:
      'Introduction of Nutritional Substance into Peripheral Vein, Open Approach',
    brand: 'Apple',
    category: 'TV',
    price: 6763,
    countInStock: 62,
    rating: 3,
    numReviews: 214,
  },
  {
    name: 'Pepper - Black, Ground',
    image: '/images/mouse.jpg',
    description: 'Reposition Radial Nerve, Percutaneous Endoscopic Approach',
    brand: 'Cannon',
    category: 'TV',
    price: 2342,
    countInStock: 90,
    rating: 4,
    numReviews: 48,
  },
  {
    name: 'Plastic Wrap',
    image: '/images/alexa.jpg',
    description:
      'High Dose Rate (HDR) Brachytherapy of Left Breast using Californium 252 (Cf-252)',
    brand: 'Cannon',
    category: 'Electronics',
    price: 1292,
    countInStock: 8,
    rating: 5,
    numReviews: 477,
  },
  {
    name: 'Roe - Lump Fish, Black',
    image: '/images/airpods.jpg',
    description: 'Contact Radiation of Uterus',
    brand: 'Sony',
    category: 'TV',
    price: 7020,
    countInStock: 34,
    rating: 4,
    numReviews: 303,
  },
  {
    name: 'Flour - All Purpose',
    image: '/images/phone.jpg',
    description:
      'Dilation of Gastric Artery with Drug-eluting Intraluminal Device, Percutaneous Approach',
    brand: 'Sony',
    category: 'Electronics',
    price: 3461,
    countInStock: 34,
    rating: 5,
    numReviews: 290,
  },
  {
    name: 'Bread - Ciabatta Buns',
    image: '/images/camera.jpg',
    description:
      'Extirpation of Matter from Left Carotid Body, Percutaneous Approach',
    brand: 'Sony',
    category: 'TV',
    price: 9338,
    countInStock: 43,
    rating: 3,
    numReviews: 112,
  },
  {
    name: 'Apricots - Dried',
    image: '/images/playstation.jpg',
    description:
      'Restriction of Left Cephalic Vein with Extraluminal Device, Open Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 1800,
    countInStock: 47,
    rating: 2,
    numReviews: 119,
  },
  {
    name: 'Sun - Dried Tomatoes',
    image: '/images/mouse.jpg',
    description:
      'Occlusion of Left Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic',
    brand: 'Cannon',
    category: 'TV',
    price: 6589,
    countInStock: 33,
    rating: 0,
    numReviews: 289,
  },
  {
    name: 'Compound - Passion Fruit',
    image: '/images/alexa.jpg',
    description:
      'Revision of Implantable Heart Assist System in Heart, Percutaneous Endoscopic Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 2184,
    countInStock: 19,
    rating: 5,
    numReviews: 239,
  },
  {
    name: 'Beer - True North Strong Ale',
    image: '/images/airpods.jpg',
    description: 'Drainage of Nose, Open Approach',
    brand: 'Cannon',
    category: 'TV',
    price: 709,
    countInStock: 77,
    rating: 0,
    numReviews: 129,
  },
  {
    name: 'Jameson Irish Whiskey',
    image: '/images/phone.jpg',
    description:
      'Drainage of Right External Auditory Canal, Via Natural or Artificial Opening',
    brand: 'Cannon',
    category: 'Electronics',
    price: 6396,
    countInStock: 89,
    rating: 4,
    numReviews: 52,
  },
  {
    name: 'Nut - Walnut, Pieces',
    image: '/images/camera.jpg',
    description:
      'Excision of Left Vas Deferens, Percutaneous Approach, Diagnostic',
    brand: 'Amazon',
    category: 'TV',
    price: 9402,
    countInStock: 31,
    rating: 4,
    numReviews: 165,
  },
  {
    name: 'Chicken - Livers',
    image: '/images/playstation.jpg',
    description:
      'Transfer Left Foot Muscle with Skin and Subcutaneous Tissue, Percutaneous Endoscopic Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 9297,
    countInStock: 74,
    rating: 3,
    numReviews: 322,
  },
  {
    name: 'Ginger - Fresh',
    image: '/images/mouse.jpg',
    description:
      'Restriction of Right Common Iliac Artery with Branched or Fenestrated Intraluminal Device, Three or More Arteries, Percutaneous Endoscopic Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 8293,
    countInStock: 63,
    rating: 3,
    numReviews: 123,
  },
  {
    name: 'Cheese - Wine',
    image: '/images/alexa.jpg',
    description:
      'Removal of Infusion Device from Lumbosacral Disc, Open Approach',
    brand: 'Cannon',
    category: 'TV',
    price: 4087,
    countInStock: 45,
    rating: 5,
    numReviews: 413,
  },
  {
    name: 'Tuna - Yellowfin',
    image: '/images/airpods.jpg',
    description: 'Restriction of Left Thyroid Artery, Open Approach',
    brand: 'Sony',
    category: 'TV',
    price: 5699,
    countInStock: 30,
    rating: 3,
    numReviews: 185,
  },
  {
    name: 'Pepperoni Slices',
    image: '/images/phone.jpg',
    description: 'Alteration of Right Breast, Open Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 8119,
    countInStock: 92,
    rating: 3,
    numReviews: 372,
  },
  {
    name: 'Cheese - Comtomme',
    image: '/images/camera.jpg',
    description:
      'Drainage of Large Intestine with Drainage Device, Open Approach',
    brand: 'Logitech',
    category: 'Electronics',
    price: 5912,
    countInStock: 10,
    rating: 4,
    numReviews: 405,
  },
  {
    name: 'Stock - Beef, Brown',
    image: '/images/playstation.jpg',
    description: 'Bypass Cystic Duct to Caudate Hepatic Duct, Open Approach',
    brand: 'Apple',
    category: 'TV',
    price: 7472,
    countInStock: 40,
    rating: 1,
    numReviews: 110,
  },
  {
    name: 'Cheese - Shred Cheddar / Mozza',
    image: '/images/mouse.jpg',
    description:
      'Insertion of Infusion Device into Left Shoulder Region, Percutaneous Endoscopic Approach',
    brand: 'Apple',
    category: 'TV',
    price: 6060,
    countInStock: 32,
    rating: 2,
    numReviews: 97,
  },
  {
    name: 'Cheese - Fontina',
    image: '/images/alexa.jpg',
    description: 'Restriction of Intracranial Vein, Percutaneous Approach',
    brand: 'Cannon',
    category: 'Electronics',
    price: 3152,
    countInStock: 59,
    rating: 0,
    numReviews: 3,
  },
  {
    name: 'Salsify, Organic',
    image: '/images/airpods.jpg',
    description: 'Release Hypoglossal Nerve, Percutaneous Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 5819,
    countInStock: 39,
    rating: 2,
    numReviews: 429,
  },
  {
    name: 'Cups 10oz Trans',
    image: '/images/phone.jpg',
    description:
      'Drainage of Right Anterior Tibial Artery, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 4022,
    countInStock: 46,
    rating: 2,
    numReviews: 399,
  },
  {
    name: 'Mix Pina Colada',
    image: '/images/camera.jpg',
    description:
      'Reposition Cervicothoracic Vertebral Joint with Internal Fixation Device, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 7430,
    countInStock: 89,
    rating: 4,
    numReviews: 179,
  },
  {
    name: 'Yogurt - Assorted Pack',
    image: '/images/playstation.jpg',
    description:
      'Removal of Synthetic Substitute from Occipital-cervical Joint, Open Approach',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2023,
    countInStock: 4,
    rating: 4,
    numReviews: 148,
  },
  {
    name: 'Sweet Pea Sprouts',
    image: '/images/mouse.jpg',
    description:
      'Beam Radiation of Leg Skin using Heavy Particles (Protons,Ions)',
    brand: 'Apple',
    category: 'TV',
    price: 9003,
    countInStock: 64,
    rating: 4,
    numReviews: 364,
  },
  {
    name: 'Flour - Teff',
    image: '/images/alexa.jpg',
    description:
      'Supplement Anal Sphincter with Autologous Tissue Substitute, Percutaneous Endoscopic Approach',
    brand: 'Cannon',
    category: 'Electronics',
    price: 2915,
    countInStock: 40,
    rating: 5,
    numReviews: 44,
  },
  {
    name: 'Cheese - Oka',
    image: '/images/airpods.jpg',
    description: 'Monitoring of Venous Pressure, Portal, Open Approach',
    brand: 'Logitech',
    category: 'TV',
    price: 1053,
    countInStock: 29,
    rating: 1,
    numReviews: 365,
  },
  {
    name: 'Beef - Ox Tongue',
    image: '/images/phone.jpg',
    description:
      'Plain Radiography of Left Vertebral Artery using High Osmolar Contrast',
    brand: 'Logitech',
    category: 'TV',
    price: 1331,
    countInStock: 11,
    rating: 5,
    numReviews: 484,
  },
  {
    name: 'Eggs - Extra Large',
    image: '/images/camera.jpg',
    description:
      'Removal of Synthetic Substitute from Right Humeral Head, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 2286,
    countInStock: 6,
    rating: 3,
    numReviews: 219,
  },
  {
    name: 'English Muffin',
    image: '/images/playstation.jpg',
    description: 'Reposition Right Lacrimal Gland, Open Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 674,
    countInStock: 90,
    rating: 2,
    numReviews: 304,
  },
  {
    name: 'Vanilla Beans',
    image: '/images/mouse.jpg',
    description:
      'Removal of Synthetic Substitute from Left Pleural Cavity, Percutaneous Approach',
    brand: 'Sony',
    category: 'TV',
    price: 4298,
    countInStock: 76,
    rating: 5,
    numReviews: 144,
  },
  {
    name: 'Wine - Zinfandel Rosenblum',
    image: '/images/alexa.jpg',
    description:
      'Fragmentation in Left Lower Lobe Bronchus, Percutaneous Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 4467,
    countInStock: 100,
    rating: 5,
    numReviews: 269,
  },
  {
    name: 'Cakes Assorted',
    image: '/images/airpods.jpg',
    description:
      'Destruction of Right Inferior Parathyroid Gland, Percutaneous Endoscopic Approach',
    brand: 'Amazon',
    category: 'TV',
    price: 5254,
    countInStock: 12,
    rating: 2,
    numReviews: 334,
  },
  {
    name: 'Chicken - Thigh, Bone In',
    image: '/images/phone.jpg',
    description:
      'Excision of Accessory Pancreatic Duct, Via Natural or Artificial Opening',
    brand: 'Cannon',
    category: 'TV',
    price: 6417,
    countInStock: 36,
    rating: 1,
    numReviews: 328,
  },
  {
    name: 'Tea - Jasmin Green',
    image: '/images/camera.jpg',
    description:
      'Transplantation of Hepatobiliary and Pancreas into Products of Conception, Via Natural or Artificial Opening',
    brand: 'Sony',
    category: 'Electronics',
    price: 5083,
    countInStock: 26,
    rating: 4,
    numReviews: 247,
  },
  {
    name: 'Wonton Wrappers',
    image: '/images/playstation.jpg',
    description: 'Plain Radiography of Left Wrist using High Osmolar Contrast',
    brand: 'Sony',
    category: 'Electronics',
    price: 9758,
    countInStock: 1,
    rating: 0,
    numReviews: 242,
  },
  {
    name: 'Puree - Passion Fruit',
    image: '/images/mouse.jpg',
    description:
      'Dilation of Right Colic Artery with Four or More Intraluminal Devices, Open Approach',
    brand: 'Logitech',
    category: 'Electronics',
    price: 8805,
    countInStock: 59,
    rating: 4,
    numReviews: 207,
  },
  {
    name: 'Kellogs All Bran Bars',
    image: '/images/alexa.jpg',
    description:
      'Transplantation of Ear, Nose and Sinus into Products of Conception, Via Natural or Artificial Opening',
    brand: 'Sony',
    category: 'TV',
    price: 818,
    countInStock: 91,
    rating: 4,
    numReviews: 77,
  },
  {
    name: 'Quail - Whole, Bone - In',
    image: '/images/airpods.jpg',
    description:
      'Dilation of Intracranial Artery, Bifurcation, with Three Intraluminal Devices, Percutaneous Approach',
    brand: 'Apple',
    category: 'Electronics',
    price: 8391,
    countInStock: 74,
    rating: 4,
    numReviews: 472,
  },
  {
    name: 'Yogurt - Raspberry, 175 Gr',
    image: '/images/phone.jpg',
    description:
      'Revision of External Fixation Device in Right Tarsal, Percutaneous Approach',
    brand: 'Sony',
    category: 'TV',
    price: 6433,
    countInStock: 41,
    rating: 4,
    numReviews: 7,
  },
  {
    name: 'Salt - Sea',
    image: '/images/camera.jpg',
    description:
      'Supplement Right External Carotid Artery with Nonautologous Tissue Substitute, Percutaneous Approach',
    brand: 'Sony',
    category: 'TV',
    price: 4959,
    countInStock: 69,
    rating: 0,
    numReviews: 46,
  },
  {
    name: 'Juice - Apple, 1.36l',
    image: '/images/playstation.jpg',
    description:
      'Supplement Left Upper Leg Muscle with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach',
    brand: 'Apple',
    category: 'TV',
    price: 9633,
    countInStock: 83,
    rating: 5,
    numReviews: 195,
  },
]
export default products
