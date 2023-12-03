// diet.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './diet.css';

const dietPlans = [
  {
    id: 1,
    imageUrl: 'https://www.verywellfit.com/thmb/hV6nLA5suhsBkNqkhUOwFxUHT7Y=/305x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fcafotodigitalplantfoods-7d0ee3cee48a458ba7f0d89fd003a7fe.jpg',
    header: '5-Day Blood Sugar-Balancing Meal Plan',
    info: 'This 5-day meal plan was designed for a person who needs about 1,700-1800 calories per day. It contains a mix of carbohydrates, healthy fats, and lean protein options. In this plan, there are 45 to 65 grams of complex carbohydrates in each meal and 15 to 20 grams of carbohydrates in each snack. This may or may not be the right level for your personal blood sugar needs. Check with a registered dietitian or another healthcare provider to know for sure.',
  },
  {
    id: 2,
    imageUrl: 'https://fitrofy.com/wp-content/uploads/2023/09/Best-Indian-Diet-Plan-for-Weight-Loss.jpg',
    header: 'Best Indian Diet Plan for Weight Loss',
    info: `To lose weight effectively, you should maintain a calorie deficit while ensuring your diet is balanced and provides all the necessary nutrients for good health.\n\nThe Best Diet Plan for Weight Loss\n\nA balanced diet consists of macronutrients like carbohydrates, protein, and fat, along with micronutrients such as vitamins and minerals. The best Indian diet for weight loss combines all these elements.\n\nHere’s a sample 1200 Calorie Weight Loss Diet Plan for both men and women.\n\nDay 1\n– Breakfast: Cucumber Detox Water, Oats Porridge, Mixed Nuts\n– Lunch: Roti with Dal, Gajar Matar Sabzi\n– Dinner: Dal, Lauki Sabzi, Roti\n\nDay 2\n– Breakfast: Cucumber Detox Water, Curd, Mixed Vegetable Stuffed Roti\n– Lunch: Methi Rice, Lentil Curry\n– Dinner: Sauteed Vegetables with Paneer, Roti\n\nDay 3\n– Breakfast: Cucumber Detox Water, Skim Milk Yogurt, Multigrain Toast\n– Lunch: Sauteed Vegetables with Paneer, Roti\n– Dinner: Lentil Curry, Methi Rice\n\nBalanced Diet for Weight Loss\n\nA balanced diet plan should include carbohydrates, proteins, fats, vitamins, and minerals. Carbohydrates should be from complex sources like brown rice, oats, and millets. Protein should come from pulses, paneer, milk, eggs, lean meat, or sprouts. Healthy fats include polyunsaturated, monounsaturated, and Omega-3 fatty acids from sources like olive oil, rice bran oil, and more.\n\nAdditional Tips for Healthy Eating\n– Opt for 5-6 smaller meals a day instead of three large ones.\n– Have an early dinner by 8 pm to aid digestion and weight loss.\n– Drink plenty of water to stay hydrated and curb hunger.\n– Eat foods rich in fiber like oats, lentils, flax seeds, apples, and broccoli.\n\nConsult a Nutritionist\n\nEvery person is different, so it’s essential to consult a nutritionist to create a personalised and sustainable diet plan based on your needs, preferences, and lifestyle. You can consult the certified dietitian here https://fitrofy.com/.\n\nIn Conclusion\n\nA good diet plan should provide all the necessary nutrients to meet your body’s requirements. Seek professional advice and customize your diet and exercise plan to reach your weight loss goals. Remember, everyone’s journey is unique, so it’s best to have a plan that’s tailored just for you.`,
  },
  // Add the new diet plans
  {
    id: 3,
    imageUrl: 'https://www.eatingwell.com/thmb/KR3IeuHxAAtZIXEb63jKtTrcgPw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5327939-d10cb7c8c2284687bb995106bddf66fd.jpg',
    header: 'Broccolini, Chicken Sausage & Orzo Skillet',
    info: 'Ingredients:\n2 teaspoons olive oil\n6 ounces cooked chicken sausage, such as Al Fresco Sweet Italian, cut into 1/4-inch slices\n½ cup chopped onion\n1 cup whole-wheat orzo\n3 cloves garlic, minced\n2 ½ cups low-sodium chicken broth\n¼ teaspoon crushed red pepper, plus more for garnish\n¼ teaspoon kosher salt\n1 pound broccolini, trimmed, or 4 cups broccoli florets\n¼ cup grated Parmesan cheese, plus more for garnish\n2 teaspoons lemon zest\nDirections:\nHeat oil in a 12-inch cast-iron or other large heavy skillet over medium-high heat...',
  },
  {
    id: 4,
    imageUrl: 'https://www.eatingwell.com/thmb/qLnEv7TqecjHT_E8aXCtlX9SGzA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/38793671-094ef5584ee444219803492374646bd0.jpg',
    header: 'Chhole (Chickpea Curry)',
    info: 'Ingredients:\n1 medium serrano pepper, cut into thirds\n4 large cloves garlic\n1 2-inch piece fresh ginger, peeled and coarsely chopped\n1 medium yellow onion, chopped (1-inch)\n6 tablespoons canola oil or grapeseed oil\n2 teaspoons ground coriander\n2 teaspoons ground cumin\n½ teaspoon ground turmeric\n2 ¼ cups no-salt-added canned diced tomatoes with their juice (from a 28-ounce can)\n¾ teaspoon kosher salt\n2 15-ounce cans chickpeas, rinsed\n2 teaspoons garam masala\nFresh cilantro for garnish\nDirections:\nPulse serrano, garlic and ginger in a food processor until minced. Scrape down the sides and pulse again...',
  },
  {
    id: 5,
    imageUrl: 'https://www.eatingwell.com/thmb/00ZTAueh8hQoEJPB9N4_c9fseBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BuffaloChickenMacCheese-Beauty-012-31028023f8ad4f6682a95e636333e2fb.jpg',
    header: 'Anthony Anderson’s One-Pot Buffalo Chicken Mac & Cheese with Broccoli',
    info: 'Ingredients:\n1 pound boneless, skinless chicken breast, trimmed and cubed (1/2-inch)\n1 teaspoon dried parsley\n1/2 teaspoon garlic powder\n1/2 teaspoon onion powder\n1/4 teaspoon kosher salt\n1/4 teaspoon ground pepper\n1 tablespoon extra-virgin olive oil\n1 3/4 cups nonfat milk, divided\n1 1/2 cups unsalted chicken broth\n6 ounces whole-wheat penne pasta (1 1/2 cups)\n1 1/2 cups bite-size broccoli florets\n2 tablespoons all-purpose flour\n1 1/4 cups shredded reduced-fat sharp Cheddar cheese, divided\n1/4 cup mild Buffalo sauce, preferably with no added sugar\nChopped fresh parsley for garnish (optional)\nDirections:\nToss chicken with dried parsley, garlic powder, onion powder, salt and pepper in a medium bowl until evenly coated...',
  },
  {
    id: 6,
    imageUrl: 'https://www.eatingwell.com/thmb/FraSJAMc-T2juWqI311TQdpDCqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/high-fiber-dragonfruit-and-pineapple-smoothie-bowl-3x2-12485-a7af4f568d5641d5aa2e54bbc8def6d2.jpg',
    header: 'High-Fiber Dragon Fruit & Pineapple Smoothie Bowl',
    info: 'Ingredients:\n1/3 cup unsweetened almond milk\n2 tablespoons chia seeds\n1 cup frozen pineapple chunks\n3 ounces pink dragon fruit flesh (from about 1 pink-fleshed dragon fruit)\n1/4 cup kombucha\n1/4 cup sliced fresh pineapple\n1 1/2 teaspoons unsalted raw pepitas\n1 teaspoon bee pollen (optional)\nDirections:\nWhisk almond milk and chia seeds together in a serving bowl. Chill until thickened, whisking once after 7 minutes, about 15 minutes...',
  },
  {
    id: 7,
    imageUrl: 'https://www.eatingwell.com/thmb/OBBgwusY7ZHPKQDHWyp-GlvME80=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5486559-31d94027c1d54acd9152eb10fab834d5.jpg',
    header: 'Muesli with Raspberries',
    info: 'Ingredients:\n⅓ cup muesli\n1 cup raspberries\n¾ cup low-fat milk\nDirections:\nTop muesli with raspberries and serve with milk.',
  },
  {
    id: 8,
    imageUrl: 'https://www.eatingwell.com/thmb/Os_5PN7Re58chTekFxDrgmmiekc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Beans-on-toast36-17194bd255c441559494adfefa7f85a9.jpg',
    header: 'Anti-Inflammatory Beans on Toast',
    info: 'Ingredients:\n1 tablespoon unsalted butter\n3 cups thinly sliced cremini mushrooms\n1 ½ tablespoons lower-sodium Worcestershire sauce\n2 teaspoons tomato paste\n¾ teaspoon chili powder\n¼ teaspoon salt\n1 (13.7-ounce) can baked beans in tomato sauce (such as Heinz)\n4 slices multigrain bread, toasted\n1 tablespoon chopped fresh flat-leaf parsley\nDirections:\nMelt butter in a large saucepan over medium-high heat. Add mushrooms; cook, stirring occasionally, until they begin to soften, about 5 minutes...',
  },
  {
    id: 9,
    imageUrl: 'https://www.eatingwell.com/thmb/p32J11M-JL_Hdu5n-x7L_jd7yCI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kale-mango-smoothie-78dafe40fbb048e48b175f3716c22c85.jpg',
    header: 'Mango & Kale Smoothie',
    info: 'Ingredients:\n1 cup baby kale\n1 cup frozen mango chunks\n1 small banana, sliced\n1 cup fresh orange juice\nDirections:\nAdd kale, mango, banana, and orange juice to a blender. Blend on medium-low speed, using the tamper as necessary, until well combined...',
  },
   
];

const Diet = () => {
  return (
    <div className="diet-page">
      <h1>Diet Plans</h1>
      <div className="diet-container">
        {dietPlans.map((plan) => (
          <Link to={`/diet/${plan.id}`} key={plan.id} className="diet-plan">
            <img src={plan.imageUrl} alt={`Diet Plan ${plan.id}`} />
            <h2>{plan.header}</h2>
            <p>{plan.info.substring(0, 150)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Diet;