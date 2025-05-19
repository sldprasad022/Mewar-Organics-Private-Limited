import React,{useState,useEffect} from "react";
import image_58 from "../assets/image_58.png";
import GRASS from "../assets/hgrass_2.png";
import { Link } from "react-router-dom";
import image_59 from "../assets/image_59.png";
import image_60 from "../assets/image_60.png";
import image_61 from "../assets/image_61.png";
import image_62 from "../assets/image_62.png";
import image_63 from "../assets/image_63.png";
import image_64 from "../assets/image_64.png";
import image_65 from "../assets/image_65.png";
import image_66 from "../assets/image_66.png";
import image_67 from "../assets/image_67.png";
import image_68 from "../assets/image_68.png";
import image_69 from "../assets/image_69.png";
import image_70 from "../assets/image_70.png";
import image_71 from "../assets/image_71.png";
import image_72 from "../assets/image_72.png";
import image_73 from "../assets/image_73.png";
import image_74 from "../assets/image_74.png";

import image_75 from "../assets/image_75.png";
import image_76 from "../assets/image_76.png";
import image_77 from "../assets/image_77.png";
import image_78 from "../assets/image_78.png";
import image_79 from "../assets/image_79.png";
import image_80 from "../assets/image_80.png";
import image_81 from "../assets/image_81.png";
import image_82 from "../assets/image_82.png";
import image_83 from "../assets/image_83.png";
import image_84 from "../assets/image_84.png";


import flower_1 from "../assets/flower_1.png";
import flower_2 from "../assets/flower_2.png";
import flower_3 from "../assets/flower_3.png";
import flower_4 from "../assets/flower_4.png";
import flower_5 from "../assets/flower_5.png";
import flower_6 from "../assets/flower_6.png";
import flower_7 from "../assets/flower_7.png";
import flower_8 from "../assets/flower_8.png";
import flower_9 from "../assets/flower_9.png";
import flower_10 from "../assets/flower_10.png";
import flower_11 from "../assets/flower_11.png";
import flower_12 from "../assets/flower_12.png";
import flower_13 from "../assets/flower_13.png";
import flower_14 from "../assets/flower_14.png";
import flower_15 from "../assets/flower_15.png";
import flower_16 from "../assets/flower_16.png";
import flower_17 from "../assets/flower_17.png";
import flower_18 from "../assets/flower_18.png";

import { motion } from "framer-motion";



const Categeories = () => {

    const flowerPlantsDataList = [
      {
        imageUrl: flower_1,
        title :'LIPSTICK PLANT (AESCHYNANTHUS)',
        description:'Exotic red tubular blooms resembling lipstick.'
      },
      {
        imageUrl: flower_2,
        title :'MELASTOMA (MELASTOMEYA)',
        description:'Velvety purple flowers with medicinal properties.'
      },
      {
        imageUrl: flower_3,
        title :'TECOMARIA CAPENSIS (ORANGE TECOMA)',
        description:'Bright orange trumpet blooms attracting pollinators.'
      },
      {
        imageUrl: flower_4,
        title :'NIGHT QUEEN (RAAT RANI)',
        description:'Fragrant night blooming white flowers.'
      },
      {
        imageUrl: flower_5,
        title :'ADEENEYAM (DESERT ROSE)',
        description:'Deep pink blooms, drought-resistant.'
      },
      {
        imageUrl: flower_6,
        title :'BARBADOS PRIDE (CAESALPINIA PULCHERRIMA)',
        description:'Red and yellow peacock-like blooms.'
      },
      {
        imageUrl: flower_7,
        title :'SRILANKA MALLI (SRI LANKAN JASMINE)',
        description:'White jasmine with a sweet fragrance.'
      },
      {
        imageUrl: flower_8,
        title :'CHAKRA NANDIVARDANA (TABERNAEMONTANA)',
        description:'Unique spiral-shaped white flowers.'
      },{
        imageUrl: flower_9,
        title :'KASHMIR GULABI (KASHMIRI PINK ROSE)',
        description:'Rare pink rose with a luxurious scent.'
      },
      {
        imageUrl: flower_10,
        title :'MADARAS KANAKAMBARA(CROSSANRA)',
        description:'Fiery orange blooms with cultural importance.'
      },
      {
        imageUrl: flower_11,
        title :'BLEEDING HEART VINE (CLERODENDRUM)',
        description:'Unique heart-shaped white flowers with a red center, symbolizing love and beauty.'
      },
      {
        imageUrl: flower_12,
        title :'BLUE ALLAMANDA (ALLAMANDA BLANCHETII)',
        description:'A rare deep purpleblue trumpet flower, perfect for exotic garden spaces.'
      },
      {
        imageUrl: flower_13,
        title :'NAGALINGA FLOWER (COUROUPITA GUIANENSIS)',
        description:'Large, fragrant blooms with cultural and spiritual significance.'
      },
      {
        imageUrl: flower_14,
        title :'YLANG YLANG (CANANGA ODORATA)',
        description:'Rare yellow starshaped flowers with a sweet fragrance, often used in essential oils.'
      },
      {
        imageUrl: flower_15,
        title :'QUEEN OF THE NIGHT (EPIPHYLLUM OXYPETALUM)',
        description:'Mystical white night blooming flower with a sweet fragrance.'
      },
      {
        imageUrl: flower_16,
        title :'PAGODA FLOWER (CLERODENDRUM PANICULATUM)',
        description:'Tower-shaped clusters of orange-red flowers for ornamental gardens.'
      },
      {
        imageUrl: flower_17,
        title :'CHANDRAKANTA FLOWER (CESTRUM NOCTURNUM)',
        description:'Fragrant white blooms glowing under moonlight.'
      },
      {
        imageUrl: flower_18,
        title :'FLAME LILY (GLORIOSA SUPERBA)',
        description:'Fiery red and yellow climbing flowers with exotic curled petals.'
      },
    ]

//---------------------------------------------Animation Logic-----------------------------------------------------------------

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimated(true);
  }, []);

  const leftSideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const rightSideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

