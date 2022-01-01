// this is the data of all the foods that you should eat to improve the power of your brain
// In the foodItemScreen i have imported this FoodData array and created a FlatList where i ll display a card for each and every element with its title,Image and Paragraph

const FoodData = [
  {
    key: 1,
    Title: "Spinach",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTkP4PnqVnoBAkkjfQ9LuvfAUqFrY60pK9Lf__YtkcnoKFUo7DkC9CtHhQcx-rYQ-yys&usqp=CAU",
    Para: "Dark or leafy greens contain high levels of folate and vitamin B12, which may protect the brain against dementia. Researchers from Tufts and Boston universities observed subjects in the famous Framingham Heart Study and found those with high levels of homocysteine had nearly double the risk of developing Alzheimer's disease. High homocysteine is associated with low levels of folate and vitamins B6 and B12, leading researchers to speculate that getting more B vitamins may be protective and thus presents the perfect example of ' brain food.' Bonus: spinach is one of the foods that will keep you young forever.",
  },
  {
    key: 2,
    Title: "Raisins",
    Image: "https://thumbs.dreamstime.com/b/raisins-18150903.jpg",
    Para: "These dried fruits are loaded with the element boron. USDA researchers found that subjects taking in at least 3.2 milligrams of boron a day performed 10 percent better on attention and memory tests. (Apples and nuts pack the stuff, too.) Eating more raisins is also a great way to keep your blood pressure down.",
  },

  {
    key: 4,
    Title: "Blueberries",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Y2EKgADi2lEIeUGeLtQYhtm1RpiCqxh_hQ&usqp=CAU",
    Para: "Dark-colored fruits and vegetables, especially blueberries, strawberries, and spinach, are high in antioxidants. Antioxidants, in turn, provide some of the best brain food. In research on rats at the USDA Human Nutrition Research Center on Aging at Tufts University, James Joseph, Ph.D., found that older rats fed blueberry extract had improved short-term memory and motor skills. And, for the record, if you're over 45, you definitely need more blueberries in your diet.",
  },
  {
    key: 5,
    Title: "Almonds",
    Image:
      "https://media.istockphoto.com/photos/almonds-picture-id153761231?b=1&k=20&m=153761231&s=170667a&w=0&h=LaLKzFn2POk89lNQprayNqiw03Biw5A2gIF-XN-JFyk=",
    Para: "These nuts are rich in vitamin E. A National Institutes of Health study found that the antioxidative properties of vitamin E reduce deterioration in the brain as you age. Just 2 ounces of almonds contain your recommended daily intake of E.",
  },
  {
    key: 6,
    Title: "Fish",
    Image:
      "https://media.istockphoto.com/photos/closeup-of-fresh-sea-bream-against-white-background-picture-id165637260?b=1&k=20&m=165637260&s=170667a&w=0&h=cpOCxf1bQA_4GfDcAqImRJGZDXxc1ERrANqCjP-6jHA=",
    Para: "The best types are cold-water fish such as salmon, halibut, tuna, and mackerel. They contain more omega-3 fatty acids, which play an important role in brain function. These fish get their omega-3s by eating algae, other fish, and particular plankton that lives in cold water. Research published in the Integrative Medicine Research journal has also found that omega-3 fatty acids contained in certain oily fish can decrease the symptoms of depression, and therefore, provide an excellent source of brain food.",
  },
  {
    key: 7,
    Title: "Eggs",
    Image:
      "https://media.istockphoto.com/photos/brown-eggs-in-a-plate-picture-id1157804675?b=1&k=20&m=1157804675&s=170667a&w=0&h=3MdUyZm7mls4ai2SisvrnJa3zpYwU1wQmsjyTdH-YXY=",
    Para: "They are one of the richest sources of choline, a nutrient that may improve memory. Research published in the American Journal of Clinical Nutrition shows that college students who received 3 or 4 grams of choline 1 hour before taking memory tests scored higher than those who didn't take choline.",
  },

  {
    key: 8,
    Title: "Coffee",
    Image:
      "https://media.istockphoto.com/photos/herbal-tea-and-espresso-coffee-picture-id1262209851?b=1&k=20&m=1262209851&s=170667a&w=0&h=KshtCZ59qyjLZkygHwE7-_uko8X7Zu-GkjYRaoS7tbw=",
    Para: "In one study, British researchers found that consuming the caffeine equivalent of 1 cup of coffee improved attention and problem-solving skills.",
  },

  {
    key: 9,
    Title: "Oatmeal",
    Image:
      "https://media.istockphoto.com/photos/oatmeal-picture-id1313978728?b=1&k=20&m=1313978728&s=170667a&w=0&h=YYoMPfLtqhhsyIE_lIUGoAx-rjW9p9o4drA1cpzBJvk=",
    Para: "University of Toronto researchers recently determined that eating carbohydrate-rich foods like oatmeal is equivalent to a shot of glucose, a.k.a. blood sugar, injected into your brain. According to the study, the higher the concentration of glucose in your blood, the better your memory and concentration.",
  },

  {
    key: 10,
    Title: "Walnuts",
    Image:
      "https://media.istockphoto.com/photos/wallnuts-picture-id172699819?b=1&k=20&m=172699819&s=170667a&w=0&h=lKSakJ1mllhXxYTJSMAGMZRKlhd8Nzd9EeIq6AAVfCk=",
    Para: "Walnuts are known for their brain-boosting powers, and countless studies back up their benefits. One, in particular, published in the Journal of Nutrition, found they're especially good at maintaining brain health as you age thanks to a handful of different nutrients, from omega-3 fatty acids to fiber and vitamin E. In short: an amazing brain food.",
  },
  {
    key: 11,
    Title: "Broccoli",
    Image:
      "https://media.istockphoto.com/photos/woman-cutting-fresh-broccoli-picture-id1249204811?b=1&k=20&m=1249204811&s=170667a&w=0&h=U5dkilBqJMFl0dvjyCyutKW7J3jvnk-a5C1pPsLq1XU=",
    Para: "You might have hated broccoli as a kid, but learning to love it as an adult will do your brain some good. The green veggie—which still looks like mini trees no matter how old you are—contains lutein, a plant pigment that a 2016 study says is linked to 'crystallized intelligence.' And that's just as cool as it sounds: It basically allows older adults to continue to use the skills and knowledge they picked up throughout their life.",
  },
  {
    key: 12,
    Title: "Avocados",
    Image:
      "https://media.istockphoto.com/photos/avocado-on-old-wooden-table-in-bowl-picture-id1210634323?b=1&k=20&m=1210634323&s=170667a&w=0&h=O5oOh2SAoChz2TXOvjf3b-3mCjTTc9woYPtSO_Z1fBE=",
    Para: "Guacamole isn't just delicious—it's also jam-packed with monounsaturated fats, fiber, and lutein that can better cognitive health, says a 2017 study. According to the study authors, participants who ate one fresh avocado every day saw a significant improvement in their memory and problem-solving skills. And who's going to say no to an avocado a day?",
  },
  {
    key: 13,
    Title: "Dark chocolate",
    Image:
      "https://media.istockphoto.com/photos/chocolate-dark-bitter-chocolate-chunks-chocolate-background-picture-id1031570676?b=1&k=20&m=1031570676&s=170667a&w=0&h=MC9BuHBvmRxYShxjOsS4Qdq5evOuwlTsJrNyLoO9Voo=",
    Para: "Yes, it's the excuse to eat chocolate you've been waiting for. If you munch on the dark varieties, a 2013 study found you'll be taking in flavonoids that help preserve your brain power, lowing your risk of developing conditions like Alzheimer's.",
  },
  {
    key: 14,
    Title: "Lentils",
    Image:
      "https://media.istockphoto.com/photos/green-lentils-with-a-spoon-picture-id519309594?b=1&k=20&m=519309594&s=170667a&w=0&h=ljGaTPQgVHmAbkmeRuDdsZ4iwjtL6baO10C5nMaVaPE=",
    Para: "You might have hated broccoli as a kid, but learning to love it as an adult will do your brain some good. The green veggie—which still looks like mini trees no matter how old you are—contains lutein, a plant pigment that a 2016 study says is linked to 'crystallized intelligence.' And that's just as cool as it sounds: It basically allows older adults to continue to use the skills and knowledge they picked up throughout their life.",
  },
  {
    key: 15,
    Title: "Tomatoes",
    Image:
      "https://media.istockphoto.com/photos/tomatoes-isolate-on-white-background-tomato-half-isolated-tomatoes-picture-id1258142863?b=1&k=20&m=1258142863&s=170667a&w=0&h=iFVeHatKRUPjoAd2YR1Lgjv_74tZ-gTBbT3cOqFy0BI=",

    Para: "Evidence suggested that the antioxidant found in tomatoes- lycopene, protects against free-radical damage to cells that occur during Dementia and Alzheimer’s. In addition, lycopene also regulates genes that influence inflammation and brain growth.The best way to help your body absorb the nutrients from tomatoes is to cook them down – it concentrates the lycopenes – and always leave the skin on!",
  },
  {
    key: 16,
    Title: "Black currants",
    Image:
      "https://media.istockphoto.com/photos/blackcurrant-picture-id452270669?b=1&k=20&m=452270669&s=170667a&w=0&h=Mt1LwddVpvbPr5YNNJBmFvzKcXmac8fhOSS8uDX7JMM=",
    Para: "Black currants are a great source of vitamin C, which helps with managing stress and anxiety. Studies conducted by Northumbria University, UK also showed that blackcurrant juice improved attention and mood and reduced mental fatigue.",
  },
];

export default FoodData;
