function BuyNowButton({ priceId }) {
  return (
    <form action="/api/checkout" method="POST">
      <input type="hidden" name="id" value="from dashboard" />
      <input type="hidden" name="price" value={priceId} />
      <button className="bg-red-800 text-stone-100 font-bold p-2 rounded-3xl w-[8rem] text-sm uppercase shadow-sm shadow-black text-center">
        Buy Now
      </button>
    </form>
  );
}
export { BuyNowButton };
