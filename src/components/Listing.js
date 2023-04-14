import Item from "./Item";

export default function Listing({ items = [] }) {
  return (
    <div className="item-list">
      {items.map(i => <Item item={i} key={i.listing_id}/>)}
    </div>
  );
}
