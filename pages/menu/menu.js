var section = document.querySelector('section')
var menu = {
    en: [
        { //* SALADS
            category: 'SALADS',
            food: [
                { image: '', name: 'Cucumber and Tomato Salad', price: 13.00 },
                { image: '', name: 'Cucumber and Tomato Salad with Walnuts', price: 15.00 },
                { image: '', name: 'Mushroom Salad with Vegetables and Georgian Spices', price: 15.00 },
                { image: '', name: 'Chicken Salad with Georgian Spices', price: 16.00 },
            ],
        },
        { //* COLD DISHES
            category: 'COLD DISHES',
            food: [
                { image: '', name: 'Satsivi – Chicken in Walnut Sauce with Georgian Spices', price: 33.00 },
                { image: '', name: 'Local Cheese', price: 16.00 },
                { image: '', name: 'Sulguni Cheese', price: 17.00 },
                { image: '', name: 'Smoked Sulguni Cheese', price: 18.00 },
                { image: '', name: 'Georgian Cheese Assortment', price: 33.00 },
                { image: '', name: 'Eggplant Rolls with Walnut Paste', price: 16.00 },
                { image: '', name: 'Bell Peppers with Walnut Paste', price: 16.00 },
                { image: '', name: 'Spinach with Walnut Paste', price: 16.00 },
                { image: '', name: 'Pkhali Assortment – Traditional Georgian Vegetable Spreads', price: 28.00 },
                { image: '', name: 'Assorted Pickles', price: 18.00 },
                { image: '', name: 'Olives', price: 9.00 },
            ],
        },
        { //* HOT DISHES
            category: 'HOT DISHES',
            food: [
                { image: '', name: 'Chakapuli – Veal Stew with Fresh Herbs and Georgian Spices', price: 30.00 },
                { image: '', name: 'Ostri – Beef Stew in Tomato Sauce', price: 25.00 },
                { image: '', name: 'Georgian Beans Cooked in a Clay Pot', price: 15.00 },
                { image: '', name: 'Adjapsandali – Eggplant and Vegetable Stew', price: 18.00 },
                { image: '', name: 'Ojakhuri – Pork and Potatoes with Georgian Spices', price: 21.00 },
                { image: '', name: 'Ojakhuri – Veal and Potatoes with Georgian Spices', price: 29.00 },
                { image: '', name: 'Ojakhuri – Chicken and Potatoes with Georgian Spices', price: 20.00 },
                { image: '', name: 'Ojakhuri – Mushrooms and Potatoes with Georgian Spices', price: 19.00 },
                { image: '', name: 'Veal Ribs with Adjika Sauce', price: 36.00 },
                { image: '', name: 'Chakhokhbili – Chicken Stew with Tomatoes and Eggs', price: 33.00 },
                { image: '', name: 'Shkmeruli – Chicken in Garlic, Sour Cream and Butter Sauce', price: 33.00 },
                { image: '', name: 'Tabaka – Traditional Fried Chicken', price: 26.00 },
                { image: '', name: 'Sizzling Mushrooms on Ketsi', price: 16.00 },
                { image: '', name: 'Sizzling Mushrooms with Sulguni on Ketsi', price: 18.00 },
                { image: '', name: 'Omelette with Sulguni Cheese', price: 13.00 },
            ],
        },
        { //* SOUPS
            category: 'SOUPS',
            food: [
                { image: '', name: 'Soup-Kharcho – Beef Soup with Tomatoes, Rice and Herbs', price: 17.00 },
                { image: '', name: 'Chikhirtma – Chicken Broth with Egg', price: 15.00 },
                { image: '', name: 'Mushroom Soup with Carrot and Herbs', price: 15.00 },
                { image: '', name: 'Mushroom Cream Soup', price: 17.00 },
                { image: '', name: 'Chicken Cream Soup', price: 17.00 },
            ],
        },
        { //* PASTRY & BREADS
            category: 'PASTRY & BREADS',
            food: [
                { image: '', name: 'Imeruli Khachapuri – Cheese-Filled Bread', price: 20.00 },
                { image: '', name: 'Acharuli Khachapuri with Egg – Boat-Shaped Bread', price: 21.00 },
                { image: '', name: 'Royal Khachapuri – Deluxe Cheese Bread', price: 26.00 },
                { image: '', name: 'Khabizgina – Traditional Potato and Cheese Khachapuri from Kazbegi', price: 19.00 },
                { image: '', name: 'Lobiani – Bean-Filled Georgian Bread', price: 17.00 },
                { image: '', name: 'Traditional Georgian Bread', price: 3.00 },
            ],
        },
        { //* BARBECUE / GRILL
            category: 'BARBECUE / GRILL',
            food: [
                { image: '', name: 'Chef’s Special Dish – Mixed Barbecue and Kebabs with Fries and Sauce', price: 110.00 },
                { image: '', name: 'Pork Barbecue', price: 19.00 },
                { image: '', name: 'Veal Barbecue', price: 29.00 },
                { image: '', name: 'Chicken Barbecue', price: 18.00 },
                { image: '', name: 'Beef Kebab on Skewer', price: 21.00 },
                { image: '', name: 'Chicken Kebab on Skewer', price: 19.00 },
                { image: '', name: 'Trout Grilled on Skewer', price: 20.00 },
                { image: '', name: 'Grilled Vegetables', price: 17.00 },
            ],
        },
        { //* SIDE DISHES
            category: 'SIDE DISHES',
            food: [
                { image: '', name: 'Mexican-Style Potatoes', price: 13.00 },
                { image: '', name: 'French Fries', price: 9.00 },
                { image: '', name: 'Mashed Potatoes - Puree', price: 10.00 },
                { image: '', name: 'Rice with Vegetables', price: 15.00 },
            ],
        },
        { //* SAUCES
            category: 'SAUCES',
            food: [
                { image: '', name: 'Tomato Sauce', price: 3.00 },
                { image: '', name: 'Tkemali – Sour Plum Sauce', price: 3.00 },
                { image: '', name: 'Ketchup', price: 4.00 },
                { image: '', name: 'Adjika – Spicy Hot Pepper Georgian Sauce', price: 4.00 },
            ],
        },
        { //* DESSERTS
            category: 'DESSERTS',
            food: [
                { image: '', name: 'Chocolate Brownie with Ice Cream', price: 18.00 },
                { image: '', name: 'Apple Pie with Ice Cream', price: 15.00 },
                { image: '', name: 'Georgian Ice Cream', price: 12.00 },
            ],
        },
        { //* TEA & COFFEE
            category: 'TEA & COFFEE',
            food: [
                { image: '', name: 'Americano', price: 6.00 },
                { image: '', name: 'Espresso', price: 6.01 },
                { image: '', name: 'Cappuccino', price: 8.00 },
                { image: '', name: 'Georgian Black Tea', price: 4.00 },
                { image: '', name: 'Georgian Green Tea', price: 4.00 },
                { image: '', name: 'Alpine Berry Herbal Tea', price: 4.00 },
            ],
        },
        { //* SOFT DRINKS
            category: 'SOFT DRINKS',
            food: [
                { image: '', name: 'Georgian Lemonade 500ml – Tarragon, Pear, Lemon, Grape, Feijoa, Cream', price: 5.00 },
                { image: '', name: 'Coca-Cola (Classic or Zero) 330ml', price: 5.00 },
                { image: '', name: 'Borjomi – Georgian Sparkling Mineral Water 500ml', price: 5.00 },
                { image: '', name: 'Still Water 500ml', price: 3.00 },
                { image: '', name: 'Fruit Juice', price: 5.00 },
                { image: '', name: 'Homemade Fruit Compote 1L', price: 15.00 },
            ],
        },
        { //* NUTS
            category: 'NUTS',
            food: [
                { image: '', name: 'Salted Peanuts', price: 13.00 },
            ],
        },
        { //* BEER
            category: 'BEER',
            food: [
                { image: '', name: 'Zedazeni – Georgian Beer 500ml', price: 7.00 },
                { image: '', name: 'Bavaria 500ml', price: 8.00 },
                { image: '', name: 'Heineken 500ml', price: 10.00 },
                { image: '', name: 'Heineken 330ml', price: 0.00 },
                { image: '', name: 'Heineken Alcohol-Free 330ml', price: 7.00 },
            ],
        },
        { //* VODKA
            category: 'VODKA',
            food: [
                { image: '', name: 'Chacha 50ml', price: 5.00 },
                { image: '', name: 'Chacha 500ml', price: 25.00 },
                { image: '', name: 'Stolichnaya 50ml', price: 7.00 },
                { image: '', name: 'Stolichnaya 500ml', price: 50.00 },
                { image: '', name: 'Absolut Vodka 50ml', price: 0.00 },
                { image: '', name: 'Absolut Vodka 1000ml', price: 0.00 },
            ],
        },
        { //* BRANDY
            category: 'BRANDY',
            food: [
                { image: '', name: 'Le Caucase 5★ 50ml', price: 9.00 },
                { image: '', name: 'Le Caucase 5★ 500ml', price: 60.00 },
            ],
        },
        { //* WHISKEY
            category: 'WHISKEY',
            food: [
                { image: '', name: 'Jack Daniel’s 50ml', price: 12.00 },
                { image: '', name: 'Jameson 50ml', price: 12.00 },
            ],
        },
        { //* WINE
            category: 'WINE',
            food: [
                { image: '', name: 'Tsinandali – White Dry Wine (glass)', price: 8.00 },
                { image: '', name: 'Tsinandali – White Dry Wine 750ml', price: 30.00 },
                { image: '', name: 'Chinuri – White Dry Wine (glass)', price: 9.00 },
                { image: '', name: 'Chinuri – White Dry Wine 750ml', price: 35.00 },
                { image: '', name: 'Winemaker’s Selection – White Dry Wine (7 Grapes) 750ml', price: 40.00 },
                { image: '', name: 'Tvishi – White Semi-Sweet Wine 750ml', price: 45.00 },
                { image: '', name: 'Saperavi – Red Dry Wine (glass)', price: 9.00 },
                { image: '', name: 'Saperavi – Red Dry Wine 750ml', price: 35.00 },
                { image: '', name: 'Tavkveri – Red Dry Wine (glass)', price: 9.00 },
                { image: '', name: 'Tavkveri – Red Dry Wine 750ml', price: 40.00 },
                { image: '', name: 'Mukuzani – Red Dry Wine 750ml', price: 45.00 },
                { image: '', name: 'Saperavi Rosé – Semi-Dry Wine 750ml', price: 404.00 },
                { image: '', name: 'Kindzmarauli – Semi-Sweet Red Wine (glass)', price: 12.00 },
                { image: '', name: 'Kindzmarauli – Semi-Sweet Red Wine 750ml', price: 45.00 },
                { image: '', name: '<strong>— PREMIUM QUALITY WINES —</strong> Tsolikauri – White Dry Wine – 750ml. ', price: 55.00 },
                { image: '', name: '<strong>— PREMIUM QUALITY WINES —</strong> Kisi Qvevri – White Dry Wine – 750ml. ', price: 60.00 },
                { image: '', name: '<strong>— PREMIUM QUALITY WINES —</strong> Saperavi Unfiltered – Red Dry Wine – 750ml. ', price: 65.00 },
                { image: '', name: '<strong>— PREMIUM QUALITY WINES —</strong> Khvanchkara – Semi Sweet Red Wine – 750ml. ', price: 70.00 },
            ],
        },
        { //* SPARKLING WINE
            category: 'SPARKLING WINE',
            food: [
                { image: '', name: 'Teliani Valley Sparkling Wine Brut 750ml', price: 40.00 },
                { image: '', name: 'Teliani Valley Sparkling Wine Medium Dry 750ml', price: 40.00 },
            ],
        },
    ],
    ge: [
        { //* სალათები
            category: 'სალათები',
            food: [
                { image: '', name: 'კიტრის და პომიდვრის სალათი', price: 13.00 },
                { image: '', name: 'კიტრის და პომიდვრის სალათი ნიგვზით', price: 15.00 },
                { image: '', name: 'სოკოს სალათი', price: 15.00 },
                { image: '', name: 'ქათმის სალათი', price: 16.00 },
            ],
        },
        { //* ცივი კერძები
            category: 'ცივი კერძები',
            food: [
                { image: '', name: 'საცივი', price: 33.00 },
                { image: '', name: 'ყველი მოხეური', price: 16.00 },
                { image: '', name: 'სულგუნი', price: 17.00 },
                { image: '', name: 'შებოლილი სულგუნი', price: 18.00 },
                { image: '', name: 'ყველის ასორტი', price: 33.00 },
                { image: '', name: 'ბადრიჯანი ნიგვზით', price: 16.00 },
                { image: '', name: 'ბულგარული ნიგვზით', price: 16.00 },
                { image: '', name: 'ისპანახის ფხალი', price: 16.00 },
                { image: '', name: 'ფხალის ასორტი', price: 26.00 },
                { image: '', name: 'მჟავის ასორტი', price: 18.00 },
                { image: '', name: 'ზეთისხილი', price: 9.00 },
            ],
        },
        { //* ცხელი კერძები
            category: 'ცხელი კერძები',
            food: [
                { image: '', name: 'ხბოს ჩაქაფული', price: 30.00 },
                { image: '', name: 'ოსტრი', price: 25.00 },
                { image: '', name: 'ლობიო ქოთანში', price: 15.00 },
                { image: '', name: 'აჯაფსანდალი', price: 18.00 },
                { image: '', name: 'ოჯახური ღორის ხორცით', price: 21.00 },
                { image: '', name: 'ოჯახური ხბოს ხორცით', price: 29.00 },
                { image: '', name: 'ოჯახური ქათმის ხორცით', price: 20.00 },
                { image: '', name: 'ოჯახური სოკოთი', price: 19.00 },
                { image: '', name: 'ხბოს ნეკნები აჯიკით', price: 36.00 },
                { image: '', name: 'ქათმის ჩახოხბილი', price: 33.00 },
                { image: '', name: 'შქმერული', price: 33.00 },
                { image: '', name: 'ტაბაკად შემწვარი წიწილა', price: 26.00 },
                { image: '', name: 'სოკო კეცზე', price: 16.00 },
                { image: '', name: 'სოკო კეცზე სულგუნით', price: 18.00 },
                { image: '', name: 'ომლეტი სულგუნით', price: 13.00 },
            ],
        },
        { //* წვნიანი
            category: 'წვნიანი',
            food: [
                { image: '', name: 'სუპ - ხარჩო', price: 17.00 },
                { image: '', name: 'ჩიხირთმა', price: 15.00 },
                { image: '', name: 'სოკოს სუპი', price: 15.00 },
                { image: '', name: 'სოკოს კრემ-სუპი', price: 17.00 },
                { image: '', name: 'ქათმის კრემ-სუპი', price: 17.00 },
            ],
        },
        { //* ცომეული
            category: 'ცომეული',
            food: [
                { image: '', name: 'იმერული ხაჭაპური', price: 20.00 },
                { image: '', name: 'აჭარული ხაჭაპური', price: 21.00 },
                { image: '', name: 'სამეფო ხაჭაპური', price: 26.00 },
                { image: '', name: 'ხაბიზგინა', price: 19.00 },
                { image: '', name: 'ლობიანი', price: 17.00 },
                { image: '', name: 'პური', price: 3.00 },
            ],
        },
        { //* მაყალი
            category: 'მაყალი',
            food: [
                { image: '', name: 'საფირმო კერძი - მიქსი მწვადის და ქაბაბის ფრით და სოუსებით', price: 110.00 },
                { image: '', name: 'ღორის მწვადი', price: 19.00 },
                { image: '', name: 'ხბოს მწვადი', price: 29.00 },
                { image: '', name: 'ქათმის მწვადი', price: 18.00 },
                { image: '', name: 'საქონლის ქაბაბი შამფურზე', price: 21.00 },
                { image: '', name: 'ქათმის ქაბაბი შამფურზე', price: 19.00 },
                { image: '', name: 'კალმახი გრილზე', price: 20.00 },
                { image: '', name: 'ბოსტნეულის მწვადი', price: 17.00 },
            ],
        },
        { //* გარნირი
            category: 'გარნირი',
            food: [
                { image: '', name: 'კარტოფილი მექსიკურად', price: 13.00 },
                { image: '', name: 'კარტოფილი ფრი', price: 9.00 },
                { image: '', name: 'კარტოფილის პიურე', price: 10.00 },
                { image: '', name: 'ბრინჯი ბოსტნეულით', price: 15.00 },
            ],
        },
        { //* სოუსი
            category: 'სოუსი',
            food: [
                { image: '', name: 'ტომატის საწებელი', price: 3.00 },
                { image: '', name: 'ტყემალი', price: 3.00 },
                { image: '', name: 'კეტჩუპი', price: 4.00 },
                { image: '', name: 'აჯიკა', price: 4.00 },
            ],
        },
        { //* დესერტი
            category: 'დესერტი',
            food: [
                { image: '', name: 'შოკოლადის ბრაუნი ნაყინით', price: 18.00 },
                { image: '', name: 'ვაშლის ღვეზელი ნაყინით', price: 15.00 },
                { image: '', name: 'ნაყინი', price: 12.00 },
            ],
        },
        { //* ჩაი, ყავა
            category: 'ჩაი, ყავა',
            food: [
                { image: '', name: 'ამერიკანო', price: 6.00 },
                { image: '', name: 'ესპრესო', price: 6.00 },

                { image: '', name: 'კაპუჩინო', price: 8.00 },
                { image: '', name: 'შავი ჩაი', price: 4.00 },
                { image: '', name: 'მწვანე ჩაი', price: 4.00 },
                { image: '', name: 'ჩაი ალპური კენკრა', price: 4.00 },
            ],
        },
        { //* გამაგრილებელი სასმელი
            category: 'გამაგრილებელი სასმელი',
            food: [
                { image: '', name: 'ლიმონათი 0.5 ლ - ტარხუნა, მსხალი, ლიმონი, ყურძენი, ფეიხო, ნაღები', price: 5.00 },
                { image: '', name: 'კოკა - კოლა (კლასიკური / ზერო) 0.33 ლ', price: 5.00 },
                { image: '', name: 'მინერალური წყალი ბორჯომი 0.5 ლ', price: 5.00 },
                { image: '', name: 'წყალი 0.5 ლ', price: 3.00 },
                { image: '', name: 'ნატურალური წვენი', price: 5.00 },
                { image: '', name: 'ხილის კომპოტი 1 ლ.', price: 15.00 },
            ],
        },
        { //* თხილეული
            category: 'თხილეული',
            food: [
                { image: '', name: 'მოხალული მიწისთხილი მარილით', price: 13.00 },
            ],
        },
        {//* ლუდი
            category: 'ლუდი',
            food: [
                { image: '', name: 'ლუდი ზედაზენი 0.5 ლ', price: 7.00 },
                { image: '', name: 'ლუდი ბავარია 0.5 ლ', price: 8.00 },
                { image: '', name: 'ლუდი ჰაინეკენი 0.5 ლ', price: 10.00 },
                { image: '', name: 'ლუდი ჰაინეკენი 0.33 ლ', price: 7.00 },
                { image: '', name: 'ლუდი ჰაინეკენი უალკოჰოლო 0.33 ლ', price: 7.00 },
            ],
        },
        { //* არაყი
            category: 'არაყი',
            food: [
                { image: '', name: 'ჭაჭა 50 მლ.', price: 5.00 },
                { image: '', name: 'ჭაჭა 500 მლ.', price: 25.00 },
                { image: '', name: 'სტოლიჩნაია 50 მლ.', price: 7.00 },
                { image: '', name: 'სტოლიჩნაია 500 მლ.', price: 50.00 },
                { image: '', name: 'აბსოლუტი ბლუ 50 მლ.', price: 0.00 },
                { image: '', name: 'აბსოლუტი ბლუ 1 ლ.', price: 0.00 },
            ],
        },
        { //* ბრენდი
            category: 'ბრენდი',
            food: [
                { image: '', name: 'LE CAUCASE 5 წლიანი 50 მლ.', price: 9.00 },
                { image: '', name: 'LE CAUCASE 5 წლიანი 500 მლ.', price: 60.00 },
            ],
        },
        { //* ვისკი
            category: 'ვისკი',
            food: [
                {
                    image: '', name: "JACK DANIEL'S 50 მლ.", price: 12.00
                },
                { image: '', name: 'JAMESON 50 მლ.', price: 12.00 },
            ],
        },
        { //* ღვინო
            category: 'ღვინო',
            food: [
                { image: '', name: 'წინანდალი - თეთრი მშრალი 1 ჭიქა', price: 8.00 },
                { image: '', name: 'წინანდალი - თეთრი მშრალი ბოთლი', price: 30.00 },
                { image: '', name: 'ჩინური - თეთრი მშრალი 1 ჭიქა', price: 9.00 },
                { image: '', name: 'ჩინური - თეთრი მშრალი ბოთლი', price: 35.00 },
                { image: '', name: 'მეღვინის რჩეული - თეთრი მშრალი ბოთლი', price: 40.00 },
                { image: '', name: 'ტვიში თეთრი ნახევრადტკბილი ბოთლი', price: 45.00 },
                { image: '', name: 'საფერავი – წითელი მშრალი  1 ჭიქა', price: 9.00 },
                { image: '', name: 'საფერავი – წითელი მშრალი ბოთლი', price: 35.00 },
                { image: '', name: 'თავკვერი – წითელი მშრალი  1 ჭიქა', price: 9.00 },
                { image: '', name: 'თავკვერი – წითელი მშრალი ბოთლი', price: 40.00 },
                { image: '', name: 'მუკუზანი წითელი მშრალი ბოთლი', price: 45.00 },
                { image: '', name: 'საფერავი როზე ნახევრად მშრალი ბოთლი', price: 40.00 },
                { image: '', name: 'ქინძმარაული – წითელი ნახევრადტკბილი  1 ჭიქა', price: 12.00 },
                { image: '', name: 'ქინძმარაული – წითელი ნახევრადტკბილი ბოთლი', price: 45.00 },
                { image: '', name: '<strong>— პრემიუმ ხარისხის ღვინო —</strong> ცოლიკოური – თეთრი მშრალი ბოთლი', price: 55.00 },
                { image: '', name: '<strong>— პრემიუმ ხარისხის ღვინო —</strong> გლეხური ქისი ქვევრი – თეთრი მშრალი ბოთლი', price: 60.00 },
                { image: '', name: '<strong>— პრემიუმ ხარისხის ღვინო —</strong> საფერავი გაუფილტრავი – წითელი მშრალი ბოთლი', price: 65.00 },
                { image: '', name: '<strong>— პრემიუმ ხარისხის ღვინო —</strong> ხვანჭკარა – წითელი ნახევრადტკბილი ბოთლი', price: 70.00 },
            ],
        },
        { //* ცქრიალა ღვინო
            category: 'ცქრიალა ღვინო',
            food: [
                { image: '', name: "თელიანი ველი – ცქრიალა ღვინო ბრუტი ბოთლი.", price: 40.00 },
                { image: '', name: 'თელიანი ველი – ცქრიალა ღვინო ნახევრად მშრალი ბოთლი', price: 40.00 },
            ],
        },
    ],
    ru: [
        { //* САЛАТЫ
            category: 'САЛАТЫ',
            food: [
                { image: '', name: 'Салат из огурцов и помидоров', price: 13.00 },
                { image: '', name: 'Салат из огурцов и помидоров с грецкими орехами', price: 15.00 },
                { image: '', name: 'Грибной салат с овощами и Грузинскими специями', price: 15.00 },
                { image: '', name: 'Куриный салат с Грузинскими специями', price: 16.00 },
            ],
        },
        { //* ХОЛОДНЫЕ БЛЮДА
            category: 'ХОЛОДНЫЕ БЛЮДА',
            food: [
                { image: '', name: 'Сациви — курица в ореховом соусе с Грузинскими специями', price: 33.00 },
                { image: '', name: 'Местный сыр', price: 16.00 },
                { image: '', name: 'Сыр сулгуни', price: 17.00 },
                { image: '', name: 'Копченый сулгуни', price: 18.00 },
                { image: '', name: 'Ассорти грузинских сыров', price: 33.00 },
                { image: '', name: 'Баклажаны с грецкими орехами', price: 16.00 },
                { image: '', name: 'Болгарский перец с грецкими орехами.', price: 16.00 },
                { image: '', name: 'Пхали из шпинта с грецкими орехами', price: 16.00 },
                { image: '', name: 'Ассорти пхали — традиционные грузинские овощные закуски', price: 28.00 },
                { image: '', name: 'Ассорти из солений', price: 18.00 },
                { image: '', name: 'Оливки', price: 9.00 },
            ],
        },
        { //* ГОРЯЧИЕ БЛЮДА
            category: 'ГОРЯЧИЕ БЛЮДА',
            food: [
                { image: '', name: 'Чакапули — тушеная телятина с зеленью и Грузинскими специями', price: 30.00 },
                { image: '', name: 'Остри — тушеная говядина в томатном соусе', price: 25.00 },
                { image: '', name: 'Фасоль по-грузински в глиняном горшочке', price: 15.00 },
                { image: '', name: 'Аджапсандали — овощное рагу с баклажанами', price: 18.00 },
                { image: '', name: 'Оджахури — свинина с картофелем и Грузинскими специями', price: 21.00 },
                { image: '', name: 'Оджахури — телятина с картофелем и Грузинскими специями', price: 29.00 },
                { image: '', name: 'Оджахури — курица с картофелем и Грузинскими специями', price: 20.00 },
                { image: '', name: 'Оджахури — грибы с картофелем и Грузинскими специями', price: 19.00 },
                { image: '', name: 'Ребрышки телятины с соусом аджика', price: 36.00 },
                { image: '', name: 'Чахохбили — тушеная курица с помидорами и яйцами', price: 33.00 },
                { image: '', name: 'Шкмерули — курица в чесночном, сметанном и сливочном соусе', price: 33.00 },
                { image: '', name: 'Табака — традиционный жареный цыпленок', price: 26.00 },
                { image: '', name: 'Грибы на кеци', price: 16.00 },
                { image: '', name: 'Грибы с сыром сулгуни на кеци', price: 18.00 },
                { image: '', name: 'Омлет с сыром сулгуни', price: 13.00 },
            ],
        },
        { //* СУПЫ
            category: 'СУПЫ',
            food: [
                { image: '', name: 'Суп-харчо — говяжий суп с помидорами, рисом и зеленью', price: 17.00 },
                { image: '', name: 'Чихиртма — куриный бульон с яйцом', price: 15.00 },
                { image: '', name: 'Грибной суп с морковью и зеленью', price: 15.00 },
                { image: '', name: 'Крем-суп грибной', price: 17.00 },
                { image: '', name: 'Крем-суп куриный', price: 17.00 },
            ],
        },
        { //* ВЫПЕЧКА И ХЛЕБ
            category: 'ВЫПЕЧКА И ХЛЕБ',
            food: [
                { image: '', name: 'Имерули хачапури — лепешка с сыром', price: 20.00 },
                { image: '', name: 'Аджарули хачапури с яйцом — лодочка с сыром', price: 21.00 },
                { image: '', name: 'Хачапури по царски', price: 26.00 },
                { image: '', name: 'Хабизгина — картофельно-сырный хачапури из Казбеги', price: 19.00 },
                { image: '', name: 'Лобиани — лепешка с фасолью', price: 17.00 },
                { image: '', name: 'Традиционный грузинский хлеб', price: 3.00 },
            ],
        },
        { //* МАНГАЛ / ГРИЛЬ
            category: 'МАНГАЛ / ГРИЛЬ',
            food: [
                { image: '', name: 'Фирменное блюдо от шефа – ассорти из шашлыков и кебабов с картофелем фри и соусом', price: 110.00 },
                { image: '', name: 'Шашлык из свинины', price: 19.00 },
                { image: '', name: 'Шашлык из телятины', price: 29.00 },
                { image: '', name: 'Шашлык из курицы', price: 18.00 },
                { image: '', name: 'Говяжий кебаб на вертеле', price: 21.00 },
                { image: '', name: 'Куриный кебаб на вертеле', price: 19.00 },
                { image: '', name: 'Форель на вертеле', price: 20.00 },
                { image: '', name: 'Овощи на гриле', price: 17.00 },
            ],
        },
        { //* ГАРНИРЫ
            category: 'ГАРНИРЫ',
            food: [
                { image: '', name: 'Картофель по-мексикански', price: 13.00 },
                { image: '', name: 'Картофель фри', price: 9.00 },
                { image: '', name: 'Картофельное пюре', price: 10.00 },
                { image: '', name: 'Рис с овощами', price: 15.00 },
            ],
        },
        { //* СОУСЫ
            category: 'СОУСЫ',
            food: [
                { image: '', name: 'Томатный соус', price: 3.00 },
                { image: '', name: 'Ткемали – кислый сливовый соус', price: 3.00 },
                { image: '', name: 'Кетчуп', price: 4.00 },
                { image: '', name: 'Аджика – острый грузинский соус из перца', price: 4.00 },
            ],
        },
        { //* ДЕСЕРТЫ
            category: 'ДЕСЕРТЫ',
            food: [
                { image: '', name: 'Шоколадный брауни с мороженым', price: 18.00 },
                { image: '', name: 'Яблочный пирог с мороженым', price: 15.00 },
                { image: '', name: 'Мороженое', price: 12.00 },
            ],
        },
        { //* ЧАЙ И КОФЕ
            category: 'ЧАЙ И КОФЕ',
            food: [
                { image: '', name: 'Американо', price: 6.00 },
                { image: '', name: 'Эспрессо', price: 6.01 },
                { image: '', name: 'Капучино', price: 8.00 },
                { image: '', name: 'Грузинский чёрный чай', price: 4.00 },
                { image: '', name: 'Грузинский зелёный чай', price: 4.00 },
                { image: '', name: 'Чай «Альпийские ягоды»', price: 4.00 },
            ],
        },
        { //* БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ
            category: 'БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ',
            food: [
                { image: '', name: 'Грузинский лимонад 500 мл – тархун, груша, лимон, виноград, фейхоа, сливки', price: 5.00 },
                { image: '', name: 'Coca-Cola (классическая или Zero) 330 мл', price: 5.00 },
                { image: '', name: 'Боржоми – Грузинская газированная минеральная вода 500 мл', price: 5.00 },
                { image: '', name: 'Вода без газа 500 мл', price: 3.00 },
                { image: '', name: 'Фруктовый сок', price: 5.00 },
                { image: '', name: 'Домашний фруктовый компот 1 л', price: 15.00 },
            ],
        },
        { //* ОРЕХИ
            category: 'ОРЕХИ',
            food: [
                { image: '', name: 'Солёный арахис', price: 13.00 },
            ],
        },
        { //* ПИВО
            category: 'ПИВО',
            food: [
                { image: '', name: 'Zedazeni – Грузинское пиво 500 мл', price: 7.00 },
                { image: '', name: 'Bavaria 500 мл', price: 8.00 },
                { image: '', name: 'Heineken 500 мл', price: 10.00 },
                { image: '', name: 'Heineken 330 мл', price: 0.00 },
                { image: '', name: 'Heineken безалкогольное 330 мл', price: 7.00 },
            ],
        },
        { //* ВОДКА
            category: 'ВОДКА',
            food: [
                { image: '', name: 'Чача 50 мл', price: 5.00 },
                { image: '', name: 'Чача 500 мл', price: 25.00 },
                { image: '', name: 'Столичная 50 мл', price: 7.00 },
                { image: '', name: 'Столичная 500 мл', price: 50.00 },
                { image: '', name: 'Абсолют 50 мл', price: 0.00 },
                { image: '', name: 'Абсолют 1000 мл', price: 0.00 },
            ],
        },
        { //* КОНЬЯК
            category: 'КОНЬЯК',
            food: [
                { image: '', name: 'Le Caucase 5★ 50 мл', price: 9.00 },
                { image: '', name: 'Le Caucase 5★ 500 мл', price: 60.00 },
            ],
        },
        { //* ВИСКИ
            category: 'ВИСКИ',
            food: [
                { image: '', name: 'Jack Daniel’s 50 мл', price: 12.00 },
                { image: '', name: 'Jameson 50 мл', price: 12.00 },
            ],
        },
        { //* ВИНО
            category: 'ВИНО',
            food: [
                { image: '', name: 'Цинандали – белое сухое вино (бокал)', price: 8.00 },
                { image: '', name: 'Цинандали – белое сухое вино 750 мл', price: 30.00 },
                { image: '', name: 'Чинури – белое сухое вино (бокал)', price: 9.00 },
                { image: '', name: 'Чинури – белое сухое вино 750 мл', price: 35.00 },
                { image: '', name: 'Выбор винодела – белое сухое вино (7 сортов винограда) 750 мл', price: 40.00 },
                { image: '', name: 'Твиши – белое полусладкое вино 750 мл', price: 45.00 },
                { image: '', name: 'Саперави – красное сухое вино (бокал)', price: 9.00 },
                { image: '', name: 'Саперави – красное сухое вино 750 мл', price: 35.00 },
                { image: '', name: 'Тавквери – красное сухое вино (бокал)', price: 9.00 },
                { image: '', name: 'Тавквери – красное сухое вино 750 мл', price: 40.00 },
                { image: '', name: 'Мукузани – красное сухое вино 750 мл', price: 45.00 },
                { image: '', name: 'Саперави Розе – полусухое вино 750 мл', price: 404.00 },
                { image: '', name: 'Киндзмараули – полусладкое красное вино (бокал)', price: 12.00 },
                { image: '', name: 'Киндзмараули – полусладкое красное вино 750 мл', price: 45.00 },
                { image: '', name: '<strong>— ВИНА ПРЕМИУМ-КЛАССА —</strong> Цоликаури – белое сухое вино – 750 мл.', price: 55.00 },
                { image: '', name: '<strong>— ВИНА ПРЕМИУМ-КЛАССА —</strong> Киси Квеври – белое сухое вино – 750 мл.', price: 60.00 },
                { image: '', name: '<strong>— ВИНА ПРЕМИУМ-КЛАССА —</strong> Саперави нефильтрованное – красное сухое вино – 750 мл.', price: 65.00 },
                { image: '', name: '<strong>— ВИНА ПРЕМИУМ-КЛАССА —</strong> Хванчкара – полусладкое красное вино – 750 мл.', price: 70.00 },
            ],
        },
        { //* ИГРИСТОЕ ВИНО
            category: 'ИГРИСТОЕ ВИНО',
            food: [
                { image: '', name: 'Teliani Valley Игристое вино Брют 750 мл', price: 40.00 },
                { image: '', name: 'Teliani Valley Игристое вино полусухое 750 мл', price: 40.00 },
            ],
        },
    ],
}

