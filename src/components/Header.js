const Header = (props) => {
  return (
    <header>
      <button
        id="all"
        style={{
          border: props.flavor === "" ? "2px solid rgb(182, 129, 7)" : null,
        }}
        onClick={props.setFlavorAll}
      >
        ALL
      </button>
      <button
        id="salty"
        style={{
          border:
            props.flavor === "salty" ? "2px solid rgb(182, 129, 7)" : null,
        }}
        onClick={props.setFlavorSalty}
      >
        SALTY
      </button>
      <button
        id="sweet"
        style={{
          border:
            props.flavor === "sweet" ? "2px solid rgb(182, 129, 7)" : null,
        }}
        onClick={props.setFlavorSweet}
      >
        SWEET
      </button>
    </header>
  );
};

export default Header;
