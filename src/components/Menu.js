import Items from "./Items.js";

const Menu = (props) => {
  if (props.flavor === "") {
    return Items.map((item) => (
      <div id={item.name} key={item.name} className="items">
        <h2>{item.name}</h2>
        <img src={item.img} alt={item.name} />
      </div>
    ));
  }

  if (props.flavor === "salty")
    return Items.map((item) =>
      item.category === "salty" ? (
        <div id={item.name} key={item.name} className="items">
          <h2>{item.name}</h2>
          <img src={item.img} alt={item.name} />
        </div>
      ) : null
    );

  if (props.flavor === "sweet")
    return Items.map((item) =>
      item.category === "sweet" ? (
        <div id={item.name} key={item.name} className="items">
          <h2>{item.name}</h2>
          <img src={item.img} alt={item.name} />
        </div>
      ) : null
    );
};

export default Menu;