var menuSelected = {
    totalPrice: 0,
}

renderMenu(menu.en)

function renderMenu(menu) {
    if (section.innerHTML.trim() == '') {
        section.innerHTML = `
        <div class="show-change-language-btn-container">
                <button class="change-language-btn" onclick="changeLanguage('ge')">Geo</button>
                <button class="change-language-btn" onclick="changeLanguage('en')">Eng</button>
                <button class="change-language-btn" onclick="changeLanguage('ru')">Rus</button>
        </div>
        <div class="show-my-order show-hide-my-order" id="showMyOrder showHideMyOrder">
            <h1>Show My Order</h1>
        </div>`
        menu.forEach(category => {
            section.innerHTML += `
            <div class="category">
                <div class="category-name">
                    <div class="arrowhead-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                    </div>
                    <h2 class="category-name-h2">${category.category}</h2>
                </div>
                <ul>
                    ${category.food.map(item => `
                        <li class="item ${item.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}">
                            <img src="https://img.freepik.com/premium_photo/isolated_plate_georgian_khinkali_dumplings_219193-6644.jpg" alt="${item.name}">
                            <div class="food-name"></div>
                            <strong>
                                <div class="food-price">₾ ${item.price.toFixed(2)}</div>
                            </strong>
                            <div class="add-to-card-div-main">
                                <div class="add-to-card-div">
                                    <button class="minus-btn plus-minus-btn" id="minusBtn" onclick="plusMinusBtn('minus', this)"><i class="fa-solid fa-minus"></i></button>
                                    <p class="quantity" id="quantity"></p>
                                    <button class="plus-btn plus-minus-btn" id="plusBtn" onclick="plusMinusBtn('plus', this)"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
                <div class="scroll-div">
                    <i class="fa-solid fa-chevron-left" onclick="scrollMenu('prev', this)"></i>
                    <i class="fa-solid fa-chevron-right" onclick="scrollMenu('next', this)"></i>
                </div>
            </div>`;
        });
    }
    else {
        var categoriesNameH2 = document.querySelectorAll('.category-name-h2');
        var allProducts = document.querySelectorAll('.food-name');
        var allMenuProducts = menu.flatMap(category => category.food);

        allProducts.forEach((productEl, index) => {
            if (allMenuProducts[index]) {
                productEl.innerHTML = allMenuProducts[index].name;
            }
        });

        categoriesNameH2.forEach((categoryEl, index) => {
            if (menu[index]) {
                categoryEl.innerHTML = menu[index].category;
            }
        });
    }

}

var chooseLanguagePopup = document.querySelector('.choose-language-container')
function changeLanguage(language) {
    chooseLanguagePopup.classList.add('hide')
    document.body.classList.remove('no-scroll')
    renderMenu(menu[language]);
}

var categoriesName = document.querySelectorAll('.category-name')

categoriesName.forEach(categoryName => {
    categoryName.addEventListener('click', () => {
        if (!categoryName.parentNode.classList.contains('active')) {
            categoriesName.forEach(item => item.parentNode.classList.remove('active'));
        }
        categoryName.parentNode.classList.toggle('active');
    });
});

function scrollMenu(nextPrev, btn) {
    var scrollContainer = btn.closest('.category').querySelector('ul');
    if (!scrollContainer) return;

    var scrollWidth = scrollContainer.scrollWidth / 100;

    if (nextPrev === 'next') {
        scrollContainer.scrollBy({ left: scrollWidth, behavior: "smooth" });
    } else if (nextPrev === 'prev') {
        scrollContainer.scrollBy({ left: -scrollWidth, behavior: "smooth" });
    }
}

var quantities = {};

function plusMinusBtn(plusMinus, btn) {
    var item = btn.closest('.item');
    if (!item) return;

    var quantityElement = item.querySelector('#quantity');
    var itemName = item.querySelector('.food-name').textContent.trim();

    if (!(itemName in quantities)) {
        quantities[itemName] = 0;
    }

    if (plusMinus === 'plus') {
        quantities[itemName]++;
    } else if (plusMinus === 'minus' && quantities[itemName] > 0) {
        quantities[itemName]--;
    }
    if (quantities[itemName] > 0) {
        quantityElement.textContent = quantities[itemName];
    } else {
        quantityElement.textContent = '';
    }
    if (quantities[itemName] === 0) {
        delete menuSelected[itemName];
    }

    var plusMinusBtns = item.querySelectorAll('.plus-minus-btn');
    plusMinusBtns.forEach(btn => {
        btn.classList.add('clicked');
    });

    if (quantities[itemName] === 0) {
        plusMinusBtns.forEach(btn => {
            btn.classList.remove('clicked');
        });
    }

    totalPrice();
    showMyOrderedMenu();
}

var addToCardBtns = document.querySelectorAll('.plus-minus-btn')
var categories = document.querySelectorAll('.category')
var showMyOrderBtn = document.querySelector('.show-my-order')

addToCardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        var item = btn.closest('.item');
        var itemName = item.querySelector('.food-name').textContent.trim();
        var quantity = parseInt(item.querySelector('#quantity').textContent);
        var itemPrice = parseFloat(item.querySelector('.food-price').textContent.trim().replace('₾', ''));
        var price = itemPrice * quantity;

        if (quantity > 0) {
            menuSelected[itemName] = { price, quantity };
        } else {
            delete menuSelected[itemName];
        }

        totalPrice();
        showMyOrderedMenu();
        console.log(menuSelected);

        if (Object.keys(menuSelected).length > 1) {
            showMyOrderBtn.classList.add('show');
        }
    });
});

function totalPrice() {
    var total = 0;
    for (var i in menuSelected) {
        if (i !== 'totalPrice') {
            total += menuSelected[i].price
        }
    }
    menuSelected.totalPrice = total.toFixed(2);
}

var showMenuSection = document.querySelector('.menu-container section table tbody');
var showMainMenuSection = document.querySelector('.menu-container section')

function showMyOrderedMenu() {
    showMenuSection.innerHTML = '';
    Object.keys(menuSelected).forEach(itemName => {
        if (!itemName === 'totalPrice') {
            var item = menuSelected[itemName];
            showMenuSection.innerHTML += `
            <div class="my-order-item">
                <div class="food-name">${itemName}</div>
                <strong>
                    <div class="food-price">₾${item.price.toFixed(2)}</div>
                </strong>
                <div class="quantity">Quantity: ${item.quantity}</div>
            </div>
        `;
        }
    });
}

var showHideMyOrder = document.querySelectorAll('.show-hide-my-order')
var menuContainer = document.querySelector('.menu-container')
var body = document.querySelector('body')
var myMenu = document.querySelector('.menu-container section')

console.log(showHideMyOrder);

showHideMyOrder.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.show-my-order').classList.toggle('show');
        menuContainer.classList.toggle('focus');
        menuContainer.parentNode.style.top = (window.scrollY + 10) + 'px';
        menuContainer.parentNode.classList.toggle('focus');
        body.classList.toggle('no-scroll');
        menuContainer.parentNode.classList.toggle('up');
        renderMyOrder()
        if (!menuContainer.classList.contains('focus')) {
            showMyOrderBtn.classList.add('show');
            showMenuSection.innerHTML = '';
        }
    });
});

function renderMyOrder() {

    showMenuSection.innerHTML = '';
    console.log(showMainMenuSection);

    var myOrderedMenu = ""
    if (Object.keys(menuSelected).length === 1) {
        myOrderedMenu += `
                <div class="my-order-item">
                    <div class="food-name">No items in your order</div>
                </div>
            `
    }
    else {
        for (var i in menuSelected) {
            if (i != 'totalPrice') {
                console.log(i);
                myOrderedMenu += `
                            <tr>
                                <td><i onclick="deleteFood('${i}', event)" class="fa-solid fa-xmark"></i> <div class="food-name food-name-my-menu">${i}</div></td>
                                <td><button class="minus-btn plus-minus-btn" id="minusBtn" onclick="plusMinusBtnInMyMenu('minus', this)"><i class="fa-solid fa-minus"></i></button><div class="quantity">Quantity: ${menuSelected[i].quantity}</div><button class="plus-btn plus-minus-btn" id="plusBtn" onclick="plusMinusBtnInMyMenu('plus', this)"><i class="fa-solid fa-plus"></i></button></td>                  
                                <td><strong><div class="food-price">₾${menuSelected[i].price.toFixed(2)}</div></strong></td>
                            </tr>
                            <br>
                `;
            }
        }
    }
    myOrderedMenu += `
            <div class="total-price">Total Price: <strong>₾${menuSelected.totalPrice}</strong><br>Included VAT18% & Service Fee 0%</div>
        `
    showMenuSection.innerHTML = myOrderedMenu;
}

function deleteFood(itemName, event) {
    event.stopPropagation();

    if (menuSelected[itemName]) {
        delete menuSelected[itemName];
        renderMyOrder();
        totalPrice();
        document.querySelector('tbody .total-price').innerHTML = `Total Price: <strong>₾${menuSelected.totalPrice}</strong><br>Included VAT18% & Service Fee 0%`;
        quantities[itemName] = 0;
        var itemInMenu = document.querySelector(`.${itemName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`);
        var plusMinusBtns = itemInMenu.querySelectorAll('.plus-minus-btn');
        if (itemInMenu) {
            itemInMenu.querySelector('.quantity').textContent = '';
            console.log('aaaa');

            plusMinusBtns.forEach(btn => {
                btn.classList.remove('clicked');
            });
        }
    }
}

function plusMinusBtnInMyMenu(plusMinus, button) {
    var item = button.closest('tr');
    if (!item) {
        console.error('No .my-order-item found for the button');
        return;
    }

    var quantityElement = item.querySelector('.quantity');
    var quantity = parseInt(quantityElement.textContent.split(': ')[1]);
    var itemName = item.querySelector('.food-name').textContent.trim();
    var itemPriceWithQuantity = parseFloat(item.querySelector('.food-price').textContent.trim().replace('₾', '').trim());
    console.log(itemPriceWithQuantity);

    var itemPrice = itemPriceWithQuantity / quantity;
    var price = itemPrice * quantity;

    if (quantity === 1 && plusMinus === 'minus') {
        deleteFood(itemName, event)
    }
    else if (plusMinus === 'plus') {
        quantity++;
        quantities[itemName]++;
    } else if (plusMinus === 'minus' && quantity > 1) {
        quantity--;
        quantities[itemName]--;
    }
    var itemInMenu = document.querySelector(`.${itemName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`);

    console.log(itemInMenu);

    if (itemInMenu) {
        itemInMenu.querySelector('.quantity').textContent = `${quantity}`;
    }

    console.log(menuSelected);


    quantityElement.textContent = `Quantity: ${quantity}`;

    var price = itemPrice * quantity;
    item.querySelector('.food-price').textContent = `₾${price.toFixed(2)}`;
    menuSelected[itemName].price = price;
    menuSelected[itemName].quantity = quantity;

    totalPrice();
    splitOrder(false)
    document.querySelector('tbody .total-price').innerHTML = `Total Price: <strong>₾${menuSelected.totalPrice}</strong><br>Included VAT18% & Service Fee 0%`
}

window.addEventListener('click', (e) => {
    let isClickInsideMenuButton = false;
    let isClickInsidePlusMinusBtn = false;

    showHideMyOrder.forEach(button => {
        if (button.contains(e.target)) {
            isClickInsideMenuButton = true;
        }
    });

    if (e.target.closest('.plus-minus-btn')) {
        isClickInsidePlusMinusBtn = true;
    }

    if (!isClickInsideMenuButton && !menuContainer.contains(e.target) && !isClickInsidePlusMinusBtn) {
        menuContainer.parentNode.classList.add('up');
        menuContainer.parentNode.style.top = '0px';
        menuContainer.classList.remove('focus');
        menuContainer.parentNode.classList.remove('focus');
        body.classList.remove('no-scroll');
    }
});

var takeScreenshotContainer = document.querySelector('.menu-container');
var downloadBtn = document.querySelector('.take-screenshot-btn');

async function takeScreenshot() {
    try {
        var canvas = await html2canvas(takeScreenshotContainer, { useCORS: true });
        var imageUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'menu.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showMyOrderBtn.classList.add('show');

    } catch (error) {
        console.error("Screenshot failed:", error);
    }
}

var splitOrderPopup = document.querySelector('.split-order-popup');
var manQuantity = 1;

function splitOrder(show) {
    if (show) {
        splitOrderPopup.classList.add('active')
    }

    splitOrderPopup.innerHTML = `
        <p>₾${menuSelected.totalPrice}</p>
        <div class="plus-minus-man-quantity">
            <p><i class="fa-solid fa-minus plus-minus-btn"></i></p>
            <p>${manQuantity}</p>
            <p><i class="fa-solid fa-plus plus-minus-btn"></i></p>
        </div>
        <p>₾${(Math.floor(menuSelected.totalPrice / manQuantity * 100) / 100).toFixed(2)} Per Person</p>
    `;

    splitOrderPopup.querySelector('i.fa-plus').addEventListener('click', () => {
        manQuantity++
        splitOrder(true)
    });
    splitOrderPopup.querySelector('i.fa-minus').addEventListener('click', () => {
        if (manQuantity == 1) return
        manQuantity--
        splitOrder(true)
    });
}