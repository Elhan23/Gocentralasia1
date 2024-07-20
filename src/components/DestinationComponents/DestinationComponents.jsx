import "./DestinationComponents.scss";
import mountain from "../../assets/images/mountain.png";

function DestinationComponents() {
  return (
    <section className="global_kg_style container">
      <div className="kg_style">
        <h1>Kyrgyzstan</h1>
        <button>Transfers</button>
      </div>

      <span>
        <img src={mountain} alt="mountain" />
      </span>
      
      <div className="description_style">
        <span>
          <h3>Exploring the Area</h3>
          <p>
            Jalal-Abad town is the capital of the Jalal Abad region. It is the
            third city in Kyrgyzstan, has more than 100.000 inhabitants and
            situated at an altitude of 766 meters asl. Jalal-Abad can be a good
            starting point for many tours to the historical, cultural and
            adventure places in the area.
          </p>
        </span>

        <span>
          <h3>Where to Stay</h3>
          <p>
            Today Jalal-Abad is a popular place to stay. More and more people
            want to visit and see the colorful multi-national town of “young
            people”. Popular sayings: “Jalal-Abad town is the town of
            youngsters”. New opened doors of Kok-Art hotel will surprise you
            with the best service, fresh and new design and facilities. 
            Tien-Shan Hotel, Roza Park hotel also could welcome you. Small
            family-run guesthouses, cozy and hospitable with tasty meals and
            family surroundings. The popular movement of hostels also emerged
            Jalal-Abad, possibly to book and stay in hostels too.
          </p>
        </span>

        <span>
          <h3>What to See and Do</h3>
          <p>
            The town is very charming with shady streets, running waters in aryk
            and roaring bazaar. Possible to walk around the Toktogul Park –
            relaxing green park. The Kurort in Jalal-Abad is a historic building
            complex. You can feel the Soviet atmosphere of wellness by mineral
            water and mud bath, massage, and physiotherapy. Today this resort as
            many of the Soviet heritage kurorts under the public union
            administration. Near the location here is the list of interesting
            places. From Jalal-Abad possible to have adventure trips to famous
            and touristic Arslanbob.  As the best decision, we recommend you to
            visit the villages of Kyzyl-Unkur and Kara-Alma, both located at a
            massive natural walnut forest area, with the less touristic and
            crowded area. Sary-Chelek is another jewel of the region with
            emerald lake and marvelous stunning nature and surroundings. That is
            the territory of the Biosphere and Nature Reserve. Get a chance to
            see that. Saimaluu-Tash (Embroidered Stone)/Kazarman is the largest
            collection of petroglyphs in Central Asia. Ozgon or Uzgen is an old
            town, dated from the middle ages with saved Uzgen Minaret and
            Mausoleum of the 12th century
          </p>
        </span>

        <span>
          <h3>How to Get Around</h3>
          <p>
            To reach Jalal-Abad from Bishkek possible on a shared taxi from
            Western Bus station in Bishkek or near Osh Bazaar. It takes 570 km,
            about 10 hours driving. Possible to catch a shared taxi from Osh
            town, Ozgon and Bazar-Korgon.
          </p>
        </span>
      </div>
    </section>
  );
}

export default DestinationComponents;