//---------------------------------------------Animation Logic-----------------------------------------------------------------

  return (
    <div className="flex flex-col md:gap-8 lg:gap-8  xl:gap-14">
      {/* 1st Section */}
      <div className="bg-cover bg-center md:h-[500px] lg:h-[460px] xl:h-[500px] relative" style={{ backgroundImage: `url(${image_58})` }}>
        <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
        {/* section */}
        <section className="relative  pt-[303px]  flex flex-col justify-center items-center">
          <h1 className="text-[#FFF] text-4xl mb-[40px] font-semibold font-playfair">
            Explore Our Plant Collections
          </h1>
          <div className="flex items-center gap-[2px]">
            <Link
              className="text-[#FFF] text-2xl font-semibold font-[Roboto]"
              to="/"
            >
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_1050_1533)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.24399 5.24399C5.40026 5.08776 5.61219 5 5.83316 5C6.05413 5 6.26605 5.08776 6.42232 5.24399L10.589 9.41066C10.7452 9.56693 10.833 9.77885 10.833 9.99982C10.833 10.2208 10.7452 10.4327 10.589 10.589L6.42232 14.7557C6.26515 14.9075 6.05465 14.9915 5.83615 14.9896C5.61766 14.9877 5.40865 14.9 5.25414 14.7455C5.09963 14.591 5.01199 14.382 5.01009 14.1635C5.00819 13.945 5.09219 13.7345 5.24399 13.5773L8.82149 9.99982L5.24399 6.42232C5.08776 6.26605 5 6.05413 5 5.83316C5 5.61219 5.08776 5.40026 5.24399 5.24399ZM10.244 5.24399C10.4003 5.08776 10.6122 5 10.8332 5C11.0541 5 11.266 5.08776 11.4223 5.24399L15.589 9.41066C15.7452 9.56693 15.833 9.77885 15.833 9.99982C15.833 10.2208 15.7452 10.4327 15.589 10.589L11.4223 14.7557C11.2652 14.9075 11.0547 14.9915 10.8362 14.9896C10.6177 14.9877 10.4086 14.9 10.2541 14.7455C10.0996 14.591 10.012 14.382 10.0101 14.1635C10.0082 13.945 10.0922 13.7345 10.244 13.5773L13.8215 9.99982L10.244 6.42232C10.0878 6.26605 10 6.05413 10 5.83316C10 5.61219 10.0878 5.40026 10.244 5.24399Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1050_1533">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-[#FFF] text-2xl font-semibold font-[Roboto]">
              Category
            </h1>
          </div>
        </section>

        <div className="absolute bottom-[0px]">
          <img src={GRASS} alt="GRASS" className="" />
        </div>
      </div>

      <h1 className="lg:my-5 xl:my-4 md:text-xl lg:text-[22px] xl:text-[28px] text-center font-medium font-playfair">
        Discover our wide range of eco-friendly plants and professional green
        scape solutions tailored <br /> for your home & workspace
      </h1>

      {/*  */}
      <div className="md:px-8 lg:px-12 xl:px-20 ">
        <h1 className="md:text-3xl lg:text-4xl text-center mb-8">
          Forest & Native Plants
        </h1>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 xl:gap-20">
          {/* 1st */}
          <div className="w-full lg:w-1/2 ">
            <p className="md:text-lg xl:text-xl font-[Roboto] text-[#212529] md:mb-4 lg:mb-6 xl:mb-7">
              Our Forest and Native Plants collection offers over 150+ varieties
              that play a crucial role in promoting biodiversity, air
              purification, and ecological restoration. These plants are ideal
              for afforestation, rewilding, and sustainable landscaping
              projects. Some of our key forest and native species include:
            </p>
            <ol className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
              <li>
                1.Neem (<i>Azadirachta indica</i>)
              </li>
              <li>2.Peepal (Sacred Fig)</li>
              <li>
                3.Banyan (<i>Ficus benghalensis</i>)
              </li>
              <li>
                4.Teak (<i>Tectona grandis</i>)
              </li>
              <li>
                5.Bamboo (<i>Bambusoideae</i>)
              </li>
              <li>
                6.Kadamba (<i>Neolamarckia cadamba</i>)
              </li>
              <li>
                7.Khejri (<i>Prosopis cineraria</i>)
              </li>
              <li>
                8.Arjun Tree (<i>Terminalia arjuna</i>)
              </li>
              <li>
                9.Palash/Dhak (<i>Butea monosperma</i>)
              </li>
              <li>
                10.Jamun (<i>Syzygium cumini</i>)
              </li>
              <li>
                11.Ashoka Tree (<i>Saraca asoca</i>)
              </li>
              <li>
                12.Sal Tree (<i>Shorea robusta</i>)
              </li>
              <li>13.Gular (Cluster Fig)</li>
            </ol>
          </div>
          {/* 2nd */}
          <div className="w-full lg:w-1/2">
            <div className="grid  lg:grid-rows-3 grid-cols-2 gap-2">
              <div className="row-span-1 row-span-2">
                <img src={image_59} alt="image_59" className="h-[300px] lg:h-[370px] w-full"/>
              </div>   
              <div className="row-start-1 col-start-2">
                <img src={image_60} alt="" className="h-[200px] lg:h-[181px] w-full" />
              </div>
              <div className="row-span-1">
                <img src={image_61} alt="" className="h-[200px] lg:h-[181px] w-full" />
              </div>
              <div className="row-span-2 col-start-2 row-start-2">
                <img src={image_62} alt="" className="h-[300px] lg:h-[370px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="md:px-8 lg:px-12 xl:px-20  w-full flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-20">
        {/* 1st */}
        <div className="w-full lg:w-1/2 ">
          <div className="grid  grid-rows-3 grid-cols-2 gap-2">
            <div className="row-span-2">
              <img src={image_63} alt="image_63" className="h-[300px] lg:h-[416px]  xl:h-[406px] w-full" />
            </div>
            <div className="row-start-1 col-start-2">
              <img src={image_64} alt="image_64" className="h-[146px] lg:h-[204px] xl:h-[198px] w-full" />
            </div>
            <div className="row-span-1">
              <img src={image_65} alt="image_65" className="h-[146px] lg:h-[204px] xl:h-[198px] w-full" />
            </div>
            <div className="row-start-2 col-start-2 row-span-2">
              <img src={image_66} alt="image_66" className="h-[300px] lg:h-[416px] xl:h-[406px] w-full" />
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="w-full lg:w-1/2 flex flex-col md:gap-3 lg:gap-5 xl:gap-8">
          <ol className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
            <li>
              14.Khair (<i> Acacia catechu</i>)
            </li>
            <li>
              {" "}
              15.Belpatra (<i> Aegle marmelos</i>)
            </li>
            <li>
              16. Saptaparni (<i> Alstonia scholaris</i>)
            </li>
            <li>
              {" "}
              17. Shami Tree (<i> Prosopis cineraria</i>)
            </li>
            <li>
              {" "}
              18. Chandan (<i> Santalum album</i>)
            </li>
            <li>
              19. Mahua (<i> Madhuca indica</i>)
            </li>
            <li>
              {" "}
              20. Nagkesar (<i> Mesua ferrea</i>)
            </li>
            <li>
              {" "}
              21. Karanj (<i> Pongamia pinnata</i>)
            </li>
            <li>
              {" "}
              22. Shisham (<i> Dalbergia sissoo</i>)
            </li>
            <li>
              {" "}
              23. Bargad (<i> Ficus benghalensis</i>)
            </li>
            <li>
              {" "}
              24. Rudraksha Tree(<i> Elaeocarpus ganitrus</i>)
            </li>
            <li>
              {" "}
              25. Harad (<i> Terminalia chebula</i>)
            </li>
            <li>
              {" "}
              26. Baheda (<i> Terminalia bellirica</i>)
            </li>
            <li>
              {" "}
              27. Devil’s Ivy (<i> Epipremnum aureum</i>)
            </li>
            <li>
              {" "}
              28. Amla(<i> Phyllanthus emblica</i>)
            </li>
            <li>
              {" "}
              29. Safed Musli(<i> Chlorophytum borivilianum</i>)
            </li>
            <li>
              {" "}
              30. Kalpavriksha (<i> Banyan – Ficus religiosa</i>)
            </li>
          </ol>

          <p className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
            These plants are carefully selected for their environmental benefits
            and cultural significance, making them ideal for Miyawaki forests,
            Panchvati Vatikas, and spiritual gardens, ensuring long-term
            sustainability and ecological balance.
          </p>
        </div>
      </div>

      {/* 4th Section Fruit Plants */}
      <div className="md:px-8 lg:px-12 xl:px-20 ">
        <h1 className="text-center md:text-3xl lg:text-4xl font-playfair mb-8">Fruits Plants</h1>
        <div className="flex flex-col-reverse lg:flex-row w-full md:gap-6 lg:gap-10 xl:gap-20">
          {/* 1st */}
          <motion.div className="w-full lg:w-1/2 flex flex-col md:gap-3 lg:gap-5 xl:gap-7" variants={leftSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
            <p className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
              Our Fruit Plants collection is over 120+ high-quality, organically
              nurtured fruit varieties, grown without the use of chemicals,
              ensuring purity, safety, and superior nutritional value. These
              plants are cultivated using sustainable practices, focusing on
              zero chemical pesticides, organic fertilizers, and natural growth
              methods, making them ideal for health-conscious growers and
              eco-friendly farming projects.
            </p>
            <ol className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
              <li>
                1.Mango (<i>Miyazaki, R2E2, Katiman, Red Palmer, Thai Mango – Namdocmai</i>)
              </li>
              <li> 2. Jamun (Syzygium cumini)</li>
              <li>
                  3.Guava (<i>Black Guava, Purple Forest Guava, Strawberry Guava</i>)
              </li>
              <li>
                4.Amla(<i>Phyllanthus emblica</i>)
              </li>
              <li>
                5.Dragon Fruit (<i>White, Pink, and Red Pitaya</i>)
              </li>
              <li>
              6.Litchi (<i>Litchi chinensis</i>)
              </li>
              <li>
              7.Pomegranate (<i>Punica granatum</i>)
              </li>
              <li>
              8.Custard Apple (<i>Annona reticulata</i>)
              </li>
              <li>
              9.Cherry(<i>Cherry of Rio Grande, Barbados Cherry</i>)
              </li>
              <li>
              10.Rambutan (<i>Nephelium lappaceum</i>)
              </li>
              <li>
              11.Durian (<i>Durio zibethinus</i>)
              </li>
              <li>
              12.Velvet Apple (<i>Diospyros blancoi</i>)
              </li>
              <li>13.Ice Cream Bean(Inga edulis)</li>
            </ol>
          </motion.div>
          {/* 2nd */}
          <motion.div className="w-full lg:w-1/2" variants={rightSideVariants} initial="hidden" animate={animated ? "visible" : "hidden"}>
              <div className="grid grid-rows-3 grid-cols-2 gap-2">
                  <div className="row-span-2">
                    <img src={image_67} alt='image_67' className="h-[300px] lg:h-[442px] xl:h-[414px] w-full"/>
                  </div>
                  <div className="row-start-1 col-start-2">
                    <img src={image_68} alt='image_68' className="h-[146px] lg:h-[216px] xl:h-[203px] w-full"/>
                  </div>
                  <div className="row-span-1">
                    <img src={image_69} alt='image_69' className="h-[146px] lg:h-[216px] xl:h-[203px] w-full"/>
                  </div>
                  <div className="row-start-2 col-start-2 row-span-2">
                    <img src={image_70} alt='' className="h-[300px] lg:h-[442px] xl:h-[414px] w-full"/>
                  </div>
              </div>
          </motion.div>

        </div>
      </div>

      {/* 5th Section */}
      <div className="md:px-8 lg:px-12 xl:px-20  w-full flex flex-col lg:flex-row md:gap-6 lg:gap-10 xl:gap-20">
          {/* 1st */}
          <div className="w-full lg:w-1/2">
              <div className="grid grid-rows-3 grid-cols-2 gap-2">
                  <div className="row-span-2">
                      <img src={image_71} alt='image_71' className="md:h-[400px] lg:h-[492px]  xl:h-[480px] w-full"/>
                  </div>
                   <div className="row-start-1 col-start-2">
                      <img src={image_72} alt='image_72' className="md:h-[196px] lg:h-[242px] xl:h-[234px] w-full"/>
                  </div>
                  <div className="row-span-1">
                      <img src={image_73} alt='image_73' className="md:h-[196px] lg:h-[242px] xl:h-[234px] w-full"/>
                  </div>
                  <div className="row-span-2 row-start-2 col-start-2">
                      <img src={image_74} alt='image_74' className="md:h-[400px] lg:h-[492px] xl:h-[480px] w-full"/>
                  </div>
              </div>
          </div>
          {/* 2nd */}
          <div className="w-full lg:w-1/2 flex flex-col md:gap-3 lg:gap-5 xl:gap-7">
                <ol className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
                  <li>14.Jackfruit (<i>Red Jackfruit, Pink Jackfruit, Malabar Red Grafted Jackfruit</i>)</li>
                  <li> 15.Star Fruit (<i>Averrhoa carambola</i>)</li>
                  <li> 16.Fig  (<i>Ficus carica</i>)</li>
                  <li>17.Sweet Lemon  (<i>Mosambi</i>)</li>
                  <li> 18.Persimmon (<i>Tendu</i>)</li>
                  <li>19.Mulberry (<i>Shahtoot</i>)</li>
                  <li> 20.Kiwi  (<i>Grafted</i>)</li>
                  <li> 21.Nashpati (<i>Pear</i>)</li>
                  <li> 22.Coconut (<i> 22.Coconut</i>)</li>
                  <li>23.Olive (<i>Olea europaea</i>)</li>
                  <li> 24.Papaya (<i>Carica papaya</i>)</li>
                  <li> 25.Ber (<i>Indian Jujube</i>)</li>
                  <li> 26.Mahua (<i>Madhuca indica</i>)</li>
                  <li> 27.Bilimbi (<i>Averrhoa bilimbi</i>)</li>
                  <li> 28.Gunda (<i>Cordia dichotoma</i>)</li>
                  <li>  29.Wood Apple (<i>Limonia acidissima</i>)</li>
                  <li>  30.Bael (<i>Aegle marmelos</i>)</li>
                </ol>
                <p className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
                    These zero-chemical, organically cultivated fruit plants ensure
                    safer, healthier produce with enhanced taste and nutrient
                    content. Perfect for kitchen gardens, organic farms, food forests,
                    and large-scale plantations, our fruit collection supports
                    biodiversity, pollinator activity, and long-term environmental
                    sustainability while promoting chemical-free living and ecoconscious
                    agriculture.
                </p>
          </div>
      </div>


      {/* 6th Section */}
      <div className="md:px-8 lg:px-12 xl:px-20 ">
          <h1 className="text-center text-4xl font-semibold font-playfair mb-8">Flower Plants</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {
                flowerPlantsDataList.map((eachObject,index)=>(
                  <div key={index} className="flex flex-col  text-center p-4  shadow-lg rounded-2xl">
                        <img src={eachObject.imageUrl} alt='image' className=""/>
                        {/* <h1 className="my-4 text-lg font-medium font-[Roboto]">{eachObject.title}</h1> */}
                        <h1 className="md:my-3 xl:my-4 md:text-base xl:text-lg font-semibold font-[Roboto]">
                            {eachObject.title.split('(')[0]}
                            {eachObject.title.includes('(') && (
                              <span className="block ">
                                ({eachObject.title.split('(')[1]}
                              </span>
                            )}
                        </h1>
                        <h1 className="lg:mb-5 xl:mb-12 text-base font-[Roboto]">{eachObject.description}</h1>
                  </div>
                ))
              }
          </div>

      </div>

      <p className="md:px-8 lg:px-12 xl:px-20 md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
      Our Flower Plants collection at Mewar Organics offers over 60+ rare, exotic, and native varieties, each cultivated with zero
      chemicals to ensure natural beauty, sustainability, and pollinator support. From vibrant ornamental blooms to sacred and
      spiritually significant flowers, these plants are ideal for Nakshatra Vatikas, Butterfly Gardens, Terrace Gardens, and eco-friendly
      landscapes. Our rare flowering plants not only elevate the visual appeal of your spaces but also contribute to biodiversity
      conservation, making them perfect for spiritual gardens, themed plantations, and personal green sanctuaries.
      </p>

      {/*  */}
      <div className="md:px-8 lg:px-12 xl:px-20  flex flex-col lg:flex-row gap-12 w-full">
        {/* 1st */}
        <div className="w-full lg:w-1/2 grid grid-cols-3 gap-5">
            <img src={image_75} alt='image_75' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_76} alt='image_76' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_77} alt='image_77' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_78} alt='image_78' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_79} alt='image_79' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_80} alt='image_80' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_81} alt='image_81' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_82} alt='image_82' className="h-[200px] lg:h-[242px] w-[266px]"/>
            <img src={image_83} alt='image_83' className="h-[200px] lg:h-[242px] w-[266px]"/>
        </div>
        {/* 2nd */}
        <div className="flex flex-col w-full lg:w-1/2">
            <h1 className="md:text-3xl lg:text-4xl font-playfair font-semibold">Our Collection</h1>
            <p className="md:my-3 lg:my-5 xl:my-7 md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
                Our landscaping collection features over 80+ varieties of
                premium plants, ranging from lush tropical greens to rare
                and exotic species. These plants are perfect for creating
                vibrant, sustainable, and visually stunning landscapes that
                thrive in diverse environments.
            </p>
            <ol className="md:text-lg xl:text-xl font-[Roboto] text-[#212529]">
                    <li>1.Monstera</li>
                    <li> 2.Alocasia</li>
                    <li> 3.Philodendron</li>
                    <li> 4.Anthurium</li>
                    <li>5.Begonia</li>
                    <li> 6.Caladium</li>
                    <li> 7.Calathea</li>
                    <li> 8.Syngonium</li>
                    <li>9.Sansevieria</li>
                    <li> 10.Cactus</li>
                    <li> 11.Raven ZZ Plant</li>
                    <li>12.Senecio rowleyanus</li>
                    <li> 13.Tacca chantrieri</li>
                    <li>14.Staghorn Fern</li>
                    <li> 15.Ficus lyrata</li>
                    <li> 16.Agave tequilana</li>
                    <li> 17.Peperomia argyreia</li>
                    <li> 18.Ficus elastica</li>
                    <li>19.Thai Constellation Monstera</li>
                    <li> 20.Ensete ventricosum ‘Maurelii’</li>
            </ol>
        </div>
      </div>


      

      {/*  */}
      <div className="bg-cover bg-center h-[400px]  bg-stone-900 opacity-100 relative" style={{backgroundImage:`url(${image_84})`}} >
          <div className="absolute inset-0 bg-stone-900 opacity-50 z-0"></div>
            <section className="flex flex-col justify-center items-center  h-full w-full  z-10 relative">
                <div className=" flex flex-col  gap-3 ">
                  <h1 className="text-[#fff] md:text-2xl md:text-3xl font-semibold font-playfair">Find the Perfect Organic Plant for Your Home & Garden!</h1>
                  <h1 className="text-[#fff] text-lg font-medium font-[Roboto]  text-center">Let’s make gardening easy! Choose from our wide range of native, <br/> forest, medicinal, and ornamental plants</h1>
              </div>
              <div className="mt-4">
                  <button className="bg-[#55833D] md:px-5 lg:px-8 md:py-3 lg:py-5 text-white text-base lg:text-lg font-semibold font-[Roboto] rounded-lg hover:text-black hover:bg-white">
                      Talk to a Plant Expert
                  </button>    
              </div>
            </section>
      </div>





    </div>
  );
};

export default Categeories;
