import Button from "./Button";

const ProductCard = ({ cafeImg, name, price, available, infoCafe }) => {
  return (
    <div className={`group ${available ? "opacity-100" : "opacity-40 -z-10"}`}>
      <div className="flex flex-col gap-6 border-2 rounded group-hover:bg-[#E3DED7] p-6 justify-center items-center">
        <img src={cafeImg} alt="cafe" />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-sm font-semibold">{name}</p>
          <p>{price.toFixed(2)}€</p>
        </div>
        <Button intent={available ? "añadir" : "agotado"} size={"small"}>
          {available ? " Añadir" : "Agotado"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
