(function(){
var KEY='studyquest.v1';
var COLORS=['#FF5A36','#0FA5A0','#3B82F6','#E8479B','#E59A00','#3FA34D'];
var SUBJ=[{k:'history',n:'History',c:'#E59A00'},{k:'geo',n:'Geography',c:'#0FA5A0'},{k:'sci',n:'Science',c:'#3FA34D'},{k:'math',n:'Maths',c:'#3B82F6'},{k:'gk',n:'India GK',c:'#E8479B'}];

/* Simple, age-appropriate starter banks for UKG–Class 5. */
var EARLY={
  'UKG':{
    history:[['Who helps us learn at school?','Teacher',['Doctor','Farmer','Pilot']],['Where do we sleep at night?','Bed',['Sink','Desk','Road']],['Who helps put out fires?','Firefighter',['Chef','Tailor','Painter']],['Where do we borrow books?','Library',['Kitchen','Garage','Garden']]],
    geo:[['What is above us in the daytime?','Sky',['Floor','Road','Chair']],['Where do fish live?','Water',['Trees','Desert','Clouds']],['Which place has lots of sand?','Beach',['Library','Kitchen','Classroom']],['What do we use when it rains?','Umbrella',['Sunglasses','Comb','Pillow']]],
    sci:[['Which animal says “meow”?','Cat',['Cow','Dog','Duck']],['Which part of a plant is usually green?','Leaf',['Root','Seed','Stone']],['What do we drink when thirsty?','Water',['Sand','Oil','Paint']],['Which animal gives us milk?','Cow',['Lion','Tiger','Fox']]],
    math:[['What number comes after 2?','3',['1','4','5']],['How many sides does a triangle have?','3',['2','4','5']],['Which shape is round?','Circle',['Square','Triangle','Rectangle']],['What is 1 + 1?','2',['1','3','4']]],
    gk:[['What colour is a ripe banana usually?','Yellow',['Blue','Purple','Black']],['Which body part helps us see?','Eyes',['Ears','Knees','Elbows']],['How many days are in a week?','7',['5','6','8']],['Which is a pet animal?','Dog',['Shark','Tiger','Crocodile']]]
  },
  '1':{
    history:[['Who teaches children in a classroom?','Teacher',['Pilot','Chef','Driver']],['What do we call our mother’s mother?','Grandmother',['Aunt','Sister','Cousin']],['Where do we go to learn?','School',['Hospital','Airport','Bank']],['Who delivers letters?','Postperson',['Doctor','Baker','Gardener']]],
    geo:[['Which is a place where we live?','Home',['Cloud','River','Star']],['Which one is a water body?','River',['Mountain','Road','Building']],['What gives us light during the day?','Sun',['Moon','Lamp','Torch']],['Where do birds build nests?','Trees',['Underwater','Inside rocks only','In a fridge']]],
    sci:[['Which part of a plant takes in water from soil?','Roots',['Flower','Fruit','Leaf']],['Which animal barks?','Dog',['Cat','Cow','Goat']],['Which sense organ helps us hear?','Ears',['Eyes','Nose','Tongue']],['Which food comes from a hen?','Egg',['Apple','Rice','Carrot']]],
    math:[['What is 2 + 3?','5',['4','6','7']],['What comes before 10?','9',['8','11','12']],['How many sides does a square have?','4',['3','5','6']],['Which is the biggest number?','8',['3','5','6']]],
    gk:[['What is the name of our country?','India',['Japan','Brazil','Egypt']],['Which festival uses colours?','Holi',['Diwali','Eid','Christmas']],['Which animal is called the king of the jungle?','Lion',['Rabbit','Goat','Deer']],['Which vehicle flies in the sky?','Aeroplane',['Bus','Bicycle','Train']]]
  },
  '2':{
    history:[['Who was the first Prime Minister of India?','Jawaharlal Nehru',['Mahatma Gandhi','Sardar Patel','Subhas Chandra Bose']],['What do we call people who lived long ago?','Ancestors',['Astronauts','Tourists','Athletes']],['Which building is a famous monument in Agra?','Taj Mahal',['India Gate','Charminar','Gateway of India']],['What helps us learn about the past?','Old photographs',['Weather reports','Traffic lights','Menus']]],
    geo:[['Which planet do we live on?','Earth',['Mars','Jupiter','Venus']],['Which direction does the Sun rise from?','East',['West','North','South']],['Which is a natural source of water?','Lake',['Road','Bridge','Building']],['What do we call land surrounded by water?','Island',['Valley','Desert','Plain']]],
    sci:[['Which gas do humans need to breathe?','Oxygen',['Helium','Smoke','Steam']],['Which part of the body pumps blood?','Heart',['Stomach','Lung','Brain']],['What do plants need to grow?','Sunlight',['Plastic','Soap','Glass']],['Which animal lives both on land and in water?','Frog',['Camel','Eagle','Horse']]],
    math:[['What is 8 + 5?','13',['12','14','15']],['What is 15 − 7?','8',['7','9','10']],['How many minutes are in one hour?','60',['30','50','100']],['Which number is even?','12',['7','9','15']]],
    gk:[['What is the capital of India?','New Delhi',['Mumbai','Chennai','Jaipur']],['Which is our national bird?','Peacock',['Parrot','Crow','Sparrow']],['Which is our national animal?','Bengal tiger',['Elephant','Lion','Deer']],['How many colours are on the Indian national flag?','Three',['Two','Four','Five']]]
  },
  '3':{
    history:[['Who is known as the Father of the Nation in India?','Mahatma Gandhi',['Jawaharlal Nehru','B. R. Ambedkar','Bhagat Singh']],['What is a museum used for?','Keeping and displaying objects from the past',['Growing crops','Treating patients','Building roads']],['Which freedom fighter was called Netaji?','Subhas Chandra Bose',['Lal Bahadur Shastri','C. V. Raman','Rajendra Prasad']],['What does a timeline show?','Events in time order',['Weather only','Road distances','Plant growth only']]],
    geo:[['Which is the largest continent?','Asia',['Europe','Australia','Antarctica']],['What is a map?','A drawing of a place',['A type of cloud','A musical instrument','A kind of soil']],['Which direction is opposite to north?','South',['East','West','North-east']],['What is a desert known for?','Very little rainfall',['Heavy daily snowfall','Many rivers everywhere','Dense rainforests']]],
    sci:[['What is the process by which plants make food?','Photosynthesis',['Digestion','Evaporation','Germination']],['Which material is attracted by a magnet?','Iron',['Wood','Paper','Rubber']],['Which organ helps us breathe?','Lungs',['Heart','Stomach','Kidney']],['Water turns into ice when it…','Freezes',['Boils','Melts','Evaporates']]],
    math:[['What is 7 × 4?','28',['24','21','32']],['What is 36 ÷ 6?','6',['5','7','8']],['How many centimetres are in a metre?','100',['10','50','1000']],['What is half of 18?','9',['8','10','12']]],
    gk:[['Which is the national flower of India?','Lotus',['Rose','Sunflower','Lily']],['Which ocean lies south of India?','Indian Ocean',['Pacific Ocean','Arctic Ocean','Atlantic Ocean']],['Which animal is known for its hump?','Camel',['Zebra','Giraffe','Wolf']],['Which sport uses a bat and wicket?','Cricket',['Football','Hockey','Basketball']]]
  },
  '4':{
    history:[['Who was the first Mughal emperor in India?','Babur',['Akbar','Shah Jahan','Aurangzeb']],['In which year did India become independent?','1947',['1857','1919','1950']],['Who led the Dandi March?','Mahatma Gandhi',['Bhagat Singh','Rani Lakshmibai','B. R. Ambedkar']],['What is archaeology?','Study of the past through material remains',['Study of stars','Study of weather','Study of oceans']]],
    geo:[['Which imaginary line divides Earth into two hemispheres?','Equator',['Prime Meridian','Tropic of Capricorn','Arctic Circle']],['Which is the highest mountain in the world?','Mount Everest',['K2','Nanda Devi','Anamudi']],['What is the main source of fresh water for rivers?','Rain and melting snow',['Sea water only','Petrol','Lava']],['Which state is famous for the Thar Desert?','Rajasthan',['Kerala','Assam','Bihar']]],
    sci:[['Which force pulls objects towards Earth?','Gravity',['Friction','Magnetism','Buoyancy']],['Which part of a plant absorbs water?','Roots',['Petals','Fruit','Stem tip only']],['Which planet is called the Red Planet?','Mars',['Venus','Saturn','Mercury']],['Which state of matter has a fixed shape?','Solid',['Liquid','Gas','Vapour']]],
    math:[['What is 125 + 76?','201',['191','211','199']],['What is 9 × 8?','72',['64','81','63']],['What is the perimeter of a square with side 5 cm?','20 cm',['10 cm','15 cm','25 cm']],['Which fraction means one half?','1/2',['1/3','1/4','2/3']]],
    gk:[['Which river is often called the Ganga of the South?','Godavari',['Yamuna','Sutlej','Beas']],['What is the capital of Jharkhand?','Ranchi',['Patna','Bhopal','Raipur']],['Which organisation launches many Indian satellites?','ISRO',['DRDO only','BCCI','IRCTC']],['Which is the largest mammal?','Blue whale',['Elephant','Giraffe','Great white shark']]]
  },
  '5':{
    history:[['Who founded the Maurya Empire?','Chandragupta Maurya',['Ashoka','Akbar','Harsha']],['Who was the emperor associated with the Kalinga War and later spread of dhamma?','Ashoka',['Babur','Shah Jahan','Prithviraj Chauhan']],['Who wrote the Indian national anthem?','Rabindranath Tagore',['Bankim Chandra Chattopadhyay','Sarojini Naidu','Premchand']],['What was the main purpose of the Dandi March?','To protest the salt tax',['To demand new railways','To promote foreign cloth','To start a war']]],
    geo:[['Which layer of Earth is the outermost?','Crust',['Mantle','Outer core','Inner core']],['Which is the largest ocean?','Pacific Ocean',['Indian Ocean','Arctic Ocean','Atlantic Ocean']],['What is the process of water changing into vapour?','Evaporation',['Condensation','Freezing','Collection']],['Which soil is often suitable for cotton?','Black soil',['Desert sand','Mountain gravel','Peaty soil']]],
    sci:[['What is the basic unit of life?','Cell',['Atom','Tissue','Organ']],['Which organ pumps blood around the body?','Heart',['Lungs','Brain','Liver']],['What is the change from liquid to gas called?','Evaporation',['Condensation','Freezing','Melting']],['Which energy source is renewable?','Solar energy',['Coal','Petroleum','Natural gas']]],
    math:[['What is 24 × 6?','144',['124','134','154']],['What is 144 ÷ 12?','12',['10','11','14']],['What is 3/4 of 20?','15',['10','12','16']],['What is the area of a rectangle 6 cm by 4 cm?','24 cm²',['10 cm²','20 cm²','28 cm²']]],
    gk:[['What is the capital of Assam?','Dispur',['Guwahati','Shillong','Imphal']],['Which Indian space mission landed near the Moon’s south polar region in 2023?','Chandrayaan-3',['Mangalyaan','Chandrayaan-1','Aditya-L1']],['What is the currency of India?','Indian rupee',['Yen','Euro','Pound sterling']],['Which is the smallest planet in our Solar System?','Mercury',['Mars','Venus','Neptune']]]
  }
};

/* Question bank: [question, correct answer, [3 wrong answers]] — NCERT-style, by class */
var BANK={
history:{
6:[["Which river valley was home to the Harappan civilisation?","Indus",["Ganga","Godavari","Narmada"]],
["Who founded the Maurya empire?","Chandragupta Maurya",["Ashoka","Bindusara","Samudragupta"]],
["Which war made Ashoka give up fighting?","Kalinga war",["Battle of Panipat","Battle of Plassey","Battle of Haldighati"]],
["Which Harappan site is famous for the Great Bath?","Mohenjo-daro",["Lothal","Kalibangan","Dholavira"]],
["Which is the oldest Veda?","Rigveda",["Samaveda","Yajurveda","Atharvaveda"]],
["Who wrote the Arthashastra?","Kautilya (Chanakya)",["Kalidasa","Aryabhata","Panini"]],
["Where did Gautama Buddha attain enlightenment?","Bodh Gaya",["Sarnath","Lumbini","Kushinagar"]],
["Where was Gautama Buddha born?","Lumbini",["Sarnath","Bodh Gaya","Rajgir"]],
["Where did Buddha give his first sermon?","Sarnath",["Bodh Gaya","Lumbini","Nalanda"]],
["Mahavira was the last Tirthankara of which religion?","Jainism",["Buddhism","Sikhism","Zoroastrianism"]]],
7:[["Who founded the Mughal empire in India?","Babur",["Akbar","Humayun","Sher Shah Suri"]],
["Babur won the First Battle of Panipat (1526) against whom?","Ibrahim Lodi",["Rana Sanga","Hemu","Sher Shah"]],
["Who built the Taj Mahal?","Shah Jahan",["Akbar","Jahangir","Aurangzeb"]],
["Which Sultan shifted the capital from Delhi to Daulatabad?","Muhammad bin Tughluq",["Alauddin Khalji","Iltutmish","Balban"]],
["The Brihadeshwara temple built by the Cholas is in which city?","Thanjavur",["Madurai","Hampi","Kanchipuram"]],
["What was the capital of the Vijayanagara Empire?","Hampi",["Warangal","Bidar","Golconda"]],
["Akbar's policy of universal peace and tolerance was called?","Sulh-i-kul",["Mansabdari","Zabt","Jagirdari"]],
["Where was Shivaji crowned Chhatrapati in 1674?","Raigad",["Pune","Agra","Sinhagad"]],
["Who started the construction of the Qutub Minar?","Qutb-ud-din Aibak",["Iltutmish","Balban","Alauddin Khalji"]],
["Which Bhakti saint, a weaver, wrote famous dohas?","Kabir",["Tulsidas","Surdas","Ramananda"]]],
8:[["In which year was the Battle of Plassey fought?","1757",["1764","1857","1707"]],
["Who introduced the Subsidiary Alliance system?","Lord Wellesley",["Lord Dalhousie","Lord Cornwallis","Lord Bentinck"]],
["Who introduced the Doctrine of Lapse?","Lord Dalhousie",["Lord Wellesley","Lord Curzon","Lord Canning"]],
["Where did the Revolt of 1857 begin?","Meerut",["Delhi","Kanpur","Jhansi"]],
["Who introduced the Permanent Settlement in Bengal?","Lord Cornwallis",["Lord Wellesley","Thomas Munro","Warren Hastings"]],
["Who banned the practice of sati in 1829?","Lord William Bentinck",["Lord Dalhousie","Lord Cornwallis","Lord Ripon"]],
["Who founded the Brahmo Samaj?","Raja Ram Mohan Roy",["Dayanand Saraswati","Swami Vivekananda","Jyotiba Phule"]],
["Who founded the Arya Samaj?","Swami Dayanand Saraswati",["Raja Ram Mohan Roy","Annie Besant","Ramakrishna Paramhansa"]],
["Who led the revolt at Jhansi in 1857?","Rani Lakshmibai",["Begum Hazrat Mahal","Rani Chennamma","Ahilyabai Holkar"]],
["In which year was the Indian National Congress founded?","1885",["1857","1905","1919"]]],
9:[["In which year did the French Revolution begin?","1789",["1776","1799","1815"]],
["The storming of which fortress marked the start of the French Revolution?","The Bastille",["Versailles","The Louvre","The Tuileries"]],
["Which slogan belongs to the French Revolution?","Liberty, Equality, Fraternity",["Peace, Land and Bread","Truth, Duty, Honour","Faith, Unity, Discipline"]],
["Who led the Bolsheviks in the Russian Revolution of 1917?","Lenin",["Nicholas II","Kerensky","Rasputin"]],
["Which Tsar was overthrown in the February Revolution of 1917?","Nicholas II",["Alexander II","Peter the Great","Ivan the Terrible"]],
["Which Russian slogan promised 'Peace, Land and ___'?","Bread",["Freedom","Work","Power"]],
["Which treaty ended World War I with Germany in 1919?","Treaty of Versailles",["Treaty of Paris","Treaty of Vienna","Treaty of Tilsit"]],
["Hitler became Chancellor of Germany in which year?","1933",["1923","1929","1939"]],
["Who led the Reign of Terror in France?","Robespierre",["Napoleon","Louis XVI","Danton"]],
["Which device was used for executions in the French Revolution?","Guillotine",["Gallows","Catapult","Cannon"]]],
10:[["In which year did the Jallianwala Bagh massacre happen?","1919",["1857","1920","1930"]],
["Gandhiji's Dandi March of 1930 was against which law?","Salt law",["Rowlatt Act","Partition of Bengal","Simon Commission"]],
["In which year did Gandhiji return to India from South Africa?","1915",["1905","1920","1930"]],
["In which year did the Non-Cooperation Movement begin?","1920",["1919","1930","1942"]],
["In which year was the Quit India Movement launched?","1942",["1920","1930","1947"]],
["The Champaran Satyagraha (1917) was against which practice?","Forced indigo cultivation",["High salt tax","Land revenue hike","Cotton mill closures"]],
["The 'Poorna Swaraj' resolution was passed at which Congress session?","Lahore (1929)",["Calcutta (1920)","Karachi (1931)","Bombay (1942)"]],
["Who gave the slogan 'Do or Die' during Quit India?","Mahatma Gandhi",["Subhas Chandra Bose","Bhagat Singh","Jawaharlal Nehru"]],
["The Gandhi–Irwin Pact was signed in which year?","1931",["1930","1932","1935"]],
["The Rowlatt Act (1919) allowed the government to do what?","Detain people without trial",["Collect a salt tax","Ban cotton imports","Create separate electorates"]]]
},
geo:{
6:[["Which is the largest continent?","Asia",["Africa","Europe","North America"]],
["Which imaginary line divides Earth into Northern and Southern Hemispheres?","Equator",["Prime Meridian","Tropic of Cancer","Arctic Circle"]],
["The Prime Meridian passes through which place?","Greenwich, London",["Paris","New Delhi","Cairo"]],
["Which is the largest ocean?","Pacific Ocean",["Atlantic Ocean","Indian Ocean","Arctic Ocean"]],
["Which is the highest mountain peak in the world?","Mount Everest",["K2","Kanchenjunga","Kilimanjaro"]],
["Which is the longest river in India?","Ganga",["Yamuna","Godavari","Narmada"]],
["How long does Earth take to rotate once on its axis?","24 hours",["12 hours","30 days","365 days"]],
["Lines running east to west on a globe are called?","Latitudes",["Longitudes","Meridians","Contours"]],
["Which is the smallest continent?","Australia",["Europe","Antarctica","South America"]],
["Kathmandu is the capital of which neighbouring country?","Nepal",["Bhutan","Sri Lanka","Bangladesh"]]],
7:[["Which layer of the Earth do we live on?","Crust",["Mantle","Core","Atmosphere"]],
["The Thar desert lies mostly in which state?","Rajasthan",["Gujarat","Punjab","Maharashtra"]],
["Rocks formed by cooling of magma are called?","Igneous rocks",["Sedimentary rocks","Metamorphic rocks","Fossil rocks"]],
["Which gas makes up most of the air?","Nitrogen",["Oxygen","Carbon dioxide","Argon"]],
["Earthquake intensity is measured on which scale?","Richter scale",["Beaufort scale","Kelvin scale","Mohs scale"]],
["Water changing from liquid to vapour is called?","Evaporation",["Condensation","Precipitation","Freezing"]],
["Weather happens in which layer of the atmosphere?","Troposphere",["Stratosphere","Mesosphere","Exosphere"]],
["The ozone layer is found in which layer?","Stratosphere",["Troposphere","Mesosphere","Thermosphere"]],
["The Amazon rainforest is in which continent?","South America",["Africa","Asia","Australia"]],
["Which is the largest hot desert in the world?","Sahara",["Thar","Gobi","Kalahari"]]],
8:[["Which soil is best suited for growing cotton?","Black soil",["Alluvial soil","Red soil","Laterite soil"]],
["Which of these is a renewable resource?","Solar energy",["Coal","Petroleum","Natural gas"]],
["Which resource is called 'black gold'?","Petroleum",["Iron ore","Mica","Bauxite"]],
["Rice is mainly grown in which crop season?","Kharif",["Rabi","Zaid","Spring"]],
["Which crop is known as the 'golden fibre'?","Jute",["Cotton","Silk","Hemp"]],
["Which state is the largest producer of tea in India?","Assam",["Kerala","Punjab","Gujarat"]],
["The Green Revolution mainly boosted the production of which crop?","Wheat",["Cotton","Jute","Tea"]],
["Jamshedpur, a major steel city, is in which state?","Jharkhand",["Odisha","West Bengal","Bihar"]],
["Removal of top soil by wind or water is called?","Soil erosion",["Terracing","Afforestation","Weathering"]],
["Hydroelectric power is produced using what?","Flowing water",["Coal","Uranium","Wind"]]],
9:[["How many Indian states does the Tropic of Cancer pass through?","8",["6","7","9"]],
["What are the Himalayas an example of?","Fold mountains",["Block mountains","Volcanic mountains","Residual mountains"]],
["Which is the highest peak located in India?","Kanchenjunga",["Nanda Devi","Mount Everest","Annapurna"]],
["Which is the highest peak of the Western Ghats?","Anamudi",["Doddabetta","Mahendragiri","Nanda Devi"]],
["The Ganga originates from which glacier?","Gangotri",["Yamunotri","Siachen","Milam"]],
["From which direction do the monsoon winds bring rain to India?","South-west",["North-east","North-west","South-east"]],
["Chilika Lake, a brackish water lagoon, is in which state?","Odisha",["Kerala","Rajasthan","Assam"]],
["What is the southernmost tip of the Indian mainland?","Kanyakumari",["Indira Point","Rameswaram","Port Blair"]],
["India ranks which in the world by area?","7th",["3rd","5th","10th"]],
["The Deccan Plateau lies in which part of India?","Peninsular India",["Northern plains","Himalayas","Thar region"]]],
10:[["The Bhakra Nangal dam is built on which river?","Sutlej",["Beas","Ravi","Yamuna"]],
["Which soil is formed by deposits of rivers?","Alluvial soil",["Black soil","Red soil","Laterite soil"]],
["The Jharia coalfield is in which state?","Jharkhand",["Odisha","Chhattisgarh","Telangana"]],
["Rabi crops are sown in which season?","Winter",["Summer","Monsoon","Spring"]],
["In which year was Project Tiger launched?","1973",["1952","1980","1992"]],
["The Golden Quadrilateral connects which four cities?","Delhi, Mumbai, Chennai, Kolkata",["Delhi, Jaipur, Lucknow, Patna","Mumbai, Pune, Goa, Kochi","Chennai, Madurai, Kochi, Mysuru"]],
["Which city is called the Silicon Valley of India?","Bengaluru",["Hyderabad","Pune","Chennai"]],
["The Sundarbans mangrove forests are in which state?","West Bengal",["Odisha","Gujarat","Kerala"]],
["Sal trees are found in which type of forest?","Tropical deciduous",["Evergreen","Coniferous","Mangrove"]],
["Which is the largest freshwater lake in India?","Wular Lake",["Chilika","Dal Lake","Loktak"]]]
},
sci:{
6:[["Which gas do plants take in for photosynthesis?","Carbon dioxide",["Oxygen","Nitrogen","Hydrogen"]],
["Which organ pumps blood in our body?","Heart",["Lungs","Kidney","Liver"]],
["Which force pulls objects towards the Earth?","Gravity",["Friction","Magnetism","Inertia"]],
["Which of these is a good conductor of electricity?","Copper",["Rubber","Wood","Plastic"]],
["At what temperature does water freeze to ice?","0°C",["100°C","32°C","-10°C"]],
["Which is the nearest star to Earth?","The Sun",["The Moon","Polaris","Sirius"]],
["Which part of a plant absorbs water from the soil?","Roots",["Leaves","Stem","Flower"]],
["Which vitamin do we get from sunlight?","Vitamin D",["Vitamin A","Vitamin C","Vitamin B12"]],
["A magnet attracts which material?","Iron",["Wood","Plastic","Glass"]],
["How do we get salt from sea water?","Evaporation",["Filtration","Sedimentation","Magnetic separation"]]],
7:[["Where do plants make their food?","Leaves",["Roots","Stem","Flowers"]],
["Which acid is present in lemon?","Citric acid",["Acetic acid","Lactic acid","Tartaric acid"]],
["What is the SI unit of speed?","Metre per second",["Kilogram","Newton","Joule"]],
["Animals that eat only plants are called?","Herbivores",["Carnivores","Omnivores","Decomposers"]],
["Red blood cells carry which gas?","Oxygen",["Nitrogen","Hydrogen","Helium"]],
["Loss of water vapour from leaves is called?","Transpiration",["Respiration","Photosynthesis","Germination"]],
["Acids turn blue litmus paper which colour?","Red",["Green","Yellow","It stays blue"]],
["How does heat travel through solids?","Conduction",["Convection","Radiation","Reflection"]],
["Which is the hardest natural substance?","Diamond",["Graphite","Iron","Quartz"]],
["Light travels in which type of path?","Straight lines",["Curved paths","Zigzag paths","Circles"]]],
8:[["What is the SI unit of force?","Newton",["Joule","Watt","Pascal"]],
["Which is the powerhouse of the cell?","Mitochondria",["Nucleus","Ribosome","Golgi body"]],
["Which of these is a fossil fuel?","Petroleum",["Wind","Sunlight","Biogas"]],
["Sound cannot travel through which medium?","Vacuum",["Water","Steel","Air"]],
["What is the unit of frequency?","Hertz",["Decibel","Newton","Watt"]],
["Who first discovered the cell?","Robert Hooke",["Charles Darwin","Gregor Mendel","Louis Pasteur"]],
["Where does fertilisation take place in humans?","Fallopian tube (oviduct)",["Uterus","Ovary","Vagina"]],
["Which gas is released when a metal reacts with an acid?","Hydrogen",["Oxygen","Carbon dioxide","Nitrogen"]],
["Friction is a force that does what?","Opposes motion",["Increases speed","Attracts objects","Produces light"]],
["What is the SI unit of pressure?","Pascal",["Newton","Joule","Hertz"]]],
9:[["What is the SI unit of mass?","Kilogram",["Gram","Newton","Pound"]],
["Newton's first law of motion is also called the law of?","Inertia",["Gravitation","Action and reaction","Momentum"]],
["What is the value of acceleration due to gravity on Earth?","9.8 m/s²",["98 m/s²","0.98 m/s²","6.67 m/s²"]],
["The nucleus of an atom contains what?","Protons and neutrons",["Protons and electrons","Electrons and neutrons","Only electrons"]],
["Who discovered the electron?","J.J. Thomson",["Rutherford","Niels Bohr","Chadwick"]],
["Which extra outer layer does a plant cell have?","Cell wall",["Cell membrane","Nucleus","Vacuole"]],
["Sound travels as what type of wave?","Longitudinal wave",["Transverse wave","Electromagnetic wave","Light wave"]],
["Which of these is a mixture?","Air",["Distilled water","Pure gold","Oxygen"]],
["What is the melting point of ice in Kelvin?","273 K",["0 K","373 K","100 K"]],
["Which tissue carries water in plants?","Xylem",["Phloem","Parenchyma","Collenchyma"]]],
10:[["What is the pH of a neutral solution?","7",["0","1","14"]],
["What is the SI unit of electrical resistance?","Ohm",["Ampere","Volt","Watt"]],
["What is the chemical formula of baking soda?","NaHCO₃",["Na₂CO₃","NaCl","NaOH"]],
["Which mirror is used in vehicle headlights?","Concave mirror",["Convex mirror","Plane mirror","Cylindrical mirror"]],
["Which mirror is used as a rear-view mirror in vehicles?","Convex mirror",["Concave mirror","Plane mirror","Bifocal mirror"]],
["Which gas is released during photosynthesis?","Oxygen",["Carbon dioxide","Nitrogen","Methane"]],
["Who gave the laws of inheritance?","Gregor Mendel",["Charles Darwin","Lamarck","James Watson"]],
["What is the SI unit of power?","Watt",["Joule","Newton","Volt"]],
["Which element has the symbol Fe?","Iron",["Fluorine","Francium","Lead"]],
["Which part controls a reflex action?","Spinal cord",["Cerebrum","Cerebellum","Heart"]]]
},
math:{
6:[["What is 12 × 12?","144",["124","154","122"]],
["What is the LCM of 4 and 6?","12",["24","6","10"]],
["What is the HCF of 12 and 18?","6",["3","9","36"]],
["Which of these is a prime number?","17",["15","21","27"]],
["What is the perimeter of a square with side 5 cm?","20 cm",["25 cm","10 cm","15 cm"]],
["What is 1/2 + 1/4?","3/4",["2/6","1/6","1/8"]],
["An angle of 90° is called?","Right angle",["Acute angle","Obtuse angle","Straight angle"]],
["How many sides does a hexagon have?","6",["5","7","8"]],
["What is 25% of 80?","20",["25","15","40"]],
["What is the smallest prime number?","2",["1","0","3"]]],
7:[["What is (−5) + (−3)?","−8",["8","−2","2"]],
["The angles of a triangle add up to?","180°",["90°","270°","360°"]],
["What is the area of a rectangle 6 cm by 4 cm?","24 cm²",["20 cm²","10 cm²","48 cm²"]],
["What is 3/5 as a percentage?","60%",["35%","30%","75%"]],
["Solve: x + 7 = 15","x = 8",["x = 22","x = 7","x = 9"]],
["What is 13²?","169",["139","196","156"]],
["An isosceles triangle has how many equal sides?","Two",["Three","None","Four"]],
["What is the mean of 2, 4, 6, 8?","5",["4","6","20"]],
["Which of these is a rational number?","2/3",["√2","π","√3"]],
["What is the perimeter of a rectangle 8 cm by 3 cm?","22 cm",["24 cm","11 cm","14 cm"]]],
8:[["What is √169?","13",["14","12","11"]],
["(a + b)² equals?","a² + 2ab + b²",["a² + b²","a² − 2ab + b²","2a + 2b"]],
["What is the cube of 4?","64",["16","12","48"]],
["The interior angles of a quadrilateral add up to?","360°",["180°","270°","540°"]],
["Simple interest on ₹1000 at 10% per year for 2 years?","₹200",["₹100","₹210","₹220"]],
["Solve: 3x = 27","x = 9",["x = 8","x = 24","x = 81"]],
["What is the volume of a cube of side 3 cm?","27 cm³",["9 cm³","18 cm³","81 cm³"]],
["How many diagonals does a quadrilateral have?","2",["1","3","4"]],
["2³ × 2² equals?","2⁵",["2⁶","4⁵","2¹"]],
["What is the percentage increase from 50 to 60?","20%",["10%","25%","15%"]]],
9:[["The zeroes of the polynomial x² − 4 are?","2 and −2",["4 only","4 and −4","0 and 4"]],
["Who is known as the Father of Geometry?","Euclid",["Pythagoras","Aryabhata","Archimedes"]],
["Which of these is an irrational number?","√2",["0.25","3/4","9"]],
["(x + y)(x − y) equals?","x² − y²",["x² + y²","x² − 2xy","2x"]],
["What is the area of a triangle?","½ × base × height",["base × height","½ × base + height","base + height"]],
["What is the mean of the first 5 natural numbers?","3",["2","4","5"]],
["The point (3, −2) lies in which quadrant?","Fourth",["First","Second","Third"]],
["What is the curved surface area of a cylinder?","2πrh",["πr²h","2πr²","πrh"]],
["Angles on a straight line add up to?","180°",["90°","270°","360°"]],
["The graph of a linear equation in two variables is?","A straight line",["A circle","A parabola","A triangle"]]],
10:[["What is the discriminant of ax² + bx + c = 0?","b² − 4ac",["b² + 4ac","2b − ac","a² − 4bc"]],
["What is sin 30°?","1/2",["√3/2","1","1/√2"]],
["What is the sum of the first n natural numbers?","n(n+1)/2",["n(n−1)/2","n²","n(n+1)"]],
["What is the nth term of an AP?","a + (n−1)d",["a + nd","a − (n−1)d","a·rⁿ⁻¹"]],
["A right triangle has sides 3 and 4. What is the hypotenuse?","5",["6","7","√7"]],
["What is tan 45°?","1",["0","√3","1/2"]],
["What is the probability of a sure event?","1",["0","1/2","100"]],
["What is the volume of a sphere?","4/3 πr³",["4πr²","πr²h","2/3 πr³"]],
["What is the degree of a quadratic equation?","2",["1","3","0"]],
["What is cos 60°?","1/2",["√3/2","1","0"]]]
},
gk:[["Which is the national animal of India?","Tiger",["Lion","Elephant","Leopard"]],
["Which is the national bird of India?","Peacock",["Parrot","Sparrow","Eagle"]],
["Who composed the National Anthem of India?","Rabindranath Tagore",["Bankim Chandra Chatterjee","Muhammad Iqbal","Subramania Bharati"]],
["Who is called the Father of the Nation?","Mahatma Gandhi",["Jawaharlal Nehru","Sardar Patel","Subhas Chandra Bose"]],
["Who was India's first Prime Minister?","Jawaharlal Nehru",["Sardar Patel","Rajendra Prasad","Lal Bahadur Shastri"]],
["Who was India's first President?","Dr. Rajendra Prasad",["Dr. S. Radhakrishnan","Zakir Husain","Dr. B.R. Ambedkar"]],
["On which date is Republic Day celebrated?","26 January",["15 August","2 October","14 November"]],
["Who chaired the Drafting Committee of the Constitution?","Dr. B.R. Ambedkar",["Jawaharlal Nehru","Rajendra Prasad","Sardar Patel"]],
["Chandrayaan-3 landed near which part of the Moon?","South pole",["North pole","Equator","Centre of the far side"]],
["The Taj Mahal is in which city?","Agra",["Delhi","Jaipur","Lucknow"]],
["Which state has the longest coastline in India?","Gujarat",["Tamil Nadu","Kerala","Maharashtra"]],
["Who was India's first woman Prime Minister?","Indira Gandhi",["Sarojini Naidu","Pratibha Patil","Sonia Gandhi"]],
["Who is known as the Missile Man of India?","Dr. A.P.J. Abdul Kalam",["Vikram Sarabhai","Homi Bhabha","C.V. Raman"]],
["Who won the 1930 Nobel Prize in Physics for the Raman effect?","C.V. Raman",["S.N. Bose","Homi Bhabha","S. Chandrasekhar"]],
["Which is the largest Indian state by area?","Rajasthan",["Madhya Pradesh","Maharashtra","Uttar Pradesh"]]]
};

var ICONS={
 flame:['M12 2c1 4-3 5-3 9a5 5 0 0010 0c0-2-1-3-2-4 0 2-1 3-2 3 1-4-1-6-3-8z',1],
 bolt:['M13 2L4 14h7l-1 8 9-12h-7z',1],
 star:['M12 2l3 7 7 .6-5.3 4.8L18.5 22 12 18l-6.5 4 1.8-7.6L2 9.6 9 9z',1],
 heart:['M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z',1],
 book:['M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 21h15',0],
 trophy:['M8 4h8v5a4 4 0 01-8 0zM8 6H4v1a3 3 0 003 3M16 6h4v1a3 3 0 01-3 3M12 13v4M8 21h8M12 17v4',0],
 plus:['M12 5v14M5 12h14',0],
 x:['M6 6l12 12M18 6L6 18',0],
 check:['M5 12l5 5 9-10',0],
 back:['M15 5l-7 7 7 7',0],
 home:['M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',0],
 vol:['M4 9v6h4l5 4V5L8 9zM16 9a4 4 0 010 6M18.5 6.5a8 8 0 010 11',0],
 mute:['M4 9v6h4l5 4V5L8 9zM17 9l4 6M21 9l-4 6',0]
};
function ic(n,s){s=s||22;var d=ICONS[n];return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="'+(d[1]?'currentColor':'none')+'" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+d[0]+'"/></svg>';}

var BADGES=[
 {id:'spark',n:'First Spark',d:'Answer your first question',i:'bolt',t:function(s){return s.answered>=1}},
 {id:'warm',n:'Warm Up',d:'Answer 10 questions',i:'book',t:function(s){return s.answered>=10}},
 {id:'fifty',n:'Fifty Club',d:'Answer 50 questions',i:'star',t:function(s){return s.answered>=50}},
 {id:'hundred',n:'Centurion',d:'Answer 100 questions',i:'trophy',t:function(s){return s.answered>=100}},
 {id:'s3',n:'On Fire',d:'Study 3 days in a row',i:'flame',t:function(s){return s.best>=3}},
 {id:'s7',n:'Unstoppable',d:'Study 7 days in a row',i:'flame',t:function(s){return s.best>=7}},
 {id:'flaw',n:'Flawless',d:'Finish a round with no mistakes',i:'heart',t:function(s){return s.perfect>=1}},
 {id:'l5',n:'Level 5',d:'Reach level 5',i:'trophy',t:function(s){return lvl(s.xp).n>=5}},
 {id:'maker',n:'Card Maker',d:'Create 5 of your own cards',i:'plus',t:function(s){return s.made>=5}},
 {id:'expl',n:'Explorer',d:'Study 3 different subjects',i:'book',t:function(s){return Object.keys(s.studied).length>=3}}
];

var OK_LINES=['Shabash!','Bahut badhiya!','Zabardast!','Kya baat hai!','Ekdum sahi!','Wah, champion!','Bilkul sahi!','Mast jawab!'];
var NO_LINES=['Koi baat nahi, seekhte raho!','Galti se hi toh seekhte hain!','Himmat mat haarna!','Next one is yours!','Almost there, try the next!'];
var DAILY=['Small steps every day beat big plans someday.','Aaj ka 1% sudhaar, kal ka bada badlaav.','Mistakes are proof that you are trying.','Topper banne ka secret: roz thoda sa padhna.','Jo mehnat karta hai, uski kismat bhi saath deti hai.','Curiosity is your superpower. Keep asking why.','Ek sawaal aur, phir ek aur. Chalte raho!'];
function pick(a){return a[Math.floor(Math.random()*a.length)]}

/* Sound effects: tiny synth, started from taps so phones allow it */
var AC=null;
function ac(){try{if(!AC){var C=window.AudioContext||window.webkitAudioContext;if(C)AC=new C()}if(AC&&AC.state==='suspended')AC.resume()}catch(e){}return AC}
function tone(f,t,d,type,v){var a=ac();if(!a||st.sound===false)return;try{var o=a.createOscillator(),g=a.createGain(),s=a.currentTime+(t||0);o.type=type||'sine';o.frequency.value=f;g.gain.setValueAtTime(0.0001,s);g.gain.exponentialRampToValueAtTime(v||0.2,s+0.015);g.gain.exponentialRampToValueAtTime(0.0001,s+d);o.connect(g);g.connect(a.destination);o.start(s);o.stop(s+d+0.03)}catch(e){}}
var sfx={
 tap:function(){tone(440,0,.07,'sine',.12)},
 ok:function(c){var m=1+0.06*Math.min(c||1,5);tone(523*m,0,.12,'triangle');tone(659*m,.09,.12,'triangle');tone(784*m,.18,.24,'triangle')},
 no:function(){tone(220,0,.16,'sawtooth',.1);tone(165,.14,.3,'sawtooth',.1)},
 win:function(){[523,659,784,659,784,1047].forEach(function(f,i){tone(f,i*.11,.2,'triangle',.18)})},
 level:function(){[392,523,659,784,1047,1319].forEach(function(f,i){tone(f,i*.09,.28,'square',.1)})}
};

function uid(){return Math.random().toString(36).slice(2,9)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function day(d){d=d||new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function yesterday(){var d=new Date();d.setDate(d.getDate()-1);return day(d)}
function seed(){return {v:2,cls:0,sound:true,prog:{},xp:0,streak:0,best:0,last:'',today:day(),todayN:0,answered:0,perfect:0,made:0,studied:{},badges:[],subjects:[]}}
var st;
try{st=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){st=null}
if(!st||!st.subjects)st=seed();
if(st.v!==2){st.v=2;st.subjects=[];st.prog={};st.sound=true;st.cls=0}
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
function lvl(xp){var n=Math.floor(Math.sqrt(xp/50))+1,a=50*(n-1)*(n-1),b=50*n*n;return {n:n,into:xp-a,span:b-a,left:b-xp}}
function rollDay(){var t=day();if(st.today!==t){st.today=t;st.todayN=0}}
function bumpStreak(){var t=day();if(st.last===t)return;st.streak=(st.last===yesterday())?st.streak+1:1;st.last=t;if(st.streak>st.best)st.best=st.streak}
function liveStreak(){return (st.last===day()||st.last===yesterday())?st.streak:0}
function mastery(s){if(!s.cards.length)return 0;var t=0;s.cards.forEach(function(c){t+=c.box});return Math.round(t/(4*s.cards.length)*100)}
function builtins(){
  if(!st.cls)return [];
  var early=String(st.cls)==='UKG'||['1','2','3','4','5'].indexOf(String(st.cls))>-1;
  var labels=early?{history:'People & Places',geo:'Around Us',sci:'Animals & Plants',math:'Maths',gk:'Everyday GK'}:null;
  return SUBJ.map(function(s){
    var rows=early?EARLY[String(st.cls)][s.k]:(s.k==='gk'?BANK.gk:BANK[s.k][st.cls]);
    return {id:'b:'+s.k+':'+st.cls,name:labels?labels[s.k]:s.n,color:s.c,builtin:true,cards:rows.map(function(r,i){
      var pk='b:'+s.k+':'+st.cls+':'+i;
      return {id:'q'+i,pk:pk,q:r[0],a:r[1],d:r[2],box:st.prog[pk]||0}})}});
}
function find(id){var l=st.subjects.filter(function(s){return s.id===id})[0];if(l)return l;return builtins().filter(function(s){return s.id===id})[0]}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}

var ui={tab:'home',screen:null,confirm:null,color:COLORS[0]};
var S=null;
var app=document.getElementById('app');

function navHtml(){return '<nav class="nav"><div><button data-a="tab" data-v="home" class="'+(ui.tab==='home'?'on':'')+'">'+ic('home')+'Learn</button><button data-a="tab" data-v="badges" class="'+(ui.tab==='badges'?'on':'')+'">'+ic('trophy')+'Badges</button></div></nav>'}
function sndBtn(){return '<button class="chip" data-a="snd" aria-label="Sound '+(st.sound===false?'off':'on')+'">'+ic(st.sound===false?'mute':'vol',18)+'</button>'}
function greeting(){var h=new Date().getHours();return h<12?'Good morning':h<17?'Good afternoon':'Good evening'}

function tileHtml(s){var m=mastery(s);return '<button class="tile" style="--c:'+s.color+'" data-a="open" data-v="'+s.id+'"><div><h3>'+esc(s.name)+'</h3><div class="small">'+s.cards.length+' questions</div></div><div><div class="small" style="margin-bottom:6px">'+m+'% mastered</div><div class="bar"><i style="width:'+m+'%"></i></div></div></button>'}

function home(){
  rollDay();var L=lvl(st.xp),goal=10,p=Math.min(100,Math.round(st.todayN/goal*100));
  var dq=DAILY[new Date().getDate()%DAILY.length];
  var mine=st.subjects.map(tileHtml).join('');
  return '<div class="top"><div class="brand">Study<span>Quest</span></div><div class="r">'+sndBtn()+'<div class="chip fire">'+ic('flame',18)+liveStreak()+'</div></div></div>'+
  '<div class="card motive"><div class="eyebrow">'+greeting()+', champ</div><h3>'+esc(dq)+'</h3></div>'+
  '<div class="card lvl"><div class="lvl-row"><div><div class="eyebrow">Your level</div><h2>Level '+L.n+'</h2></div><div class="chip">'+ic('bolt',16)+st.xp+' XP</div></div><div class="bar"><i style="width:'+Math.round(L.into/L.span*100)+'%"></i></div><div class="small">'+L.left+' XP to level '+(L.n+1)+'</div></div>'+
  '<div class="card goal"><div class="goal-row"><div class="eyebrow">Daily goal</div><b>'+Math.min(st.todayN,goal)+' / '+goal+' questions</b></div><div class="bar g"><i style="width:'+p+'%"></i></div><div class="small">'+(st.todayN>=goal?'Goal done! Keep going for bonus XP.':'Answer '+(goal-st.todayN)+' more to keep your streak alive.')+'</div></div>'+
  '<div class="sec"><div class="sec-h"><div class="eyebrow">Class '+st.cls+' subjects</div><button class="link" data-a="class">Change class</button></div><div class="grid">'+builtins().map(tileHtml).join('')+'</div></div>'+
  '<div class="sec"><div class="eyebrow">My own decks</div><div class="grid">'+mine+'<button class="tile new" data-a="newsub">'+ic('plus',28)+'<span>New deck</span></button></div></div>'+
  '<button class="btn alt small-btn" data-a="support">Contact support</button><div id="ad-slot" class="ad-slot"></div>'+navHtml();
}

function classPick(){
  var classes=['UKG',1,2,3,4,5,6,7,8,9,10];
  var t=classes.map(function(n,i){var c=COLORS[i%COLORS.length],desc=String(n)==='UKG'?'Letters, numbers, colours & everyday things':(['1','2','3','4','5'].indexOf(String(n))>-1?'Simple, age-appropriate primary questions':'NCERT-style History, Geography, Science, Maths & GK');return '<button class="tile cls" style="--c:'+c+'" data-a="setcls" data-v="'+n+'"><h3>'+(String(n)==='UKG'?'UKG':'Class '+n)+'</h3><div class="small">'+desc+'</div></button>'}).join('');
  return (st.cls?'<button class="back" data-a="home">'+ic('back',20)+'Back</button>':'<div class="brand">Study<span>Quest</span></div>')+
  '<div class="sec"><h1 style="font-size:32px;font-weight:800">Which class are you in?</h1><div class="small">Choose your class. Switching classes resets XP, levels, streaks, badges and subject mastery.</div></div><div class="grid">'+t+'</div>';
}

function badgesView(){
  var h=BADGES.map(function(b){var on=st.badges.indexOf(b.id)>-1;return '<div class="card bdg '+(on?'on':'off')+'"><div class="ic">'+ic(b.i,26)+'</div><b>'+b.n+'</b><p>'+b.d+'</p></div>'}).join('');
  var rc=ui.confirm==='reset';
  return '<div class="top"><div class="brand">Badges</div><div class="chip">'+st.badges.length+' / '+BADGES.length+'</div></div><div class="badges">'+h+'</div>'+
  '<button class="btn alt small-btn" data-a="reset">'+(rc?'Tap again to erase all progress':'Reset progress')+'</button>'+navHtml();
}

function subjectView(s){
  var m=mastery(s),n=s.cards.length;
  var head='<button class="back" data-a="home">'+ic('back',20)+'Subjects</button><div class="hd" style="--c:'+s.color+'"><span class="dot"></span><h1>'+esc(s.name)+(s.builtin?' · Class '+st.cls:'')+'</h1></div>'+
  '<div class="stats"><div class="stat"><span class="small">Questions</span><b>'+n+'</b></div><div class="stat"><span class="small">Mastered</span><b>'+m+'%</b></div></div>'+
  '<div class="row"><button class="btn" data-a="quiz" data-v="'+s.id+'" '+(n<1?'disabled':'')+'>Play quiz</button><button class="btn alt" data-a="flip" data-v="'+s.id+'" '+(n<1?'disabled':'')+'>Flashcards</button></div>';
  if(s.builtin)return head+'<div class="note">Each round picks up to 10 questions. The ones you miss come back more often until you master them.</div>'+navHtml();
  var list=s.cards.map(function(c){var pips='';for(var i=0;i<4;i++)pips+='<i class="'+(i<c.box?'on':'')+'"></i>';return '<div class="li"><div><b>'+esc(c.q)+'</b><small>'+esc(c.a)+'</small><div class="pips">'+pips+'</div></div><button class="x" data-a="delcard" data-v="'+c.id+'" aria-label="Delete card">'+ic('x',18)+'</button></div>'}).join('');
  var dc=ui.confirm==='sub'+s.id;
  return head+
  (n<4?'<div class="note">Add at least 4 cards with different answers to unlock multiple choice quizzes. Flashcards work with any number.</div>':'')+
  '<div class="card" style="display:flex;flex-direction:column;gap:12px"><div class="eyebrow">Add a card</div><div class="field"><label for="nq">Question</label><input id="nq" placeholder="e.g. Capital of Japan" autocomplete="off"></div><div class="field"><label for="na">Answer</label><input id="na" placeholder="e.g. Tokyo" autocomplete="off"></div><button class="btn small-btn" data-a="addcard" data-v="'+s.id+'">Add card</button></div>'+
  '<div class="card" style="display:flex;flex-direction:column;gap:12px"><div class="eyebrow">Paste many at once</div><div class="small">One per line, like: question :: answer</div><textarea id="bulk" placeholder="Capital of France :: Paris&#10;Largest planet :: Jupiter"></textarea><button class="btn alt small-btn" data-a="bulk" data-v="'+s.id+'">Import cards</button></div>'+
  (n?'<div class="sec"><div class="eyebrow">Your cards</div><div class="list">'+list+'</div></div>':'')+
  '<button class="btn alt small-btn" data-a="delsub" data-v="'+s.id+'">'+(dc?'Tap again to delete deck':'Delete deck')+'</button>'+navHtml();
}

function supportView(){
  return '<button class="back" data-a="home">'+ic('back',20)+'Back to dashboard</button><div class="brand">Study<span>Quest</span> Support</div>'+ 
  '<div class="card"><h2>How can we help?</h2><p class="small">Send a message directly to the StudyQuest developer. A contact email is required so we can reply; it can be any valid email address, not only Gmail.</p></div>'+ 
  '<form id="support-form" class="card form-stack"><div class="field"><label for="support-name">Your name</label><input id="support-name" name="name" maxlength="80" autocomplete="name" required placeholder="Name"></div>'+ 
  '<div class="field"><label for="support-email">Your contact email *</label><input id="support-email" name="email" type="email" maxlength="254" autocomplete="email" required placeholder="you@example.com"></div>'+ 
  '<div class="field"><label for="support-topic">Topic</label><select id="support-topic" name="topic" required><option value="Bug report">Bug report</option><option value="Question">Question</option><option value="Account or progress">Account or progress</option><option value="Suggestion">Suggestion</option><option value="Other">Other</option></select></div>'+ 
  '<div class="field"><label for="support-message">Message *</label><textarea id="support-message" name="message" minlength="10" maxlength="4000" required placeholder="Describe the issue or suggestion…"></textarea></div>'+ 
  '<input type="text" name="_honey" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true">'+ 
  '<button class="btn" type="submit" id="support-send">Send support request</button><div id="support-status" class="support-meta" role="status" aria-live="polite"></div>'+ 
  '<div class="support-meta">Your message and contact email will be sent to the developer’s support inbox. Don’t include passwords or other sensitive information.</div></form>'+navHtml();
}
function resetClassProgress(newClass){
  /* Preserve user-created decks and sound preference, but reset all game progression. */
  var keptSubjects=st.subjects||[],sound=st.sound;
  keptSubjects.forEach(function(sub){(sub.cards||[]).forEach(function(card){card.box=0})});
  st={v:2,cls:newClass,sound:sound!==false,prog:{},xp:0,streak:0,best:0,last:'',today:day(),todayN:0,answered:0,perfect:0,made:0,studied:{},badges:[],subjects:keptSubjects};
  save();S=null;ui.tab='home';ui.screen=null;ui.confirm=null;
}
function newSub(){
  var sw=COLORS.map(function(c){return '<button class="sw '+(ui.color===c?'on':'')+'" style="--c:'+c+'" data-a="color" data-v="'+c+'" aria-label="Pick colour"></button>'}).join('');
  return '<button class="back" data-a="home">'+ic('back',20)+'Back</button><h1 style="font-size:32px;font-weight:800">New deck</h1>'+
  '<div class="field"><label for="sn">Name</label><input id="sn" placeholder="e.g. Hindi grammar, Sanskrit shlokas" maxlength="28" autocomplete="off"></div>'+
  '<div class="field"><label>Colour</label><div class="swatches">'+sw+'</div></div><button class="btn" data-a="mksub">Create deck</button>'+navHtml();
}

function startRound(id,mode){
  var s=find(id);if(!s||!s.cards.length)return;
  var cards=shuffle(s.cards).sort(function(a,b){return a.box-b.box}).slice(0,10);cards=shuffle(cards);
  var answers={};s.cards.forEach(function(c){answers[c.a]=1});
  if(mode==='quiz'&&!s.builtin&&Object.keys(answers).length<4)mode='flip';
  S={sid:id,mode:mode,cards:cards,i:0,lives:3,combo:0,gain:0,right:0,done:0,locked:false,picked:-1,opts:[],flipped:false,msg:'',L0:lvl(st.xp).n};
  st.studied[id]=1;
  sfx.tap();prep();ui.screen='play';render();
}
function prep(){
  var c=S.cards[S.i],s=find(S.sid);S.flipped=false;S.locked=false;S.picked=-1;
  if(S.mode==='quiz'){
    if(c.d){S.opts=shuffle(c.d.concat([c.a]))}
    else{var pool=[];s.cards.forEach(function(x){if(x.a!==c.a&&pool.indexOf(x.a)<0)pool.push(x.a)});S.opts=shuffle(shuffle(pool).slice(0,3).concat([c.a]))}
  }
}
function reward(card,ok,xp){
  rollDay();card.box=ok?Math.min(4,card.box+1):Math.max(0,card.box-1);
  if(card.pk)st.prog[card.pk]=card.box;
  st.answered++;st.todayN++;bumpStreak();
  if(ok){st.xp+=xp;S.gain+=xp;S.right++}
  S.done++;
}
function play(){
  var s=find(S.sid),c=S.cards[S.i],pct=Math.round(S.i/S.cards.length*100),h='';
  for(var i=0;i<3;i++)h+='<span class="'+(i<S.lives?'':'lost')+'">'+ic('heart',22)+'</span>';
  var top='<div class="ptop"><button class="x" data-a="quit" aria-label="Quit round">'+ic('x',22)+'</button><div class="bar g"><i style="width:'+pct+'%"></i></div><button class="x" data-a="snd" aria-label="Toggle sound">'+ic(st.sound===false?'mute':'vol',20)+'</button><div class="hearts">'+h+'</div></div>';
  var label=esc(s.name)+(s.builtin?' · Class '+st.cls:'')+' · '+(S.i+1)+' of '+S.cards.length;
  if(S.mode==='quiz'){
    var ok=S.locked&&S.opts[S.picked]===c.a;
    var o=S.opts.map(function(t,i){var cl='opt';if(S.locked){if(t===c.a)cl+=' right';else if(i===S.picked)cl+=' wrong';else cl+=' dim'}return '<button class="'+cl+'" data-a="pick" data-v="'+i+'"><span class="k">'+'ABCD'[i]+'</span><span>'+esc(t)+'</span></button>'}).join('');
    var sheet='';
    if(S.locked){sheet='<div class="sheet '+(ok?'ok':'no')+'"><div><h3>'+ic(ok?'check':'x',26)+esc(S.msg)+'</h3><div class="sub">'+(ok?'Correct! +'+S.lastXp+' XP'+(S.combo>1?' · '+S.combo+' in a row':''):'The answer is <b>'+esc(c.a)+'</b>')+'</div><button class="btn '+(ok?'good':'bad')+'" data-a="next">Continue</button></div></div>'}
    return '<div class="play">'+top+'<div class="eyebrow">'+label+'</div><div class="q'+(S.locked?(ok?' pop':' shake'):'')+'"><h2>'+esc(c.q)+'</h2></div><div class="opts">'+o+'</div></div>'+sheet;
  }
  var f='<div class="flip '+(S.flipped?'on':'')+'" style="--c:'+s.color+'" data-a="flipcard"><div class="in"><div class="face"><div class="eyebrow">Question</div><h2>'+esc(c.q)+'</h2><div class="small">Tap to reveal</div></div><div class="face back"><div class="eyebrow">Answer</div><h2>'+esc(c.a)+'</h2></div></div></div>';
  return '<div class="play">'+top+'<div class="eyebrow">'+label+'</div>'+f+
  (S.flipped?'<div class="row"><button class="btn bad" data-a="grade" data-v="0">Again</button><button class="btn good" data-a="grade" data-v="1">Got it</button></div>':'<div class="small" style="text-align:center">Think of the answer, then flip the card.</div>')+'</div>';
}
function starCount(){var acc=S.done?S.right/S.done:0;return acc>=.9?3:acc>=.6?2:S.right>0?1:0}
function finish(){
  var lv=lvl(st.xp).n;
  if(S.done>=5&&S.right===S.done)st.perfect++;
  var got=[];BADGES.forEach(function(b){if(st.badges.indexOf(b.id)<0&&b.t(st)){st.badges.push(b.id);got.push(b)}});
  S.newBadges=got;S.lvUp=lv>S.L0?lv:0;save();
  if(S.lvUp||got.length)sfx.level();else if(starCount()>=2)sfx.win();else sfx.tap();
  ui.screen='result';render();
}
function result(){
  var n=starCount(),stars='';
  for(var i=0;i<3;i++)stars+='<span class="'+(i<n?'on':'')+'">'+ic('star',48)+'</span>';
  var title=S.lives<=0?'Out of hearts':n===3?'Brilliant!':n===2?'Nice work':'Keep going';
  var line=n===3?'Topper! Aaj toh kamaal kar diya!':n===2?'Great effort! One more round and you will master it.':n===1?'Every champion started here. Practice karte raho!':'Don\'t give up. Himmat rakho and try again!';
  var tags=S.newBadges.map(function(b){return '<span class="tag">'+ic(b.i,16)+b.n+'</span>'}).join('');
  return '<div class="res"><div class="stars">'+stars+'</div><h1>'+title+'</h1><div class="line">'+line+'</div><div><div class="big">+'+S.gain+'</div><div class="small">XP earned</div></div>'+
  '<div class="stats" style="width:100%"><div class="stat"><span class="small">Correct</span><b>'+S.right+' / '+S.done+'</b></div><div class="stat"><span class="small">Streak</span><b>'+liveStreak()+' days</b></div></div>'+
  (S.lvUp?'<div class="tag">Level up! You are now level '+S.lvUp+'</div>':'')+(tags?'<div class="toastrow">'+tags+'</div>':'')+
  '<div style="width:100%;display:flex;flex-direction:column;gap:14px"><button class="btn" data-a="again">Play again</button><button class="btn alt" data-a="home">Done</button></div></div>';
}

function render(){
  var h;
  if(ui.screen==='play')h=play();
  else if(ui.screen==='result')h=result();
  else if(ui.screen==='newsub')h=newSub();
  else if(ui.screen==='support')h=supportView();
  else if(!st.cls||ui.screen==='class')h=classPick();
  else if(ui.screen&&ui.screen.indexOf('sub:')===0){var s=find(ui.screen.slice(4));h=s?subjectView(s):home()}
  else h=ui.tab==='badges'?badgesView():home();
  app.innerHTML=h;window.scrollTo(0,0);
}
function buzz(n){try{if(navigator.vibrate)navigator.vibrate(n)}catch(e){}}
function go(scr){ui.screen=scr;ui.confirm=null;render()}
function checkBadges(){var got=[];BADGES.forEach(function(b){if(st.badges.indexOf(b.id)<0&&b.t(st)){st.badges.push(b.id);got.push(b)}});return got}

app.addEventListener('click',function(e){
  var el=e.target.closest('[data-a]');if(!el)return;
  var a=el.getAttribute('data-a'),v=el.getAttribute('data-v');
  ac();
  if(a==='tab'){sfx.tap();ui.tab=v;ui.screen=null;ui.confirm=null;render()}
  else if(a==='snd'){st.sound=(st.sound===false);save();sfx.tap();render()}
  else if(a==='home'){sfx.tap();S=null;go(null)}
  else if(a==='class'){sfx.tap();go('class')}
  else if(a==='setcls'){var nextClass=v==='UKG'?'UKG':parseInt(v,10);if(String(st.cls)===String(nextClass)){ui.tab='home';go(null)}else if(st.cls&&ui.confirm!=='class:'+nextClass){ui.confirm='class:'+nextClass;var ok=window.confirm('Switching class will reset XP, levels, streaks, badges, daily progress and mastery for all subjects. Your custom decks and their cards will stay, but their mastery will reset. Continue?');if(ok){resetClassProgress(nextClass);sfx.ok(1);render()}else{ui.confirm=null;render()}}else{resetClassProgress(nextClass);sfx.ok(1);render()}}
  else if(a==='support'){sfx.tap();go('support')}
  else if(a==='open'){sfx.tap();go('sub:'+v)}
  else if(a==='newsub'){sfx.tap();go('newsub')}
  else if(a==='color'){ui.color=v;var t=document.getElementById('sn'),val=t?t.value:'';render();var t2=document.getElementById('sn');if(t2)t2.value=val}
  else if(a==='mksub'){
    var nm=document.getElementById('sn').value.trim();if(!nm){document.getElementById('sn').focus();return}
    var sub={id:uid(),name:nm,color:ui.color,cards:[]};st.subjects.push(sub);save();go('sub:'+sub.id)}
  else if(a==='addcard'){
    var q=document.getElementById('nq'),an=document.getElementById('na');
    if(!q.value.trim()){q.focus();return}if(!an.value.trim()){an.focus();return}
    find(v).cards.push({id:uid(),q:q.value.trim(),a:an.value.trim(),box:0});st.made++;
    checkBadges();save();sfx.ok(1);render();document.getElementById('nq').focus()}
  else if(a==='bulk'){
    var ta=document.getElementById('bulk'),cnt=0,sub2=find(v);
    ta.value.split('\n').forEach(function(line){var p=line.split('::');if(p.length<2)p=line.split('\t');if(p.length>=2&&p[0].trim()&&p[1].trim()){sub2.cards.push({id:uid(),q:p[0].trim(),a:p.slice(1).join('::').trim(),box:0});cnt++}});
    st.made+=cnt;checkBadges();save();if(cnt)sfx.ok(1);render()}
  else if(a==='delcard'){var sb=find(ui.screen.slice(4));sb.cards=sb.cards.filter(function(c){return c.id!==v});save();render()}
  else if(a==='delsub'){
    if(ui.confirm==='sub'+v){st.subjects=st.subjects.filter(function(s){return s.id!==v});save();go(null)}else{ui.confirm='sub'+v;render()}}
  else if(a==='reset'){
    if(ui.confirm==='reset'){var c0=st.cls,s0=st.sound;st=seed();st.cls=c0;st.sound=s0;save();ui.confirm=null;ui.tab='home';render()}else{ui.confirm='reset';render()}}
  else if(a==='quiz')startRound(v,'quiz');
  else if(a==='flip')startRound(v,'flip');
  else if(a==='again')startRound(S.sid,S.mode);
  else if(a==='quit'){if(S.done>0)finish();else{S=null;go(null)}}
  else if(a==='pick'){
    if(S.locked)return;var c=S.cards[S.i];S.picked=+v;S.locked=true;var ok=S.opts[S.picked]===c.a;
    if(ok){S.combo++;S.lastXp=10+2*Math.min(S.combo,5);reward(c,true,S.lastXp);buzz(15);sfx.ok(S.combo);
      S.msg=S.combo>=5?'Unstoppable! Topper material!':S.combo===3?'Teen mein teen! You are on fire!':pick(OK_LINES)}
    else{S.combo=0;S.lives--;reward(c,false,0);buzz([30,40,30]);sfx.no();S.msg=pick(NO_LINES)}
    save();render()}
  else if(a==='next'){
    sfx.tap();if(S.lives<=0||S.i>=S.cards.length-1)finish();else{S.i++;prep();render()}}
  else if(a==='flipcard'){sfx.tap();S.flipped=!S.flipped;el.classList.toggle('on',S.flipped);if(S.flipped&&!document.querySelector('[data-a=grade]'))showGrade()}
  else if(a==='grade'){
    var cc=S.cards[S.i],good=v==='1';if(good){S.combo++;sfx.ok(S.combo)}else{S.combo=0;S.lives--;sfx.no()}
    reward(cc,good,6);save();
    if(S.lives<=0||S.i>=S.cards.length-1)finish();else{S.i++;prep();render()}}
});
function showGrade(){
  /* keep the flipped card in place while adding the grade buttons */
  var tmp=document.createElement('div');tmp.innerHTML=play();
  var btns=tmp.querySelector('.row');var note=document.querySelector('.play>.small');
  if(note&&btns)note.replaceWith(btns);
}
app.addEventListener('submit',async function(e){
  if(e.target.id!=='support-form')return;
  e.preventDefault();var form=e.target,button=document.getElementById('support-send'),status=document.getElementById('support-status');
  var name=document.getElementById('support-name').value.trim(),email=document.getElementById('support-email').value.trim(),topic=document.getElementById('support-topic').value,message=document.getElementById('support-message').value.trim();
  if(!email||!message||message.length<10){status.textContent='Please add a valid contact email and a message of at least 10 characters.';return}
  if(form.querySelector('[name="_honey"]').value)return;
  button.disabled=true;button.textContent='Sending…';status.textContent='Sending support request…';
  try{
    var response=await fetch('https://formsubmit.co/ajax/ardasgamer4040@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'StudyQuest support: '+topic,name:name||'StudyQuest user',email:email,topic:topic,message:message,_template:'table',_captcha:'true'})});
    var result=await response.json();
    if(!response.ok||String(result.success).toLowerCase()==='false')throw new Error(result.message||'The support service rejected the request.');
    status.textContent='Request sent. If this is the first message, the support inbox owner may need to confirm FormSubmit activation before messages arrive.';form.reset();
  }catch(err){status.textContent='Could not send right now. Check your internet connection and try again. If this is the first submission, the email service may still need activation.'}
  finally{button.disabled=false;button.textContent='Send support request'}
});

/* Native AdMob: use Google's official test banner ID until real ad-unit IDs are configured. */
var adStarted=false;
async function showStudyQuestAd(){
  if(adStarted||!window.Capacitor||!window.Capacitor.isNativePlatform||!window.Capacitor.isNativePlatform())return;
  var plugin=window.StudyQuestAdMob;
  if(!plugin||!plugin.initialize||!plugin.showBanner)return;
  try{await plugin.initialize();await plugin.showBanner({adId:'ca-app-pub-3940256099942544/6300978111',adSize:'ADAPTIVE_BANNER',position:'TOP_CENTER',margin:0,isTesting:true,npa:true});document.body.classList.add('has-admob-banner');adStarted=true}catch(err){console.warn('StudyQuest test ad did not load:',err)}
}
render();document.addEventListener('studyquest-admob-ready',function(){setTimeout(showStudyQuestAd,700)});setTimeout(showStudyQuestAd,1500);
})();
