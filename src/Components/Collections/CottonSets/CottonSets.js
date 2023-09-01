import React from "react";
import style from "./CottonSets.module.css";
import { CottonSetsData } from "../../../data";
import { useValue } from "../../../context";
const CottonSets = () => {
  const {isLoading,addToCart} = useValue();
  return (
    <div className={style.outer}>
      <h1 className={style.h1}>Cotton Suits for women</h1>
      <p className={style.para}>Cotton has been the most comfortable and popular fabric among Indian women for centuries! The soft, durable, and versatile nature of this gorgeous fabric has made this one a summer staple in women's wardrobes, and one of the prettiest ways to wear cotton in summer is to wear a gorgeous cotton suit. Women's cotton suits not only look stunning, but they keep you breezy and comfortable all day long. Libas offers a wide range of cotton suits for women that includes different shapes and styles of suits like straight suits, anarkali suits, sharara suits, palazzo suits, and more. Additionally, these cotton suits are made with a huge number of shades for you to pick your favourite one. Furthermore, the Libas’ cotton suit (women) come in multiple sizes, starting from extra small ones for petite body types and up to six times the extra large ones for plus-size body types. Buy the best cotton suit online from the official website or mobile app, and save big on your orders.</p>
      <div className={style.container}>
        {CottonSetsData.map((product, index) => (
          <>
            <div className={style.card} key={index}>
              <img src={product.img} alt="" />
              <p>{product.title}</p>
              <span>₹ {product.price}</span>
          <button  disabled={isLoading} onClick={() => addToCart(product)}>Add to Cart</button>

            </div>
          </>
        ))}
      </div>
      <div className={style.details}>
        <h2>Look Elegant In Graceful Ethnic Cotton Suits From Libas</h2>
        <p>
          Cotton is regarded as one of the most breathable and soothing Indian
          weaves. Not only can the material survive significant wear and tear,
          it also looks and feels premium. Given the hot and humid Indian
          climate, cotton suits and dresses are thus no less than a blessing. In
          addition, the crisp texture of the fabric helps you to look put
          together at all times.
        </p>

        <p>
          You, too, can get your hands on some of the finest cotton woven suits
          and dresses by browsing Libas’ whimsical selection. So whether you're
          looking for cotton salwar suits that have a royal appeal or a
          flattering dress for a festive occasion, you will have no trouble at
          all when searching through Libas. Continue reading to explore the
          variety of cotton suits available online and tips on how to best style
          them.
        </p>

        <h3>A Comprehensive Guide To Styling Cotton Suits</h3>
        <p>
          We have a wide range of choices when it comes to cotton suit sets for
          women. From classic designs to modern styles, you will find them all.
          Listed below are some of the style options you can choose from.
        </p>

        <h3>Anarkali Suits:</h3>
        <p>
          These charming ethnic dresses feature a fitted kurta that flares
          dramatically into several pleats along with fitted or flared pants.
          The Anarkali suits offered on Libas are available in both printed
          patterns as well as solid colours. So make a statement this festive
          season by donning an Anarkali dress in cotton material.
        </p>

        <h3>Dhoti-Kurta Sets:</h3>
        <p>
          If you are a Patiala suit fanatic, this category features some of our
          finest dhoti-style pants with short kurtis and matching dupattas. The
          pleated design combined with the crispness of cotton makes these
          dhoti-kurta sets a must-have ethnic ensemble.
        </p>

        <h3>Palazzo Suit Sets:</h3>
        <p>
          Experience the joy of relaxed fit palazzo suits and never compromise
          on your comfort again. These sets have a women's long kurti paired
          with flared and breezy palazzo pants and a statement dupatta. Each
          piece features fascinating prints such as florals, geometric shapes,
          and Paisley, along with metallic motifs in gold or silver hues.
        </p>

        <h3>Salwar Suits:</h3>
        <p>
          Get your hands on this evergreen ethnic dress by browsing Libas’
          curated collection. These classy cotton salwar suit sets feature long
          kurtis and salwars, which are essentially flowy bottoms with a relaxed
          fit.
        </p>

        <h3>A Comprehensive Guide To Styling Cotton Suits</h3>
        <p>
          Styling cotton suits is not a difficult task as they can almost
          effortlessly give you a polished look. However, if you wish to
          reinvent your style, then the following tips will surely come in
          handy:
        </p>

        <h4>Choose Cotton Suits for Your Next Big Interview</h4>
        <p>
          Cotton suits lend a formal look that will give you the confidence to
          get the job. Feel confident in a monochromatic salwar suit with flat
          sandals, light makeup and hair tied into a neat braid or bun. Finish
          off the look by wearing some pearly studs and a wristwatch.
          Alternatively, if you are looking for a hint of casualness in your
          look, you can opt for a palazzo set with a printed kurti. You will
          find plenty of choices in our collection of palazzo kurta sets online
          on Libas.
        </p>

        <h4>Get Dressed to the Nines for Special Events:</h4>
        <p>
          For an engagement party or wedding functions such as haldi, mehendi or
          sangeet, you can opt for a designer cotton suit and pair it with heavy
          ornamental jewellery. Style your outfit with a pair of gorgeous heels
          and a high bun decorated with roses. The ideal cotton suits for such
          functions include Anarkalis, dhoti-kurta sets and Patiyala suits. We
          have an exciting collection of cotton suits and party wear that you
          should explore.
        </p>

        <h4>Cotton Suits for Fashionable Mommy’s</h4>
        <p>
          If you regularly attend parent-teacher meetings and other school
          events, consider donning a well-crafted cotton printed suit. Keep the
          look simple and casual with open hair, natural makeup and a pair of
          juttis or wedges.
        </p>

        <h4>Match the Festive Energy with Traditional Cotton Ensembles</h4>
        <p>
          For traditional functions on festivals, don cotton suits for women
          featuring visually appealing embellishments and motifs. Alternatively,
          you can also go for a trendy cotton saree. Pair this outfit with a
          pair of heels, ornate jhumkas and a stack of finger rings. Complete
          the look with a bindi, kajal and mascara to accentuate the eyes.
        </p>

        <h4>Family Gatherings</h4>
        <p>
          For a simple family get-together, go for a captivating salwar suit set
          consisting of a sleeveless kurta and a net dupatta for some added
          texture. Since there will be a lot of running around, go easy on the
          accessories and ditch the heels. Instead, wear a pair of ballerina
          flats and simple earrings along with a thin chain around your neck.
          Tie your hair in a side braid to keep your tresses out of your face.
        </p>

        <h3>COTTON SUITS FOR WOMEN - TRENDING SUMMER COLOURS</h3>
        <p>
          The sweltering heat demands light and breezy clothing that can provide
          comfort while keeping you stylish at the same time. One of the best
          options for women this season is cotton suit designs that are perfect
          for daily wear or special occasions. Let’s talk about the trending
          summer colours for a cotton suit set for women.
        </p>

        <h3>White cotton suits:</h3>
        <p>
          White is a classic and timeless colour that never goes out of style.
          This summer, a white cotton suit for women with minimal embroidery or
          prints are trending. You can pair your white suit for women with
          colourful dupattas or palazzos for a pop of colour. Whether you are
          going for a casual day out or attending a festive event, white cotton
          suit sets are a must-have in your summer wardrobe.
        </p>

        <h3>Yellow cotton suits:</h3>
        <p>
          Yellow is the colour of happiness and positivity. It is a great colour
          for summer as it adds a cheerful vibe to your outfit. A yellow Patiala
          suit for women is especially in vogue this season. You can pair your
          yellow ladies’ cotton suit with casual sandals or juttis for a chic
          and laid-back look. This colour is perfect for daytime events or a
          brunch date with friends.
        </p>

        <h3>Pink cotton suits:</h3>
        <p>
          Pink is a feminine and elegant colour that is perfect for summer. From
          baby pink to hot pink, there are various shades of pink that you can
          choose from for cotton suits. This season, a pink cotton suit
          (women’s) with intricate embroidery or mirror work or even simple
          frock suit designs are popular. You can pair your pink suits with
          silver or gold jewellery to complete your look. This colour is perfect
          for daytime weddings or formal events.
        </p>

        <h3>Pink cotton suits:</h3>
        <p>
          Cotton suits online on Libas are a great option for summer as they
          provide comfort and style at the same time. These suits come in a wide
          range of designs including trendy hemlines and modern sleeves designs
          for suits. You can accessorise your suits with statement jewellery and
          footwear for a complete look. So, go ahead and add a trendy cotton
          suit online by Libas to your summer wardrobe for a stylish and
          comfortable season ahead!
        </p>

        <h3>Shop For Gorgeous Cotton Suits On Libas</h3>
        <p>
          If you wish to add some eclectic ethnic outfits to your collection,
          sift through Libas’ curated listings. Here you will find everything
          ethnic from simple salwar suits to glamorous Anarkali sets in distinct
          designs and silhouettes. We also promise authentic weaves from across
          the country that are bound to leave you speechless. The materials are
          of superior quality; thus, comfort is assured.
        </p>

        <p>
          In addition to this, we offer seasonal discounts, pan-India delivery,
          safe payment options and 15-day hassle-free returns that make your
          online shopping experience all the more fun. So make the most of
          Libas’ splendid ethnic wear collection by signing up today.
        </p>

        <h2>Cotton Suits - Frequently Asked Questions</h2>
        <h3>Which cotton suit is the best?</h3>
        <p>
          Cotton printed suits with palazzo pants are the best for daily wear.
          Cotton suits with chikankari embroidery and beautiful dupattas are
          ideal for wedding functions and parties. Cotton salwar suits with
          gotta patti work can also be a good choice for any function, while
          printed or solid-coloured cotton suits are perfect workwear. If you
          are looking for the best cotton suits, you must explore our ethnic
          collection on Libas.
        </p>

        <h3>How to pick the right cotton suits?</h3>
        <p>
          Libas offers an assortment of options to choose from when it comes to
          cotton suits for women. To pick the right cotton suit, you need to
          keep a few things in mind, such as the size, cut, design, etc. To
          select the perfect ensemble, there are three questions that you must
          ask yourself: 1. Is this ideal for the occasion I want to attend?2.
          Will this colour suit my skin tone? 3. Does this style or silhouette
          flatter my body type?If the answers to these questions are positive,
          you can pick up that dress as it is the perfect choice for you.
        </p>

        <h3>On which occasions cotton suits can be worn?</h3>
        <p>
          Cotton suits are ideal for all occasions, be it wedding functions or
          casual parties. You can sport cotton dresses everywhere. You just need
          to pick the perfect dress based on the occasion. Heavily embroidered
          or embellished cotton suits are ideal for wedding functions and
          parties. Cotton suits with light prints and solid colours are perfect
          for daily wear. Pastel coloured cotton suits with minimal prints and
          formal cuts are good choices for office wear. If you are looking for
          cotton suits party wear, explore our unique collection on Libas right
          away.
        </p>

        <h3>Why should we wear cotton suits in summer?</h3>
        <p>
          Cotton fabric is light, breathable, easy to clean, and soft on the
          skin, making it the perfect fabric for summer. Crafting outfits is
          easy with this fabric, which can be used in many versatile ways. Women
          cotton suits available on Libas are of premium quality with
          contemporary designs, making them the best options for summer outfits.
        </p>
      </div>
    </div>
  );
};

export default CottonSets;
