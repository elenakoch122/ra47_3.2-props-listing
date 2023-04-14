export default function Item({ item }) {
  if (item.state === 'removed') return;

  const title = item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title;

  let price;
  switch (item.currency_code) {
    case 'USD':
      price = `$${item.price}`;
      break;
    case 'EUR':
      price = `€${item.price}`;
      break;
    default:
      price = `${item.price} ${item.currency_code}`;
  }

  let quantity;
  switch (true) {
    case item.quantity <= 10:
      quantity = 'low';
      break;
    case item.quantity <= 20:
      quantity = 'medium';
      break;
    default:
      quantity = 'high';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt=""/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={`item-quantity level-${quantity}`}>{item.quantity} left</p>
      </div>
    </div>
  );
}
