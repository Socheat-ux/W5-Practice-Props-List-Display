export default function Cart({name, color, image}) {
  return (
    <li className="cart-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>{name}</h3>
        <p>{color}</p>
      </button>
    </li>
  );
}